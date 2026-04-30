# WebSocket Real-Time Implementation - Frontend

## Quick Start

The WebSocket frontend integration is complete and ready to use. All services have been created and are available for integration into your components.

## What's Been Implemented

### ✅ Core Services

1. **Base WebSocket Service** (`src/app/shared/services/websocket.service.ts`)
   - Handles connection management
   - JWT authentication
   - Automatic reconnection
   - Event subscription/emission

2. **Namespace-Specific Services**
   - ✅ MaintenanceWebSocketService
   - ✅ ActivitiesWebSocketService
   - ✅ AssetsWebSocketService
   - ✅ CalendarWebSocketService
   - ✅ UsersWebSocketService
   - ✅ LaboratoriesWebSocketService
   - ✅ DepartmentsWebSocketService

### 📦 Installation

Socket.io-client has been installed:
```bash
npm install socket.io-client
```

## How to Use

### Simple Integration (Per Component)

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MaintenanceWebSocketService } from './maintenance-websocket.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.component.html'
})
export class MaintenanceComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];

    constructor(private maintenanceWs: MaintenanceWebSocketService) {}

    ngOnInit() {
        // 1. Connect
        this.maintenanceWs.connect();

        // 2. Subscribe to events
        this.subscriptions.push(
            this.maintenanceWs.onMaintenanceRequestCreated().subscribe(event => {
                if (event.success) {
                    console.log('New request:', event.data);
                    // Update your UI
                }
            })
        );
    }

    ngOnDestroy() {
        // 3. Clean up
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.maintenanceWs.disconnect();
    }
}
```

### Global Connection Management

For connecting to WebSockets when the app starts (recommended for real-time apps):

See: `src/app/shared/services/websocket-connection-manager.example.ts`

## Available Events by Service

### Maintenance WebSocket
- `onMaintenanceRequestCreated()`
- `onMaintenanceRequestUpdated()`
- `onMaintenanceApproved()`
- `onMaintenanceDisapproved()`
- `onMaintenanceScheduled()`
- `onMaintenanceCompleted()`
- `onMaintenanceOnHold()`

### Activities WebSocket
- `onActivityLogged()`

### Assets WebSocket
- `onAssetCreated()`
- `onAssetUpdated()`
- `onAssetStatusChanged()`
- `onAssetDeleted()`

### Calendar WebSocket
- `onCalendarEventCreated()`
- `onCalendarEventUpdated()`
- `onCalendarEventDeleted()`
- `onScheduleCreated()`
- `onScheduleUpdated()`
- `onScheduleDeleted()`
- `onScheduleChanged()`

### Users WebSocket
- `onUserCreated()`
- `onUserUpdated()`
- `onUserActivated()`
- `onUserDeactivated()`
- `onUserDeleted()`

### Laboratories WebSocket
- `onLaboratoryCreated()`
- `onLaboratoryUpdated()`
- `onLaboratoryDeleted()`

### Departments WebSocket
- `onDepartmentCreated()`
- `onDepartmentUpdated()`
- `onDepartmentDeleted()`

## Event Data Structure

All events return data in this format:

```typescript
interface WebSocketEvent<T> {
    success: boolean;
    message: string;
    data: T;
    timestamp: Date;
}
```

## Configuration

The WebSocket URL is automatically derived from your API URL:

**Current Configuration:**
- API URL: `http://localhost:3000/api`
- WebSocket URL: `http://localhost:3000` (auto-extracted)

To change for production, update `src/environments/environment.ts`:
```typescript
export const environment = {
    production: true,
    apiUrl: 'https://your-domain.com/api'
};
```

## Authentication

WebSocket services automatically use the JWT token from localStorage:
- Token key: `'token'`
- Retrieved automatically on connection
- No manual configuration needed

## Integration Steps

### Option 1: Component-Level Integration (Recommended for Starting)

1. Import the service you need
2. Inject in constructor
3. Call `connect()` in `ngOnInit()`
4. Subscribe to events you want to listen to
5. Call `disconnect()` in `ngOnDestroy()`

### Option 2: Global Integration (Recommended for Production)

1. Create a WebSocket manager service based on the example
2. Initialize in `app.component.ts`
3. Connect based on user role
4. Disconnect on logout

## Best Practices

✅ **DO:**
- Always unsubscribe in `ngOnDestroy()`
- Store subscriptions in an array
- Check `event.success` before processing
- Disconnect when component is destroyed
- Handle errors gracefully

❌ **DON'T:**
- Connect multiple times to the same namespace
- Forget to disconnect
- Ignore error events
- Block the UI thread with heavy processing

## Testing

1. **Start Backend:**
   ```bash
   # Make sure your NestJS backend is running
   npm run start:dev
   ```

2. **Start Frontend:**
   ```bash
   npm start
   ```

3. **Login** to get JWT token

4. **Open Browser DevTools:**
   - Network tab → WS filter
   - See WebSocket connections
   - Watch for events

5. **Trigger Events:**
   - Create/update/delete resources
   - Watch console logs for events
   - Verify data updates in UI

## Troubleshooting

### Connection Failed
- ✅ Check if JWT token exists in localStorage
- ✅ Verify backend is running
- ✅ Check console for error messages

### Not Receiving Events
- ✅ Ensure `connect()` was called
- ✅ Check you're subscribed to the correct event
- ✅ Verify your user role has permission

### Multiple Connections
- ✅ Add connection state tracking
- ✅ Check if already connected before calling `connect()`

## Documentation

📚 **Detailed Guide:** `WEBSOCKET_FRONTEND_GUIDE.md`
- Complete examples for all services
- Integration patterns
- Error handling
- Performance optimization

📚 **Backend Documentation:** `WEBSOCKET_IMPLEMENTATION.md`
- Available events
- Authentication details
- Event structure

## Next Steps

1. ✅ Services are ready - start integrating!
2. Choose components to add real-time updates
3. Add UI notifications (e.g., PrimeNG Toast)
4. Test with multiple users
5. Monitor performance

## Support

For issues or questions:
1. Check console logs for errors
2. Review `WEBSOCKET_FRONTEND_GUIDE.md`
3. Check browser Network tab (WS filter)
4. Verify backend is emitting events

---

**Status:** ✅ Ready for Integration
**Version:** 1.0.0
**Last Updated:** April 30, 2026
