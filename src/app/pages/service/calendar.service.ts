import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    end?: string;
    extendedProps: {
        type: 'schedule' | 'maintenance'; // schedule or maintenance
        campus?: string;
        lab?: string;
        location?: string;
        subject?: string;
        instructor?: string;
        section?: string;
        totalStudents?: number;
        status?: string;
        priority?: string;
        maintenanceType?: string;
        requestedBy?: string;
        assignedTo?: string;
        equipment?: string;
        description?: string;
        color?: string;
    };
}

@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    private baseApiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    /**
     * Get calendar events from unified endpoint (role-based on backend)
     */
    getCalendarEvents(): Observable<CalendarEvent[]> {
        return this.http.get<any>(`${this.baseApiUrl}/calendar/events`).pipe(
            map((response) => {
                const events: CalendarEvent[] = [];

                // Process schedules
                if (response.data?.schedules && Array.isArray(response.data.schedules)) {
                    response.data.schedules.forEach((schedule: any) => {
                        events.push(this.createScheduleEvent(schedule));
                    });
                }

                // Process maintenance
                if (response.data?.maintenance && Array.isArray(response.data.maintenance)) {
                    response.data.maintenance.forEach((maintenance: any) => {
                        events.push(this.createMaintenanceEvent(maintenance));
                    });
                }

                console.log('Calendar events loaded:', events.length, 'events');
                return events;
            }),
            catchError((error) => {
                console.error('Error loading calendar events:', error);
                return of([]);
            })
        );
    }

    /**
     * Create a calendar event from a schedule object
     */
    private createScheduleEvent(schedule: any): CalendarEvent {
        // Get the next occurrence of the specified day of week
        const dayOfWeek = schedule.dayOfWeek; // e.g., "Monday"
        const nextDate = this.getNextDayOfWeek(dayOfWeek);

        // Parse time strings
        const [startHour, startMinute] = schedule.startTime?.split(':') || ['09', '00'];
        const [endHour, endMinute] = schedule.endTime?.split(':') || ['10', '00'];

        const startDateTime = new Date(nextDate);
        startDateTime.setHours(parseInt(startHour), parseInt(startMinute), 0, 0);

        const endDateTime = new Date(nextDate);
        endDateTime.setHours(parseInt(endHour), parseInt(endMinute), 0, 0);

        return {
            id: `schedule-${schedule.scheduleId}`,
            title: `${schedule.subjectCode || 'Lab'} - ${schedule.subject || 'N/A'}`,
            start: startDateTime.toISOString(),
            end: endDateTime.toISOString(),
            extendedProps: {
                type: 'schedule',
                campus: schedule.campus || 'N/A',
                lab: schedule.labName || 'N/A',
                location: schedule.building || 'N/A',
                subject: schedule.subject || 'N/A',
                instructor: schedule.instructorName || 'N/A',
                totalStudents: schedule.totalStudents || 0,
                color: '#3b82f6' // Blue for schedules
            }
        };
    }

    /**
     * Create a calendar event from a maintenance object
     */
    private createMaintenanceEvent(maintenance: any): CalendarEvent {
        // Use scheduledAt if available, otherwise use submittedDate
        let eventDate: Date;
        if (maintenance.scheduledAt) {
            eventDate = new Date(maintenance.scheduledAt);
        } else if (maintenance.submittedDate) {
            eventDate = new Date(maintenance.submittedDate);
        } else {
            eventDate = new Date();
        }

        // Generate unique ID based on available IDs
        const eventId = maintenance.maintenanceApprovalId || maintenance.maintenanceRequestId || `maintenance-${Date.now()}`;

        return {
            id: `maintenance-${eventId}`,
            title: `${maintenance.maintenanceType || 'Maintenance'} - ${maintenance.equipmentName || 'Equipment'}`,
            start: eventDate.toISOString(),
            extendedProps: {
                type: 'maintenance',
                equipment: maintenance.equipmentName || 'N/A',
                maintenanceType: maintenance.maintenanceType || 'N/A',
                requestedBy: maintenance.requestedBy || 'N/A',
                assignedTo: maintenance.assignedTechnician || 'Not Assigned',
                priority: maintenance.priority || 'N/A',
                status: maintenance.status || 'Pending',
                description: maintenance.description || 'No description',
                location: maintenance.building || 'N/A',
                color: this.getMaintenanceColor(maintenance.priority)
            }
        };
    }

    /**
     * Get the next occurrence of a specific day of week
     */
    private getNextDayOfWeek(dayName: string): Date {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const targetDay = daysOfWeek.indexOf(dayName);

        if (targetDay === -1) {
            return new Date(); // Return today if invalid day name
        }

        const today = new Date();
        const currentDay = today.getDay();

        // Calculate days until next occurrence
        let daysUntilTarget = targetDay - currentDay;
        if (daysUntilTarget <= 0) {
            daysUntilTarget += 7;
        }

        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + daysUntilTarget);

        return nextDate;
    }

    /**
     * Get color based on maintenance priority
     */
    private getMaintenanceColor(priority: string): string {
        switch (priority?.toLowerCase()) {
            case 'high':
                return '#ef4444'; // Red
            case 'medium':
                return '#f59e0b'; // Orange
            case 'low':
                return '#10b981'; // Green
            default:
                return '#8b5cf6'; // Purple
        }
    }
}
