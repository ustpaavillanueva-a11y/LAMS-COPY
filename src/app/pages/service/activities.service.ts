import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Activity {
    activityId: string;
    actionType: string;
    entityType: string;
    targetName: string;
    targetId: string | null;
    description: string;
    apiEndpoint: string | null;
    httpMethod: string | null;
    status: string;
    userRole: string;
    userAgent: string | null;
    ipAddress: string | null;
    timestamp: string;
    actor: {
        userId: string;
        userName: string;
        email: string;
        firstName: string;
        lastName: string;
        role: string;
    };
    actorId: string;
    campus: any | null;
    campusId: string | null;
}

export interface ActivitiesResponse {
    activities: Activity[];
    total: number;
}

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {
    constructor(private http: HttpClient) {}

    getMyLogs(): Observable<ActivitiesResponse> {
        return this.http.get<ActivitiesResponse>(`${environment.apiUrl}/activities/my-logs`);
    }

    getSystemLogs(): Observable<ActivitiesResponse> {
        return this.http.get<ActivitiesResponse>(`${environment.apiUrl}/activities/system-logs`);
    }
}
