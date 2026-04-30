import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketService, WebSocketEvent } from '../../shared/services/websocket.service';

export interface Laboratory {
    laboratoryId: string;
    laboratoryName: string;
    buildingName: string;
    floorNo: string;
    roomNo: string;
    capacity: number;
    campus: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

@Injectable({
    providedIn: 'root'
})
export class LaboratoriesWebSocketService implements OnDestroy {
    private readonly namespace = '/laboratories';
    private isConnected = false;

    constructor(private webSocketService: WebSocketService) {}

    /**
     * Connect to laboratories namespace
     */
    connect(): void {
        if (this.isConnected) {
            return;
        }

        try {
            this.webSocketService.connect(this.namespace);
            this.isConnected = true;
        } catch (error) {
            console.error('Failed to connect to laboratories WebSocket:', error);
        }
    }

    /**
     * Disconnect from laboratories namespace
     */
    disconnect(): void {
        this.webSocketService.disconnect(this.namespace);
        this.isConnected = false;
    }

    /**
     * Listen for new laboratories
     */
    onLaboratoryCreated(): Observable<WebSocketEvent<Laboratory>> {
        return this.webSocketService.on<Laboratory>(this.namespace, 'laboratory-created');
    }

    /**
     * Listen for laboratory updates
     */
    onLaboratoryUpdated(): Observable<WebSocketEvent<Laboratory>> {
        return this.webSocketService.on<Laboratory>(this.namespace, 'laboratory-updated');
    }

    /**
     * Listen for laboratory deletions
     */
    onLaboratoryDeleted(): Observable<WebSocketEvent<{ laboratoryId: string }>> {
        return this.webSocketService.on<{ laboratoryId: string }>(this.namespace, 'laboratory-deleted');
    }

    ngOnDestroy(): void {
        this.disconnect();
    }
}
