import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

/**
 * Reusable Chart Wrapper Component
 * Standardized wrapper for Chart.js with loading states and error handling
 */
@Component({
    selector: 'app-chart-wrapper',
    standalone: true,
    imports: [CommonModule, CardModule, ChartModule],
    template: `
        <p-card>
            <ng-template pTemplate="header">
                <div class="flex items-center justify-between p-4 pb-0">
                    <h3 class="text-lg font-semibold m-0">{{ title }}</h3>
                    <span *ngIf="subtitle" class="text-sm text-muted-color">{{ subtitle }}</span>
                </div>
            </ng-template>

            <div class="chart-container" [style.height]="height">
                <!-- Loading State -->
                <div *ngIf="loading" class="chart-loading">
                    <i class="pi pi-spin pi-spinner text-4xl text-primary"></i>
                    <p class="mt-2 text-muted-color">Loading chart data...</p>
                </div>

                <!-- Error State -->
                <div *ngIf="error && !loading" class="chart-error">
                    <i class="pi pi-exclamation-triangle text-4xl text-red-500"></i>
                    <p class="mt-2 text-muted-color">{{ error }}</p>
                </div>

                <!-- Empty State -->
                <div *ngIf="!loading && !error && isEmpty()" class="chart-empty">
                    <i class="pi pi-chart-bar text-4xl text-muted-color"></i>
                    <p class="mt-2 text-muted-color">{{ emptyMessage }}</p>
                </div>

                <!-- Chart -->
                <p-chart *ngIf="!loading && !error && !isEmpty()" [type]="type" [data]="data" [options]="chartOptions" [style]="{ width: '100%', height: height }" />
            </div>
        </p-card>
    `,
    styles: [
        `
            .chart-container {
                position: relative;
                width: 100%;
            }

            .chart-loading,
            .chart-error,
            .chart-empty {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                min-height: 300px;
            }

            :host ::ng-deep .p-card .p-card-body {
                padding: 1rem;
            }

            :host ::ng-deep .p-card .p-card-content {
                padding: 0;
            }
        `
    ]
})
export class ChartWrapperComponent implements OnInit, OnChanges {
    @Input() title: string = '';
    @Input() subtitle?: string;
    @Input() type: ChartType = 'line';
    @Input() data: any;
    @Input() options: any = {};
    @Input() height: string = '300px';
    @Input() loading: boolean = false;
    @Input() error?: string;
    @Input() emptyMessage: string = 'No data available';

    chartOptions: any;

    ngOnInit(): void {
        this.setupChartOptions();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['options'] || changes['type']) {
            this.setupChartOptions();
        }
    }

    private setupChartOptions(): void {
        const defaultOptions = {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            }
        };

        // Type-specific defaults
        const typeDefaults = this.getTypeDefaults();

        // Merge all options
        this.chartOptions = {
            ...defaultOptions,
            ...typeDefaults,
            ...this.options
        };
    }

    private getTypeDefaults(): any {
        switch (this.type) {
            case 'line':
            case 'bar':
                return {
                    scales: {
                        x: {
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            }
                        }
                    }
                };
            case 'pie':
            case 'doughnut':
                return {
                    plugins: {
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }
                };
            default:
                return {};
        }
    }

    isEmpty(): boolean {
        if (!this.data) return true;
        if (this.type === 'pie' || this.type === 'doughnut') {
            return !this.data.datasets?.[0]?.data?.some((v: number) => v > 0);
        }
        return !this.data.datasets?.length || !this.data.datasets[0].data?.length;
    }
}

export type ChartType = 'line' | 'bar' | 'pie' | 'doughnut' | 'radar' | 'polarArea';
