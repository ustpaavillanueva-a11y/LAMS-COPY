import { saveAs } from 'file-saver';
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
import * as XLSX from 'xlsx';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
    selector: 'app-masterplan',
    standalone: true,
    imports: [CommonModule, ToolbarModule, ButtonModule, RippleModule, TableModule, InputTextModule, FormsModule, DialogModule, ToastModule],
    providers: [MessageService],
    template: `
        <p-toolbar styleClass="mb-4 master-toolbar">
            <!-- LEFT TITLE -->
            <ng-template #start>
                <div class="toolbar-title">
                    <i class="pi pi-calendar"></i>
                    <span>Master Plan</span>
                </div>
            </ng-template>

            <!-- RIGHT FILTER AREA -->
            <ng-template #end>
                <div class="filter-container">
                    <div class="filter-label">
                        <i class="pi pi-filter"></i>
                        <span>Filters</span>
                    </div>

                    <!-- YEAR -->
                    <div class="filter-group">
                        <label>Year</label>
                        <select [(ngModel)]="selectedYear" (ngModelChange)="onFilterChange()" class="filter-input">
                            <option value="">All Years</option>
                            <option *ngFor="let year of years" [value]="year">
                                {{ year }}
                            </option>
                        </select>
                    </div>

                    <!-- LAB -->
                    <div class="filter-group">
                        <label>Laboratory</label>
                        <select [(ngModel)]="selectedLaboratory" (ngModelChange)="onFilterChange()" class="filter-input">
                            <option value="">Select Laboratory</option>
                            <option *ngFor="let lab of laboratories" [value]="lab.laboratoryId">
                                {{ lab.laboratoryName }}
                            </option>
                        </select>
                    </div>

                    <!-- CATEGORY -->
                    <div class="filter-group">
                        <label>Category</label>
                        <select [(ngModel)]="selectedCategory" (ngModelChange)="onFilterChange()" class="filter-input">
                            <option value="">All Categories</option>
                            <option *ngFor="let category of categories" [value]="category">
                                {{ category }}
                            </option>
                        </select>
                    </div>

                    <!-- ACTION BUTTONS -->
                    <div class="filter-actions">
                        <p-button [label]="showSchedule ? 'Hide Schedule' : 'Show Schedule'" icon="pi pi-calendar" severity="info" [outlined]="true" (onClick)="toggleSchedule()"> </p-button>

                        <p-button label="Print" icon="pi pi-print" severity="secondary" [outlined]="true" />

                        <p-button label="Export" icon="pi pi-upload" severity="success" [outlined]="true" (onClick)="exportToExcel()" />
                    </div>
                </div>
            </ng-template>
        </p-toolbar>

        <div class="master-plan-container">
            <div class="table-scroll">
                <table class="master-plan-table">
                    <thead>
                        <tr>
                            <th colspan="8" class="particulars-header">PARTICULARS</th>

                            <th *ngIf="showSchedule" colspan="4" class="schedule-header">MAINTENANCE SCHEDULE</th>
                        </tr>

                        <tr>
                            <th>ID Number</th>
                            <th>Asset Name</th>
                            <th>Serial Number</th>
                            <th>Quantity</th>
                            <th>Date Acquired</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Functional</th>
                            <th>Under Repair</th>

                            <th *ngIf="showSchedule">Inventory</th>
                            <th *ngIf="showSchedule">Preventive</th>
                            <th *ngIf="showSchedule">Corrective</th>
                            <th *ngIf="showSchedule">Calibration</th>
                        </tr>
                    </thead>

                    <tbody>
                        <ng-container *ngIf="equipmentList.length > 0; else empty">
                            <tr *ngFor="let item of equipmentList">
                                <td>{{ item.equipment?.assetId || 'N/A' }}</td>

                                <td style="text-align:left">
                                    {{ item.equipment?.equipmentName || 'N/A' }}
                                </td>

                                <td style="text-align:left">
                                    {{ item.equipment?.serialNumber || 'N/A' }}
                                </td>

                                <td>{{ item.quantity || 1 }}</td>

                                <td>{{ formatDate(item.equipment?.dateAcquired) }}</td>

                                <td>{{ item.equipment?.location || 'N/A' }}</td>

                                <td>{{ formatPrice(item.equipment?.price) }}</td>

                                <td>
                                    <span *ngIf="item.isFunctional !== false">Yes</span>
                                    <span *ngIf="item.isFunctional === false">No</span>
                                </td>

                                <td>
                                    <span *ngIf="item.isUnderRepair">Yes</span>
                                    <span *ngIf="!item.isUnderRepair">No</span>
                                </td>

                                <!-- SCHEDULE -->
                                <td *ngIf="showSchedule" class="schedule-cell" (click)="openEditDialog(item, 'inventory')">
                                    <span class="schedule-text">{{ getScheduleText(item, 'inventory') }}</span>
                                    <i class="pi pi-pencil edit-icon"></i>
                                </td>

                                <td *ngIf="showSchedule" class="schedule-cell" (click)="openEditDialog(item, 'preventive')">
                                    <span class="schedule-text">{{ getScheduleText(item, 'preventive') }}</span>
                                    <i class="pi pi-pencil edit-icon"></i>
                                </td>

                                <td *ngIf="showSchedule" class="schedule-cell" (click)="openEditDialog(item, 'corrective')">
                                    <span class="schedule-text">{{ getScheduleText(item, 'corrective') }}</span>
                                    <i class="pi pi-pencil edit-icon"></i>
                                </td>

                                <td *ngIf="showSchedule" class="schedule-cell" (click)="openEditDialog(item, 'calibration')">
                                    <span class="schedule-text">{{ getScheduleText(item, 'calibration') }}</span>
                                    <i class="pi pi-pencil edit-icon"></i>
                                </td>
                            </tr>
                        </ng-container>

                        <ng-template #empty>
                            <tr>
                                <td colspan="12" style="text-align:center;padding:40px">No data available</td>
                            </tr>
                        </ng-template>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- EDIT DIALOG -->
        <p-dialog [(visible)]="showEditDialog" [modal]="true" [style]="{ width: '650px' }" [draggable]="false" [resizable]="false" styleClass="maintenance-dialog">
            <ng-template pTemplate="header">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center;">
                        <i class="pi pi-calendar text-white" style="font-size: 24px;"></i>
                    </div>
                    <div>
                        <h3 style="margin: 0; font-size: 20px; font-weight: 700; color: #1e293b;">Edit {{ getMaintenanceTypeTitle() }} Schedule</h3>
                        <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">Manage maintenance dates for equipment</p>
                    </div>
                </div>
            </ng-template>

            <div style="padding: 24px;">
                <!-- Equipment Info Card -->
                <div style="padding: 16px; background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-radius: 12px; border: 2px solid #667eea30; margin-bottom: 24px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <i class="pi pi-box text-white" style="font-size: 20px;"></i>
                        </div>
                        <div style="flex: 1; min-width: 0;">
                            <p style="margin: 0; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Equipment</p>
                            <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: 600; color: #1e293b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                                {{ selectedEquipment?.equipment?.equipmentName }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Date Picker Section -->
                <div style="margin-bottom: 24px;">
                    <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-weight: 600; font-size: 15px; color: #334155;">
                        <i class="pi pi-calendar-plus" style="color: #667eea;"></i>
                        Select Maintenance Dates
                    </label>
                    <p style="font-size: 13px; color: #64748b; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
                        <i class="pi pi-info-circle" style="font-size: 14px;"></i>
                        Choose dates when maintenance should be performed
                    </p>
                    <div style="position: relative;">
                        <input
                            type="date"
                            (change)="onDateSelected($event)"
                            min="{{ selectedYear }}-01-01"
                            max="{{ selectedYear }}-12-31"
                            class="date-input"
                            style="width: 100%; padding: 14px 16px; padding-left: 48px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 15px; font-weight: 500; transition: all 0.2s; outline: none; color: #334155;"
                        />
                        <i class="pi pi-calendar" style="position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 16px; pointer-events: none;"></i>
                    </div>
                </div>

                <!-- Selected Dates Section -->
                <div style="background: #f8fafc; border-radius: 12px; padding: 20px; border: 2px solid #e2e8f0;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
                        <p style="margin: 0; font-weight: 600; font-size: 15px; color: #334155; display: flex; align-items: center; gap: 8px;">
                            <i class="pi pi-check-circle" style="color: #10b981;"></i>
                            Selected Dates
                        </p>
                        <span style="background: #667eea; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700;">
                            {{ selectedDates.length }}
                        </span>
                    </div>

                    <div style="max-height: 280px; overflow-y: auto; padding-right: 4px;">
                        <div *ngIf="selectedDates.length === 0" style="text-align: center; padding: 32px 20px;">
                            <i class="pi pi-calendar" style="font-size: 48px; color: #cbd5e1; margin-bottom: 12px;"></i>
                            <p style="color: #94a3b8; font-style: italic; margin: 0; font-size: 14px;">No dates selected yet</p>
                            <p style="color: #cbd5e1; font-size: 12px; margin: 4px 0 0 0;">Add dates using the calendar above</p>
                        </div>

                        <div
                            *ngFor="let date of selectedDates; let i = index"
                            style="display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; background: white; border-radius: 10px; margin-bottom: 10px; border: 2px solid #e2e8f0; transition: all 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.05);"
                        >
                            <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
                                <div style="width: 36px; height: 36px; border-radius: 8px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                    <span style="color: white; font-weight: 700; font-size: 14px;">{{ i + 1 }}</span>
                                </div>
                                <div>
                                    <p style="margin: 0; font-weight: 600; color: #1e293b; font-size: 15px;">{{ formatDisplayDate(date) }}</p>
                                    <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748b;">{{ getMaintenanceTypeTitle() }} maintenance</p>
                                </div>
                            </div>
                            <button
                                (click)="removeDate(date)"
                                style="background: #fee2e2; border: none; color: #ef4444; cursor: pointer; padding: 8px 12px; border-radius: 8px; font-weight: 600; font-size: 13px; transition: all 0.2s; display: flex; align-items: center; gap: 6px;"
                                onmouseover="this.style.background='#fecaca'; this.style.transform='scale(1.05)'"
                                onmouseout="this.style.background='#fee2e2'; this.style.transform='scale(1)'"
                            >
                                <i class="pi pi-trash" style="font-size: 13px;"></i>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ng-template pTemplate="footer">
                <div style="display: flex; gap: 12px; padding: 16px 24px; border-top: 2px solid #f1f5f9;">
                    <p-button label="Cancel" icon="pi pi-times" severity="secondary" [outlined]="true" (onClick)="showEditDialog = false" styleClass="flex-1"></p-button>
                    <p-button label="Save Changes" icon="pi pi-check" severity="primary" (onClick)="saveMaintenanceChanges()" styleClass="flex-1"></p-button>
                </div>
            </ng-template>
        </p-dialog>

        <!-- TOAST -->
        <p-toast></p-toast>
    `,
    styles: [
        `
            .table-scroll {
                overflow: auto;
                max-height: calc(100vh - 250px);
            }

            table {
                width: 100%;
                min-width: 1400px;
                border-collapse: collapse;
            }

            th,
            td {
                border: 1px solid #e0e0e0;
                padding: 8px;
                text-align: center;
            }

            th {
                background: #3b82f6;
                color: white;
                position: sticky;
                top: 0;
            }

            .schedule-header {
                background: #10b981;
            }
            .master-toolbar {
                background: var(--surface-card);
                border-radius: 12px;
                padding: 12px 16px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            }

            /* TITLE */
            .toolbar-title {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 1.2rem;
                font-weight: 700;
            }

            .toolbar-title i {
                font-size: 1.6rem;
                color: #667eea;
            }

            /* FILTER CONTAINER */
            .filter-container {
                display: flex;
                align-items: flex-end;
                gap: 18px;
                background: #f8fafc;
                padding: 14px 18px;
                border-radius: 10px;
                border: 1px solid #e5e7eb;
            }

            /* FILTER LABEL */
            .filter-label {
                display: flex;
                align-items: center;
                gap: 6px;
                font-weight: 600;
                color: #475569;
                margin-right: 10px;
            }

            /* GROUP */
            .filter-group {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .filter-group label {
                font-size: 0.75rem;
                font-weight: 600;
                color: #64748b;
            }

            /* INPUT */
            .filter-input {
                padding: 6px 10px;
                border-radius: 6px;
                border: 1px solid #cbd5e1;
                min-width: 160px;
                background: white;
                transition: 0.2s;
            }

            .filter-input:focus {
                outline: none;
                border-color: #6366f1;
                box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
            }

            /* ACTION BUTTONS */
            .filter-actions {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-left: 10px;
            }

            /* SCHEDULE CELL HOVER */
            .schedule-cell {
                cursor: pointer;
                position: relative;
                transition: background-color 0.2s;
            }

            .schedule-cell:hover {
                background-color: #f0f9ff;
            }

            .schedule-cell .edit-icon {
                display: none;
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                color: #3b82f6;
                font-size: 0.9rem;
            }

            .schedule-cell:hover .edit-icon {
                display: inline-block;
            }

            .schedule-text {
                display: inline-block;
                padding-right: 20px;
            }

            /* ENHANCED MODAL STYLES */
            :host ::ng-deep .maintenance-dialog .p-dialog-header {
                padding: 24px 24px 20px 24px;
                border-bottom: 2px solid #f1f5f9;
            }

            :host ::ng-deep .maintenance-dialog .p-dialog-content {
                padding: 0;
            }

            :host ::ng-deep .maintenance-dialog .p-dialog-footer {
                padding: 0;
                border-top: none;
            }

            /* Date Input Focus */
            .date-input:focus {
                border-color: #667eea !important;
                box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
            }

            .date-input:hover {
                border-color: #cbd5e1;
            }

            /* Scrollbar Styling */
            :host ::ng-deep .maintenance-dialog ::-webkit-scrollbar {
                width: 8px;
            }

            :host ::ng-deep .maintenance-dialog ::-webkit-scrollbar-track {
                background: #f1f5f9;
                border-radius: 10px;
            }

            :host ::ng-deep .maintenance-dialog ::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 10px;
            }

            :host ::ng-deep .maintenance-dialog ::-webkit-scrollbar-thumb:hover {
                background: #94a3b8;
            }
        `
    ]
})
export class MasterPlanComponent implements OnInit {
    selectedYear = '';
    selectedLaboratory = '';
    selectedCategory = '';

    laboratories: any[] = [];
    years: string[] = [];
    categories: string[] = ['Software', 'Hardware'];

    equipmentList: any[] = [];

    /** ✅ NEW TOGGLE STATE */
    showSchedule = false;

    /** EDIT DIALOG */
    showEditDialog = false;
    selectedEquipment: any = null;
    editMaintenanceType: string = '';
    editMonthlyData: any[] = [];
    selectedDates: string[] = [];

    private currentYear = new Date().getFullYear();

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.generateYears();
        this.loadLaboratories();
    }

    toggleSchedule() {
        this.showSchedule = !this.showSchedule;
    }

    generateYears() {
        for (let i = this.currentYear; i >= this.currentYear - 10; i--) {
            this.years.push(i.toString());
        }
    }

    onFilterChange() {
        if (this.selectedYear && this.selectedLaboratory) {
            this.fetchMasterPlanData();
        }
    }

    fetchMasterPlanData() {
        const apiUrl = `${environment.apiUrl}/laboratories/${this.selectedLaboratory}/maintenance-plans`;

        this.http
            .get<any>(apiUrl, {
                params: {
                    year: this.selectedYear
                }
            })
            .subscribe((data) => {
                console.log(data);

                let allEquipment = data.equipmentMaintenances || [];

                this.equipmentList = this.selectedCategory ? allEquipment.filter((x: any) => x.equipment?.category === this.selectedCategory) : allEquipment;
            });
    }

    loadLaboratories() {
        this.http.get<any[]>(`${environment.apiUrl}/laboratories`).subscribe((data) => (this.laboratories = data || []));
    }

    formatDate(date: any) {
        if (!date) return 'N/A';
        return new Date(date).toLocaleDateString();
    }

    formatPrice(price: any) {
        if (!price) return 'N/A';
        return (
            '₱' +
            Number(price).toLocaleString(undefined, {
                minimumFractionDigits: 2
            })
        );
    }

    getScheduleText(item: any, type: string) {
        if (!item?.monthlyData) return '-';

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // For inventory, check both inventoryCreated and inventoryUpdated
        if (type === 'inventory') {
            const inventoryDates = item.monthlyData
                .filter((m: any) => {
                    const created = m.maintenance?.inventoryCreated;
                    const updated = m.maintenance?.inventoryUpdated;
                    return (created && created !== '') || (updated && updated !== '');
                })
                .map((m: any) => {
                    const dateStr = m.maintenance?.inventoryCreated || m.maintenance?.inventoryUpdated;
                    const date = new Date(dateStr);
                    return `${months[date.getMonth()]} ${date.getDate()}`;
                });
            return inventoryDates.join(', ') || '-';
        }

        // For preventive, corrective, calibration
        const dates = item.monthlyData
            .filter((m: any) => {
                const value = m.maintenance?.[type];
                return value && value !== '';
            })
            .map((m: any) => {
                const dateStr = m.maintenance?.[type];
                const date = new Date(dateStr);
                return `${months[date.getMonth()]} ${date.getDate()}`;
            });
        return dates.join(', ') || '-';
    }

    saveExcelFile(buffer: any): void {
        const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

        const fileName = `MasterPlan_${this.selectedLaboratory}_${this.selectedYear}.xlsx`;

        saveAs(data, fileName);
    }

    exportToExcel() {
        if (!this.equipmentList.length) {
            console.warn('No data to export');
            return;
        }

        const data: any[] = [];

        this.equipmentList.forEach((item: any) => {
            const equipment = item.equipment || {};

            data.push({
                'ID Number': equipment.assetId || 'N/A',
                'Asset Name': equipment.equipmentName || equipment.assetName || 'N/A',
                Quantity: item.quantity || 1,
                'Date Acquired': this.formatDate(equipment.dateAcquired),
                Location: equipment.location || 'N/A',
                Price: this.formatPrice(equipment.price),
                Functional: item.isFunctional !== false ? 'Yes' : 'No',
                'Under Repair': item.isUnderRepair ? 'Yes' : 'No',

                // ===== MAINTENANCE SCHEDULE =====
                'Inventory Schedule': this.getScheduleText(item, 'inventory'),
                'Preventive Maintenance': this.getScheduleText(item, 'preventive'),
                'Corrective Maintenance': this.getScheduleText(item, 'corrective'),
                'Calibration Schedule': this.getScheduleText(item, 'calibration')
            });
        });

        // Create worksheet
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);

        // Auto column width
        const wscols = [{ wch: 22 }, { wch: 30 }, { wch: 10 }, { wch: 18 }, { wch: 25 }, { wch: 15 }, { wch: 12 }, { wch: 15 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 25 }];
        worksheet['!cols'] = wscols;

        // Create workbook
        const workbook: XLSX.WorkBook = {
            Sheets: { 'Master Plan': worksheet },
            SheetNames: ['Master Plan']
        };

        // Generate Excel file
        const excelBuffer: any = XLSX.write(workbook, {
            bookType: 'xlsx',
            type: 'array'
        });

        this.saveExcelFile(excelBuffer);
    }

    openEditDialog(item: any, maintenanceType: string) {
        this.selectedEquipment = item;
        this.editMaintenanceType = maintenanceType;
        this.selectedDates = [];

        this.editMonthlyData = (item.monthlyData || []).map((month: any) => {
            let dateStr = null;

            if (maintenanceType === 'inventory') {
                const created = month.maintenance?.inventoryCreated;
                const updated = month.maintenance?.inventoryUpdated;
                dateStr = created && created !== '' ? created : updated && updated !== '' ? updated : null;
            } else {
                dateStr = month.maintenance?.[maintenanceType];
                if (dateStr === '') dateStr = null;
            }

            // Add existing dates to selectedDates array
            if (dateStr) {
                const formattedDate = dateStr.split('T')[0]; // Get YYYY-MM-DD part
                if (!this.selectedDates.includes(formattedDate)) {
                    this.selectedDates.push(formattedDate);
                }
            }

            // Try to get ID from maintenance object or from month object directly
            const recordId = month.maintenance?.id || month.id || null;

            // Log each month's maintenance data and ID
            console.log(`${month.monthName}:`, {
                monthObject: month,
                maintenance: month.maintenance,
                recordId: recordId,
                hasId: !!recordId
            });

            return {
                month: month.month,
                monthName: month.monthName,
                recordId: recordId
            };
        });

        // Sort dates
        this.selectedDates.sort();
        this.showEditDialog = true;
    }

    onDateSelected(event: any) {
        const dateValue = event.target.value;
        if (dateValue && !this.selectedDates.includes(dateValue)) {
            this.selectedDates.push(dateValue);
            this.selectedDates.sort();
        }
        // Clear the input
        event.target.value = '';
    }

    removeDate(date: string) {
        this.selectedDates = this.selectedDates.filter((d) => d !== date);
    }

    formatDisplayDate(dateStr: string): string {
        const date = new Date(dateStr);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    saveMaintenanceChanges() {
        const updates: Promise<any>[] = [];

        const assetId = this.selectedEquipment?.equipment?.assetId;

        if (!assetId) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Asset ID not found'
            });
            return;
        }

        // Create a POST request for each selected date
        this.selectedDates.forEach((dateStr) => {
            const payload = {
                assetId: assetId,
                maintenanceType: this.editMaintenanceType,
                scheduledDate: dateStr
            };

            const apiUrl = `${environment.apiUrl}/laboratories/${this.selectedLaboratory}/maintenance-plans`;
            updates.push(this.http.post(apiUrl, payload).toPromise());
        });

        Promise.all(updates)
            .then(() => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Maintenance schedule updated successfully'
                });
                this.showEditDialog = false;
                this.fetchMasterPlanData(); // Refresh data
            })
            .catch((error) => {
                console.error('Error updating maintenance schedule:', error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to update maintenance schedule'
                });
            });
    }

    formatDateForAPI(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    getMaintenanceTypeTitle(): string {
        return this.editMaintenanceType.charAt(0).toUpperCase() + this.editMaintenanceType.slice(1);
    }
}
