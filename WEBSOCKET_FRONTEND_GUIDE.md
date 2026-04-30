# WebSocket Frontend Integration Guide

## Overview

This document provides guidance on integrating WebSocket services into your Angular components for real-time updates.

## Available WebSocket Services

Seven WebSocket services are available for different namespaces:

1. **MaintenanceWebSocketService** - Maintenance request updates
2. **ActivitiesWebSocketService** - Activity logging feed
3. **AssetsWebSocketService** - Asset updates
4. **CalendarWebSocketService** - Calendar and schedule events
5. **UsersWebSocketService** - User management updates
6. **LaboratoriesWebSocketService** - Laboratory CRUD operations
7. **DepartmentsWebSocketService** - Department management updates

## Basic Usage Pattern

### 1. Import the Service

```typescript
import { MaintenanceWebSocketService } from './maintenance-websocket.service';
```

### 2. Inject in Constructor

```typescript
constructor(private maintenanceWs: MaintenanceWebSocketService) {}
```

### 3. Connect and Subscribe in ngOnInit

```typescript
ngOnInit() {
    // Connect to the WebSocket namespace
    this.maintenanceWs.connect();

    // Subscribe to events
    this.maintenanceWs.onMaintenanceRequestCreated().subscribe(event => {
        if (event.success) {
            console.log('New maintenance request:', event.data);
            // Update your component data
            this.refreshMaintenanceList();
        }
    });
}
```

### 4. Disconnect in ngOnDestroy

```typescript
ngOnDestroy() {
    this.maintenanceWs.disconnect();
}
```

## Complete Component Example

### Maintenance Component Integration

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MaintenanceWebSocketService, MaintenanceRequest } from './maintenance-websocket.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit, OnDestroy {
    maintenanceRequests: MaintenanceRequest[] = [];
    private subscriptions: Subscription[] = [];

    constructor(private maintenanceWs: MaintenanceWebSocketService) {}

    ngOnInit() {
        // Connect to WebSocket
        this.maintenanceWs.connect();

        // Subscribe to new maintenance requests
        this.subscriptions.push(
            this.maintenanceWs.onMaintenanceRequestCreated().subscribe(event => {
                if (event.success) {
                    this.maintenanceRequests.unshift(event.data);
                    this.showNotification('New maintenance request received', 'info');
                }
            })
        );

        // Subscribe to approved requests
        this.subscriptions.push(
            this.maintenanceWs.onMaintenanceApproved().subscribe(event => {
                if (event.success) {
                    this.updateMaintenanceRequest(event.data);
                    this.showNotification('Maintenance request approved', 'success');
                }
            })
        );

        // Subscribe to completed maintenance
        this.subscriptions.push(
            this.maintenanceWs.onMaintenanceCompleted().subscribe(event => {
                if (event.success) {
                    this.updateMaintenanceRequest(event.data);
                    this.showNotification('Maintenance completed', 'success');
                }
            })
        );

        // Subscribe to updates
        this.subscriptions.push(
            this.maintenanceWs.onMaintenanceRequestUpdated().subscribe(event => {
                if (event.success) {
                    this.updateMaintenanceRequest(event.data);
                }
            })
        );
    }

    ngOnDestroy() {
        // Unsubscribe from all observables
        this.subscriptions.forEach(sub => sub.unsubscribe());
        
        // Disconnect from WebSocket
        this.maintenanceWs.disconnect();
    }

    private updateMaintenanceRequest(updatedRequest: MaintenanceRequest) {
        const index = this.maintenanceRequests.findIndex(
            req => req.requestId === updatedRequest.requestId
        );
        if (index !== -1) {
            this.maintenanceRequests[index] = updatedRequest;
        }
    }

    private showNotification(message: string, severity: string) {
        // Implement your notification logic (e.g., using PrimeNG Toast)
        console.log(`${severity.toUpperCase()}: ${message}`);
    }
}
```

### Assets Component Integration

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AssetsWebSocketService, Asset } from './services/assets-websocket.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-assets',
    templateUrl: './assets.component.html'
})
export class AssetsComponent implements OnInit, OnDestroy {
    assets: Asset[] = [];
    private subscriptions: Subscription[] = [];

    constructor(private assetsWs: AssetsWebSocketService) {}

    ngOnInit() {
        this.assetsWs.connect();

        // Listen for new assets
        this.subscriptions.push(
            this.assetsWs.onAssetCreated().subscribe(event => {
                if (event.success) {
                    this.assets.push(event.data);
                    this.showToast('New asset added', 'success');
                }
            })
        );

        // Listen for asset updates
        this.subscriptions.push(
            this.assetsWs.onAssetUpdated().subscribe(event => {
                if (event.success) {
                    const index = this.assets.findIndex(a => a.assetId === event.data.assetId);
                    if (index !== -1) {
                        this.assets[index] = event.data;
                    }
                }
            })
        );

        // Listen for status changes
        this.subscriptions.push(
            this.assetsWs.onAssetStatusChanged().subscribe(event => {
                if (event.success) {
                    const index = this.assets.findIndex(a => a.assetId === event.data.assetId);
                    if (index !== -1) {
                        this.assets[index].status = event.data.status;
                    }
                    this.showToast(`Asset status changed to ${event.data.status}`, 'info');
                }
            })
        );

        // Listen for deletions
        this.subscriptions.push(
            this.assetsWs.onAssetDeleted().subscribe(event => {
                if (event.success) {
                    this.assets = this.assets.filter(a => a.assetId !== event.data.assetId);
                    this.showToast('Asset deleted', 'warn');
                }
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.assetsWs.disconnect();
    }

    private showToast(message: string, severity: string) {
        // Your toast implementation
    }
}
```

### Calendar/Schedule Component Integration

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CalendarWebSocketService, CalendarEvent, Schedule } from '../service/calendar-websocket.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit, OnDestroy {
    events: CalendarEvent[] = [];
    schedules: Schedule[] = [];
    private subscriptions: Subscription[] = [];

    constructor(private calendarWs: CalendarWebSocketService) {}

    ngOnInit() {
        this.calendarWs.connect();

        // Calendar events
        this.subscriptions.push(
            this.calendarWs.onCalendarEventCreated().subscribe(event => {
                if (event.success) {
                    this.events.push(event.data);
                    this.refreshCalendar();
                }
            })
        );

        this.subscriptions.push(
            this.calendarWs.onCalendarEventUpdated().subscribe(event => {
                if (event.success) {
                    const index = this.events.findIndex(e => e.eventId === event.data.eventId);
                    if (index !== -1) {
                        this.events[index] = event.data;
                        this.refreshCalendar();
                    }
                }
            })
        );

        // Schedule events
        this.subscriptions.push(
            this.calendarWs.onScheduleCreated().subscribe(event => {
                if (event.success) {
                    this.schedules.push(event.data);
                    this.refreshSchedule();
                }
            })
        );

        this.subscriptions.push(
            this.calendarWs.onScheduleUpdated().subscribe(event => {
                if (event.success) {
                    const index = this.schedules.findIndex(s => s.scheduleId === event.data.scheduleId);
                    if (index !== -1) {
                        this.schedules[index] = event.data;
                        this.refreshSchedule();
                    }
                }
            })
        );

        this.subscriptions.push(
            this.calendarWs.onScheduleDeleted().subscribe(event => {
                if (event.success) {
                    this.schedules = this.schedules.filter(s => s.scheduleId !== event.data.scheduleId);
                    this.refreshSchedule();
                }
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.calendarWs.disconnect();
    }

    private refreshCalendar() {
        // Refresh your calendar view
    }

    private refreshSchedule() {
        // Refresh your schedule view
    }
}
```

### Users Management Component Integration

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersWebSocketService, User } from './users-websocket.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {
    users: User[] = [];
    private subscriptions: Subscription[] = [];

    constructor(private usersWs: UsersWebSocketService) {}

    ngOnInit() {
        this.usersWs.connect();

        this.subscriptions.push(
            this.usersWs.onUserCreated().subscribe(event => {
                if (event.success) {
                    this.users.push(event.data);
                }
            })
        );

        this.subscriptions.push(
            this.usersWs.onUserUpdated().subscribe(event => {
                if (event.success) {
                    const index = this.users.findIndex(u => u.userId === event.data.userId);
                    if (index !== -1) {
                        this.users[index] = event.data;
                    }
                }
            })
        );

        this.subscriptions.push(
            this.usersWs.onUserActivated().subscribe(event => {
                if (event.success) {
                    const index = this.users.findIndex(u => u.userId === event.data.userId);
                    if (index !== -1) {
                        this.users[index].isActive = true;
                    }
                }
            })
        );

        this.subscriptions.push(
            this.usersWs.onUserDeactivated().subscribe(event => {
                if (event.success) {
                    const index = this.users.findIndex(u => u.userId === event.data.userId);
                    if (index !== -1) {
                        this.users[index].isActive = false;
                    }
                }
            })
        );

        this.subscriptions.push(
            this.usersWs.onUserDeleted().subscribe(event => {
                if (event.success) {
                    this.users = this.users.filter(u => u.userId !== event.data.userId);
                }
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.usersWs.disconnect();
    }
}
```

### Activities Feed Component Integration

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivitiesWebSocketService, Activity } from './activities-websocket.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html'
})
export class ActivitiesComponent implements OnInit, OnDestroy {
    activities: Activity[] = [];
    private subscription: Subscription;

    constructor(private activitiesWs: ActivitiesWebSocketService) {}

    ngOnInit() {
        this.activitiesWs.connect();

        this.subscription = this.activitiesWs.onActivityLogged().subscribe(event => {
            if (event.success) {
                // Add to beginning of array for latest-first display
                this.activities.unshift(event.data);
                
                // Optional: Limit array size to prevent memory issues
                if (this.activities.length > 100) {
                    this.activities.pop();
                }
            }
        });
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
        this.activitiesWs.disconnect();
    }
}
```

## Best Practices

### 1. Connection Management

- Connect in `ngOnInit()`
- Disconnect in `ngOnDestroy()`
- Check connection status before operations

### 2. Subscription Management

Always store subscriptions and unsubscribe:

```typescript
private subscriptions: Subscription[] = [];

ngOnInit() {
    this.subscriptions.push(
        this.service.onEvent().subscribe(...)
    );
}

ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
}
```

### 3. Error Handling

```typescript
this.maintenanceWs.onMaintenanceRequestCreated().subscribe({
    next: (event) => {
        if (event.success) {
            // Handle success
        } else {
            console.error('Event failed:', event.message);
        }
    },
    error: (error) => {
        console.error('WebSocket error:', error);
    }
});
```

### 4. Role-Based Features

Check user role before showing real-time features:

```typescript
ngOnInit() {
    const user = this.authService.getCurrentUser();
    
    if (user && ['SuperAdmin', 'CampusAdmin'].includes(user.role)) {
        this.maintenanceWs.connect();
        // Subscribe to events
    }
}
```

### 5. Performance Optimization

Limit data array sizes in real-time feeds:

```typescript
onActivityLogged() {
    this.activitiesWs.onActivityLogged().subscribe(event => {
        if (event.success) {
            this.activities.unshift(event.data);
            
            // Keep only last 50 activities in memory
            if (this.activities.length > 50) {
                this.activities = this.activities.slice(0, 50);
            }
        }
    });
}
```

## Environment Configuration

Update your environment files if backend URL changes:

**environment.development.ts**
```typescript
export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api'
};
```

**environment.ts** (production)
```typescript
export const environment = {
    production: true,
    apiUrl: 'https://your-production-domain.com/api'
};
```

The WebSocket service automatically extracts the base URL (removes `/api`) for WebSocket connections.

## Troubleshooting

### Connection Not Established

1. Check if JWT token exists in localStorage
2. Verify token is valid and not expired
3. Check browser console for connection errors

### Not Receiving Events

1. Ensure you called `connect()` before subscribing
2. Verify you're subscribed to the correct event
3. Check user role has permission for the events
4. Confirm backend is emitting events

### Multiple Connections

Avoid connecting multiple times:

```typescript
private isConnected = false;

connectToWebSocket() {
    if (this.isConnected) return;
    
    this.maintenanceWs.connect();
    this.isConnected = true;
}
```

## Testing

For testing WebSocket integration:

1. Login to get valid JWT token
2. Open browser DevTools > Network > WS
3. See WebSocket connections
4. Perform actions (create/update/delete)
5. Watch console logs for events

## Next Steps

1. Integrate services into your existing components
2. Add notification UI (e.g., PrimeNG Toast)
3. Implement real-time data refresh
4. Add connection status indicators
5. Handle reconnection scenarios
