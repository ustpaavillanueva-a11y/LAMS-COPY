import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketService, WebSocketEvent } from '../../shared/services/websocket.service';

export interface Activity {
    activityId: string;
    userId: string;
    action: string;
    entity: string;
    entityId: string;
    details: string;
    campus: string;
    timestamp: Date;
}

@Injectable({
    providedIn: 'root'
})
export class ActivitiesWebSocketService implements OnDestroy {
    private readonly namespace = '/activities';
    private isConnected = false;

    constructor(private webSocketService: WebSocketService) {}

    /**
     * Connect to activities namespace
     */
    connect(): void {
        if (this.isConnected) {
            return;
        }

        try {
            this.webSocketService.connect(this.namespace);
            this.isConnected = true;
        } catch (error) {
            console.error('Failed to connect to activities WebSocket:', error);
        }
    }

    /**
     * Disconnect from activities namespace
     */
    disconnect(): void {
        this.webSocketService.disconnect(this.namespace);
        this.isConnected = false;
    }

    /**
     * Listen for new activity logs
     */
    onActivityLogged(): Observable<WebSocketEvent<Activity>> {
        return this.webSocketService.on<Activity>(this.namespace, 'activity-logged');
    }

    ngOnDestroy(): void {
        this.disconnect();
    }
}
