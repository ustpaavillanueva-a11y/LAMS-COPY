import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

/**
 * Reusable Statistics Card Component
 * Used for dashboard metrics and KPIs
 */
@Component({
    selector: 'app-stats-card',
    standalone: true,
    imports: [CommonModule, CardModule],
    template: `
        <div class="stats-card" [class]="'stats-card-' + color" [style.cursor]="clickable ? 'pointer' : 'default'" (click)="onClick()">
            <div class="stats-card-content">
                <div class="stats-card-icon" [class]="'bg-' + color + '-100'">
                    <i [class]="icon" [class]="'text-' + color + '-600'"></i>
                </div>
                <div class="stats-card-details">
                    <div class="stats-card-value">
                        {{ value }}
                        <span *ngIf="trend" class="stats-card-trend" [class.trend-up]="trend > 0" [class.trend-down]="trend < 0">
                            <i [class]="trend > 0 ? 'pi pi-arrow-up' : 'pi pi-arrow-down'"></i>
                            {{ Math.abs(trend) }}%
                        </span>
                    </div>
                    <div class="stats-card-label">{{ label }}</div>
                    <div *ngIf="subtitle" class="stats-card-subtitle">{{ subtitle }}</div>
                </div>
            </div>
            <div *ngIf="loading" class="stats-card-loading">
                <i class="pi pi-spin pi-spinner"></i>
            </div>
        </div>
    `,
    styles: [
        `
            .stats-card {
                background: var(--surface-0);
                border: 1px solid var(--surface-border);
                border-radius: 8px;
                padding: 1.5rem;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .stats-card:hover {
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                transform: translateY(-2px);
            }

            .stats-card-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .stats-card-icon {
                width: 60px;
                height: 60px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.75rem;
            }

            .stats-card-details {
                flex: 1;
            }

            .stats-card-value {
                font-size: 2rem;
                font-weight: 700;
                color: var(--text-color);
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }

            .stats-card-label {
                font-size: 0.875rem;
                color: var(--text-color-secondary);
                font-weight: 500;
                margin-top: 0.25rem;
            }

            .stats-card-subtitle {
                font-size: 0.75rem;
                color: var(--text-color-secondary);
                margin-top: 0.25rem;
            }

            .stats-card-trend {
                font-size: 0.875rem;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 0.25rem;
            }

            .trend-up {
                color: var(--green-500);
            }

            .trend-down {
                color: var(--red-500);
            }

            .stats-card-loading {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(255, 255, 255, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                color: var(--primary-color);
            }

            /* Color variants */
            .bg-primary-100 {
                background: rgba(102, 126, 234, 0.1);
            }
            .text-primary-600 {
                color: rgb(102, 126, 234);
            }

            .bg-green-100 {
                background: rgba(34, 197, 94, 0.1);
            }
            .text-green-600 {
                color: rgb(34, 197, 94);
            }

            .bg-blue-100 {
                background: rgba(59, 130, 246, 0.1);
            }
            .text-blue-600 {
                color: rgb(59, 130, 246);
            }

            .bg-orange-100 {
                background: rgba(249, 115, 22, 0.1);
            }
            .text-orange-600 {
                color: rgb(249, 115, 22);
            }

            .bg-red-100 {
                background: rgba(239, 68, 68, 0.1);
            }
            .text-red-600 {
                color: rgb(239, 68, 68);
            }

            .bg-purple-100 {
                background: rgba(168, 85, 247, 0.1);
            }
            .text-purple-600 {
                color: rgb(168, 85, 247);
            }
        `
    ]
})
export class StatsCardComponent {
    @Input() label: string = '';
    @Input() value: string | number = 0;
    @Input() icon: string = 'pi pi-chart-line';
    @Input() color: 'primary' | 'green' | 'blue' | 'orange' | 'red' | 'purple' = 'primary';
    @Input() trend?: number; // Percentage change
    @Input() subtitle?: string;
    @Input() loading: boolean = false;
    @Input() clickable: boolean = false;

    Math = Math;

    onClick(): void {
        if (this.clickable) {
            // Emit click event if needed
        }
    }
}
