import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-masterplan',
    standalone: true,
    imports: [CommonModule, ToolbarModule, ButtonModule, RippleModule, TableModule, InputTextModule, FormsModule],
    styles: [
        `
            :host ::ng-deep {
                .master-plan-container {
                    padding: 1rem;
                }

                .master-plan-table-wrapper {
                    background: var(--surface-card);
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }

                .table-scroll {
                    overflow-x: auto;
                    overflow-y: auto;
                    max-height: calc(100vh - 250px);
                }

                .table-scroll::-webkit-scrollbar {
                    height: 10px;
                    width: 8px;
                }

                .table-scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }

                .table-scroll::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                }

                .table-scroll::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }

                .master-plan-table {
                    width: 100%;
                    min-width: 1800px;
                    border-collapse: collapse;
                    background: white;
                }

                .master-plan-table th,
                .master-plan-table td {
                    border: 1px solid #e0e0e0;
                    padding: 10px 8px;
                    text-align: center;
                    font-size: 0.85rem;
                    white-space: nowrap;
                }

                .master-plan-table th {
                    background: var(--primary-color);
                    font-weight: 600;
                    color: white;
                    position: sticky;
                    top: 0;
                    z-index: 10;
                }

                .master-plan-table th.particulars-header {
                    background: #3b82f6;
                }

                .master-plan-table th.schedule-header {
                    background: #10b981;
                }

                .master-plan-table tbody tr:hover {
                    background: #f0f9ff;
                }

                .master-plan-table tbody tr:nth-child(even) {
                    background: #fafafa;
                }

                .master-plan-table tbody tr:nth-child(even):hover {
                    background: #f0f9ff;
                }

                .functional-badge {
                    background: #c6f6d5;
                    color: #276749;
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-weight: 600;
                }

                .repair-badge {
                    background: #fed7d7;
                    color: #c53030;
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-weight: 600;
                }

                .schedule-cell {
                    background: #fffbeb;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .schedule-cell:hover {
                    background: #fef3c7;
                    box-shadow: inset 0 0 0 2px #f59e0b;
                }

                .schedule-mark {
                    color: #059669;
                    font-weight: bold;
                }

                .empty-state {
                    text-align: center;
                    padding: 3rem;
                    color: #6b7280;
                }

                .empty-state i {
                    font-size: 3rem;
                    color: #d1d5db;
                    margin-bottom: 1rem;
                }
            }
        `
    ],
    template: `
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <i class="pi pi-calendar text-2xl" style="color: #667eea"></i>
                    <span class="text-xl font-bold">Master Plan</span>
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2">
                        <label class="font-semibold">Year:</label>
                        <select [(ngModel)]="selectedYear" (ngModelChange)="onFilterChange()" class="p-inputtext" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="">All Years</option>
                            <option *ngFor="let year of years" [value]="year">{{ year }}</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="font-semibold">Laboratory:</label>
                        <select [(ngModel)]="selectedLaboratory" (ngModelChange)="onFilterChange()" class="p-inputtext" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="">Select Laboratory</option>
                            <option *ngFor="let lab of laboratories" [value]="lab.laboratoryId">{{ lab.laboratoryName }}</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="font-semibold">Category:</label>
                        <select [(ngModel)]="selectedCategory" (ngModelChange)="onFilterChange()" class="p-inputtext" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="">All Categories</option>
                            <option *ngFor="let category of categories" [value]="category">{{ category }}</option>
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <p-button label="Print" icon="pi pi-print" severity="secondary" [outlined]="true" />
                        <p-button label="Export" icon="pi pi-upload" severity="success" [outlined]="true" />
                    </div>
                </div>
            </ng-template>
        </p-toolbar>

        <div class="master-plan-container">
            <div class="master-plan-table-wrapper">
                <div class="table-scroll">
                    <table class="master-plan-table">
                        <thead>
                            <tr>
                                <th colspan="8" class="particulars-header">PARTICULARS</th>
                                <th colspan="4" class="schedule-header">MAINTENANCE SCHEDULE</th>
                            </tr>
                            <tr>
                                <th class="particulars-header">ID Number</th>
                                <th class="particulars-header">Asset Name</th>
                                <th class="particulars-header">Quantity</th>
                                <th class="particulars-header">Date Acquired</th>
                                <th class="particulars-header">Location</th>
                                <th class="particulars-header">Price</th>
                                <th class="particulars-header">Functional</th>
                                <th class="particulars-header">Under Repair</th>
                                <th class="schedule-header">Inventory Schedule</th>
                                <th class="schedule-header">Preventive Maintenance</th>
                                <th class="schedule-header">Corrective Maintenance</th>
                                <th class="schedule-header">Calibration Schedule</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ng-container *ngIf="equipmentList.length > 0; else emptyState">
                                <tr *ngFor="let item of equipmentList">
                                    <td>{{ item.equipment?.assetId || 'N/A' }}</td>
                                    <td style="text-align: left; padding-left: 16px;">{{ item.equipment?.equipmentName || item.equipment?.assetName || 'N/A' }}</td>
                                    <td>{{ item.quantity || 1 }}</td>
                                    <td>{{ formatDate(item.equipment?.dateAcquired) }}</td>
                                    <td>{{ item.equipment?.location || 'N/A' }}</td>
                                    <td style="color: #2f855a; font-weight: 600;">{{ formatPrice(item.equipment?.price) }}</td>
                                    <td>
                                        <span class="functional-badge" *ngIf="item.isFunctional !== false">Yes</span>
                                        <span class="repair-badge" *ngIf="item.isFunctional === false">No</span>
                                    </td>
                                    <td>
                                        <span class="repair-badge" *ngIf="item.isUnderRepair">Yes</span>
                                        <span class="functional-badge" *ngIf="!item.isUnderRepair">No</span>
                                    </td>
                                    <td class="schedule-cell">
                                        <span class="schedule-mark">{{ getScheduleText(item, 'inventory') }}</span>
                                    </td>
                                    <td class="schedule-cell">
                                        <span class="schedule-mark">{{ getScheduleText(item, 'preventive') }}</span>
                                    </td>
                                    <td class="schedule-cell">
                                        <span class="schedule-mark">{{ getScheduleText(item, 'corrective') }}</span>
                                    </td>
                                    <td class="schedule-cell">
                                        <span class="schedule-mark">{{ getScheduleText(item, 'calibration') }}</span>
                                    </td>
                                </tr>
                            </ng-container>
                            <ng-template #emptyState>
                                <tr>
                                    <td colspan="12">
                                        <div class="empty-state">
                                            <i class="pi pi-inbox"></i>
                                            <p>No data available. Please select Year and Laboratory to view the master plan.</p>
                                        </div>
                                    </td>
                                </tr>
                            </ng-template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `
})
export class MasterPlanComponent implements OnInit {
    selectedYear: string = '';
    selectedLaboratory: string = '';
    selectedCategory: string = '';
    laboratories: any[] = [];
    years: string[] = [];
    categories: string[] = ['Software', 'Hardware'];
    masterPlanData: any = null;
    equipmentList: any[] = [];

    private currentYear = new Date().getFullYear();

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.generateYears();
        this.loadLaboratories();
    }

    generateYears() {
        const years = [];
        for (let i = this.currentYear; i >= this.currentYear - 10; i--) {
            years.push(i.toString());
        }
        this.years = years;
    }

    onFilterChange() {

        if (this.selectedYear && this.selectedLaboratory) {
            this.fetchMasterPlanData();
        } else {
            console.warn('⚠️ Both year and laboratory must be selected to fetch data');
        }
    }

    fetchMasterPlanData() {
        const apiUrl = `${environment.apiUrl}/reports/master-plan/annual`;
        const params: any = {
            year: this.selectedYear,
            laboratoryId: this.selectedLaboratory
        };


        this.http.get<any>(apiUrl, { params }).subscribe({
            next: (data) => {
                console.table(data);

                this.masterPlanData = data;
                let allEquipment = data.equipmentMaintenances || [];

                // Filter by category if selected
                if (this.selectedCategory) {
                    this.equipmentList = allEquipment.filter((item: any) => item.equipment?.category === this.selectedCategory);
                } else {
                    this.equipmentList = allEquipment;
                }

            },
            error: (error) => {
                console.error('❌ Error fetching Master Plan data:', error);
            }
        });
    }

    loadLaboratories() {
        const apiUrl = `${environment.apiUrl}/laboratories`;

        this.http.get<any[]>(apiUrl).subscribe({
            next: (data) => {
                this.laboratories = data || [];
            },
            error: (error) => {
                console.error('❌ Error loading laboratories:', error);
            }
        });
    }

    formatDate(date: string | null): string {
        if (!date) return 'N/A';
        try {
            return new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch {
            return 'N/A';
        }
    }

    formatPrice(price: number | string | null): string {
        if (!price) return 'N/A';
        const numPrice = typeof price === 'string' ? parseFloat(price) : price;
        if (isNaN(numPrice)) return 'N/A';
        return '₱' + numPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    getScheduleText(item: any, type: 'inventory' | 'preventive' | 'corrective' | 'calibration'): string {
        if (!item || !item.monthlyData) return '-';

        // Get months where this maintenance type is scheduled
        const scheduledMonths: string[] = [];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        item.monthlyData.forEach((monthData: any) => {
            if (monthData.maintenance && monthData.maintenance[type] === 'X') {
                const monthIndex = monthData.month - 1;
                if (monthIndex >= 0 && monthIndex < 12) {
                    scheduledMonths.push(monthNames[monthIndex]);
                }
            }
        });

        if (scheduledMonths.length === 0) return '-';
        if (scheduledMonths.length > 3) {
            return scheduledMonths.slice(0, 3).join(', ') + '...';
        }
        return scheduledMonths.join(', ');
    }
}
