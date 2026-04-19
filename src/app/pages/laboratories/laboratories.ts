import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule, Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-laboratories',
    standalone: true,
    imports: [CommonModule, TableModule, FormsModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, InputTextModule, TagModule, InputIconModule, IconFieldModule, TooltipModule, DialogModule, SelectModule, InputNumberModule, TextareaModule, DatePickerModule],
    providers: [MessageService],
    template: `
        <p-toast />

        <!-- Laboratory Details View (when viewing specific lab via route param) -->
        <div *ngIf="selectedLaboratoryId && selectedLaboratoryData" class="mb-4">
            <p-toolbar styleClass="mb-4 mt-4">
                <ng-template #start>
                    <div class="flex items-center gap-2">
                        <span class="text-lg font-semibold">Assets in {{ selectedLaboratoryData.laboratoryName }} ({{ selectedLaboratoryData.assets?.length || 0 }})</span>
                    </div>
                </ng-template>
                <ng-template #end>
                    <div class="flex items-center gap-2">
                        <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelectedAssets()" [disabled]="!selectedAssets.length" />
                        <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportAssetsCSV()" />
                    </div>
                </ng-template>
            </p-toolbar>

            <p-table
                #dtAssets
                [value]="selectedLaboratoryData.assets || []"
                [rows]="10"
                [paginator]="true"
                [rowsPerPageOptions]="[10, 20, 30]"
                [loading]="loading"
                [rowHover]="true"
                dataKey="assetId"
                [(selection)]="selectedAssets"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} assets"
                [showCurrentPageReport]="true"
            >
                <ng-template pTemplate="header">
                    <tr>
                        <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                        <th pSortableColumn="assetName">Asset <p-sortIcon field="assetName" /></th>
                        <th>Property #</th>
                        <th>Category</th>
                        <th>Issued To</th>
                        <th style="width:5rem">QR Code</th>
                        <!-- <th style="min-width:12rem">Actions</th> -->
                    </tr>
                </ng-template>

                <ng-template pTemplate="body" let-asset>
                    <tr>
                        <td style="width: 3rem"><p-tableCheckbox [value]="asset" /></td>
                        <td>{{ asset.assetName }}</td>
                        <td>{{ asset.propertyNumber }}</td>
                        <td><p-tag [value]="asset.category || 'N/A'" /></td>
                        <td>{{ asset.issuedTo }}</td>
                        <td>
                            <div *ngIf="asset.qrCode" class="inline-block">
                                <img
                                    *ngIf="isBase64Image(asset.qrCode)"
                                    [src]="asset.qrCode"
                                    alt="QR Code"
                                    class="w-14 h-14 rounded-lg border-2 border-gray-300 cursor-pointer hover:shadow-lg hover:scale-110 transition-all"
                                    pTooltip="Click to view QR Code"
                                />
                                <span *ngIf="!isBase64Image(asset.qrCode)" class="text-sm bg-blue-100 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 transition-colors" pTooltip="Click to copy QR Code">
                                    {{ asset.qrCode }}
                                </span>
                            </div>
                            <span *ngIf="!asset.qrCode" class="text-gray-400">N/A</span>
                        </td>
                        <td>
                            <!-- <div class="flex gap-2">
                                <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" pTooltip="View" />
                                <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" pTooltip="Edit" />
                                <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" pTooltip="Delete" />
                            </div> -->
                        </td>
                    </tr>
                </ng-template>

                <ng-template pTemplate="emptymessage">
                    <tr>
                        <td colspan="7" class="text-center py-5">No assets in this laboratory</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <!-- Laboratories List View (when not viewing specific lab) -->
        <div *ngIf="!selectedLaboratoryId">
            <p-toolbar styleClass="mb-4">
                <ng-template #start>
                    <div class="flex items-center gap-2">
                        <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                        <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedLabs.length" />
                    </div>
                </ng-template>
                <ng-template #end>
                    <div class="flex items-center gap-2">
                        <p-button label="Reports" icon="pi pi-chart-bar" severity="info" [outlined]="true" (onClick)="goToReports()" />
                        <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search laboratories..." />
                        </p-iconfield>
                    </div>
                </ng-template>
            </p-toolbar>

            <p-table
                #dt
                [value]="laboratories"
                [rows]="10"
                [paginator]="true"
                [rowsPerPageOptions]="[10, 20, 30]"
                [loading]="loading"
                [rowHover]="true"
                dataKey="laboratoryId"
                [(selection)]="selectedLabs"
                (selectionChange)="onSelectionChange($event)"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} laboratories"
                [showCurrentPageReport]="true"
            >
                <ng-template pTemplate="header">
                    <tr>
                        <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                        <th>ID</th>
                        <th pSortableColumn="laboratoryName">Laboratory Name <p-sortIcon field="laboratoryName" /></th>
                        <th>Campus</th>
                        <th style="width:6rem">Actions</th>
                    </tr>
                </ng-template>

                <ng-template pTemplate="body" let-lab>
                    <tr>
                        <td style="width: 3rem"><p-tableCheckbox [value]="lab" /></td>
                        <td>{{ lab.laboratoryId }}</td>
                        <td>{{ lab.laboratoryName }}</td>
                        <td>{{ lab.campus?.campusName }}</td>
                        <td>
                            <div class="flex gap-2">
                                <!-- <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(lab)" /> -->
                                <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(lab)" />
                                <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(lab)" />
                            </div>
                        </td>
                    </tr>
                </ng-template>

                <ng-template pTemplate="emptymessage">
                    <tr>
                        <td colspan="5" class="text-center py-5">No laboratories found</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <!-- New Laboratory Dialog -->
        <p-dialog [(visible)]="labDialog" [style]="{ width: '500px' }" header="Laboratory" [modal]="true" [closable]="true" (onHide)="closeDialog()">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4 mt-2">
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Laboratory Name *</label>
                        <input pInputText [(ngModel)]="newLab.laboratoryName" placeholder="Enter laboratory name" class="w-full" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Laboratory Location *</label>
                        <input pInputText [(ngModel)]="newLab.laboratoryLocation" placeholder="Enter laboratory location" class="w-full" />
                    </div>
                </div>
            </ng-template>
            <ng-template #footer>
                <div class="flex justify-end gap-2 w-full">
                    <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (click)="closeDialog()" />
                    <p-button label="Save" icon="pi pi-check" (click)="saveLab()" />
                </div>
            </ng-template>
        </p-dialog>

        <!-- Reports Dialog -->
        <p-dialog [(visible)]="reportDialog" [style]="{ width: '95vw', maxWidth: '1200px' }" header="Laboratory Utilization Report" [modal]="true" [closable]="true" [maximizable]="true" (onHide)="closeReportDialog()">
            <ng-template #content>
                <!-- USTP Header -->
                <div class="text-center mb-4">
                    <img [src]="headerImgUrl" alt="USTP Header" class="mx-auto mb-2" style="max-width: 100%; height: auto;" onerror="this.style.display='none'" />
                    <h3 class="text-lg font-bold m-0">LABORATORY MANAGEMENT OFFICE</h3>
                    <h2 class="text-xl font-bold m-0 mt-1">LABORATORY UTILIZATION REPORT</h2>
                </div>

                <!-- Filters -->
                <div class="flex flex-wrap items-end gap-4 mb-4 p-3 bg-gray-50 rounded-lg border">
                    <div>
                        <label class="block font-bold mb-1 text-sm">Month</label>
                        <p-datepicker [(ngModel)]="reportFilters.month" view="month" dateFormat="MM yy" [showIcon]="true" [style]="{ width: '200px' }" (onSelect)="onMonthChange()" />
                    </div>
                    <div>
                        <label class="block font-bold mb-1 text-sm">Inclusive Dates (Week)</label>
                        <p-select [options]="weekOptions" [(ngModel)]="reportFilters.week" optionLabel="label" optionValue="value" placeholder="Select Week" [style]="{ width: '280px' }" (onChange)="generateReport()" />
                    </div>
                    <div>
                        <p-button label="Generate" icon="pi pi-refresh" (onClick)="generateReport()" severity="info" />
                    </div>
                </div>

                <!-- Excel-like Utilization Table -->
                <div *ngIf="reportWeekData.length > 0" class="overflow-auto border rounded-lg">
                    <table class="w-full border-collapse text-sm" style="min-width: 850px;">
                        <thead>
                            <tr class="bg-blue-800 text-white">
                                <th class="border border-gray-300 px-3 py-2 text-left" rowspan="2" style="width: 180px;">Laboratory</th>
                                <th class="border border-gray-300 px-2 py-2 text-center" rowspan="2" style="width: 100px;"></th>
                                <th class="border border-gray-300 px-2 py-1 text-center" *ngFor="let day of weekDayHeaders">{{ day }}</th>
                                <th class="border border-gray-300 px-2 py-2 text-center font-bold" rowspan="2">Total</th>
                                <th class="border border-gray-300 px-2 py-2 text-center font-bold" rowspan="2">% Utilization</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ng-container *ngFor="let lab of reportWeekData; let i = index">
                                <!-- Available Hours Row -->
                                <tr [ngClass]="{ 'bg-blue-50': i % 2 === 0, 'bg-white': i % 2 !== 0 }">
                                    <td class="border border-gray-300 px-3 py-1 font-semibold" [attr.rowspan]="2">{{ lab.laboratoryName }}</td>
                                    <td class="border border-gray-300 px-2 py-1 text-center text-xs font-medium bg-gray-100">Available Hrs</td>
                                    <td class="border border-gray-300 px-2 py-1 text-center" *ngFor="let hrs of lab.availableHours">{{ hrs }}</td>
                                    <td class="border border-gray-300 px-2 py-1 text-center font-bold">{{ lab.totalAvailable }}</td>
                                    <td class="border border-gray-300 px-2 py-1 text-center font-bold text-lg" [attr.rowspan]="2"
                                        [ngClass]="{ 'text-red-500': lab.utilization < 50, 'text-yellow-600': lab.utilization >= 50 && lab.utilization < 75, 'text-green-600': lab.utilization >= 75 }">
                                        {{ lab.totalAvailable > 0 ? (lab.utilization | number:'1.2-2') : '0.00' }}%
                                    </td>
                                </tr>
                                <!-- Actual Hours Row -->
                                <tr [ngClass]="{ 'bg-blue-50': i % 2 === 0, 'bg-white': i % 2 !== 0 }">
                                    <td class="border border-gray-300 px-2 py-1 text-center text-xs font-medium bg-gray-100">Actual Hrs</td>
                                    <td class="border border-gray-300 px-2 py-1 text-center" *ngFor="let hrs of lab.actualHours"
                                        [ngClass]="{ 'text-green-600 font-semibold': hrs > 0 }">{{ hrs }}</td>
                                    <td class="border border-gray-300 px-2 py-1 text-center font-bold" [ngClass]="{ 'text-green-600': lab.totalActual > 0 }">{{ lab.totalActual }}</td>
                                </tr>
                            </ng-container>
                        </tbody>
                    </table>
                </div>

                <!-- Signatories -->
                <div *ngIf="reportWeekData.length > 0" class="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                        <p class="mb-8">Prepared by:</p>
                        <div class="border-t border-black mx-4 pt-1">
                            <p class="font-bold m-0">_________________________</p>
                            <p class="text-xs text-gray-600 m-0">Laboratory Technician</p>
                        </div>
                    </div>
                    <div>
                        <p class="mb-8">Noted by:</p>
                        <div class="border-t border-black mx-4 pt-1">
                            <p class="font-bold m-0">_________________________</p>
                            <p class="text-xs text-gray-600 m-0">LMO Coordinator</p>
                        </div>
                    </div>
                    <div>
                        <p class="mb-8">Head:</p>
                        <div class="border-t border-black mx-4 pt-1">
                            <p class="font-bold m-0">_________________________</p>
                            <p class="text-xs text-gray-600 m-0">Academic Head</p>
                        </div>
                    </div>
                </div>

                <!-- Notes -->
                <div *ngIf="reportWeekData.length > 0" class="mt-6 p-3 bg-gray-50 rounded-lg border text-xs text-gray-600">
                    <p class="font-bold mb-1">Notes:</p>
                    <ul class="list-disc pl-4 m-0 space-y-1">
                        <li><strong>Available Hours</strong> — the total number of hours the laboratory is open and available for use (based on operating schedule).</li>
                        <li><strong>Actual Hours</strong> — the total number of hours the laboratory was actually used by students/faculty.</li>
                        <li><strong>% Utilization</strong> = (Actual Hours / Available Hours) × 100.</li>
                        <li>Sundays and holidays are excluded from available hours.</li>
                    </ul>
                </div>

                <div *ngIf="reportWeekData.length === 0" class="text-center py-8 text-gray-500">
                    <i class="pi pi-chart-bar text-4xl mb-2"></i>
                    <p>Select a month and week to generate the utilization report.</p>
                </div>
            </ng-template>
        </p-dialog>
    `
})
export class LaboratoriesComponent implements OnInit {
    @ViewChild('dt') dt: Table | undefined;

    laboratories: any[] = [];
    filteredLaboratories: any[] = [];
    selectedLabs: any[] = [];
    selectedAssets: any[] = [];
    searchValue: string = '';
    loading: boolean = true;
    selectedLaboratoryId: string | null = null;
    selectedLaboratoryData: any = null;

    // Dialog state
    labDialog: boolean = false;
    newLab: any = this.getEmptyLab();

    // Report dialog state
    reportDialog: boolean = false;
    reportFilters: any = { month: new Date(), week: null };
    weekOptions: any[] = [];
    weekDayHeaders: string[] = [];
    reportWeekData: any[] = [];
    headerImgUrl = `${window.location.origin}/header.png`;

    private apiUrl = `${environment.apiUrl}/laboratories`;

    constructor(
        private messageService: MessageService,
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        // Check if navigated with a specific laboratory ID
        this.route.paramMap.subscribe((params) => {
            const labId = params.get('id');
            if (labId) {
                this.selectedLaboratoryId = labId;
                this.loadLaboratories(labId);
            } else {
                this.loadLaboratories();
            }
        });
    }

    getEmptyLab() {
        return {
            laboratoryId: '',
            laboratoryName: '',
            laboratoryLocation: '',
            campus: null
        };
    }

    loadLaboratories(laboratoryId?: string) {
        this.loading = true;

        this.http.get<any[]>(this.apiUrl).subscribe({
            next: (data: any[]) => {
                if (data && data.length > 0) {
                }
                console.table(data);
                this.laboratories = data || [];

                // If a specific laboratory ID is provided, filter to show only that one
                if (laboratoryId) {
                    const filtered = this.laboratories.filter((lab) => lab.laboratoryId === laboratoryId);
                    if (filtered.length > 0) {
                        this.selectedLaboratoryData = filtered[0];
                        this.filteredLaboratories = filtered;
                    } else {
                        console.warn('⚠️ Laboratory not found with ID:', laboratoryId);
                        this.filteredLaboratories = [];
                    }
                } else {
                    this.filteredLaboratories = [...this.laboratories];
                }

                this.loading = false;
            },
            error: (error: any) => {
                console.error('❌ Error loading laboratories:', error);
                console.error('Error status:', error?.status);
                console.error('Error message:', error?.message);
                console.error('Error details:', error?.error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load laboratories: ' + error?.message
                });
                this.loading = false;
            }
        });
    }

    filter() {
        this.filteredLaboratories = this.laboratories.filter((lab) => {
            return (
                lab.laboratoryName?.toLowerCase().includes(this.searchValue.toLowerCase()) || lab.laboratoryId?.toLowerCase().includes(this.searchValue.toLowerCase()) || lab.campus?.campusName?.toLowerCase().includes(this.searchValue.toLowerCase())
            );
        });
    }

    onSelectionChange(event: any) {}

    openNew() {
        this.newLab = this.getEmptyLab();
        this.labDialog = true;
    }

    closeDialog() {
        this.labDialog = false;
        this.newLab = this.getEmptyLab();
    }

    saveLab() {
        if (!this.newLab.laboratoryName || !this.newLab.laboratoryLocation) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Validation',
                detail: 'Laboratory Name and Location are required'
            });
            return;
        }

        const payload = {
            laboratoryName: this.newLab.laboratoryName,
            laboratoryLocation: this.newLab.laboratoryLocation
        };

        this.http.post<any>(this.apiUrl, payload).subscribe({
            next: (response) => {
                Swal.fire({
                    title: 'Good job!',
                    text: 'Laboratory created successfully!',
                    icon: 'success'
                });
                this.closeDialog();
                this.loadLaboratories();
            },
            error: (error) => {
                console.error('❌ Error creating laboratory:', error);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to create laboratory: ' + (error?.error?.message || error?.message)
                });
            }
        });
    }

    view(lab: any) {
        this.messageService.add({
            severity: 'info',
            summary: 'View Laboratory',
            detail: `Viewing: ${lab.laboratoryName}`
        });
    }

    edit(lab: any) {
        this.newLab = { ...lab };
        this.labDialog = true;
    }

    delete(lab: any) {
        this.messageService.add({
            severity: 'warn',
            summary: 'Delete Laboratory',
            detail: `Delete: ${lab.laboratoryName}?`
        });
    }

    deleteSelected() {
        if (!this.selectedLabs || this.selectedLabs.length === 0) return;
        this.messageService.add({
            severity: 'warn',
            summary: 'Delete',
            detail: `Delete ${this.selectedLabs.length} laboratory(ies)?`
        });
    }

    goToReports() {
        this.reportFilters = { month: new Date(), week: null };
        this.reportWeekData = [];
        this.weekOptions = [];
        this.weekDayHeaders = [];
        this.reportDialog = true;
        this.onMonthChange();
    }

    closeReportDialog() {
        this.reportDialog = false;
        this.reportWeekData = [];
    }

    onMonthChange() {
        if (!this.reportFilters.month) return;
        const month = this.reportFilters.month;
        const year = month.getFullYear();
        const mon = month.getMonth();
        const daysInMonth = new Date(year, mon + 1, 0).getDate();
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Build week options (Mon-Sat blocks)
        this.weekOptions = [];
        let weekStart = 1;
        // Find first Monday
        while (weekStart <= daysInMonth) {
            const dayOfWeek = new Date(year, mon, weekStart).getDay();
            if (dayOfWeek === 1) break; // Monday
            weekStart++;
        }
        // If month doesn't start on Monday, include partial first week
        if (weekStart > 1) {
            const firstDay = 1;
            const endDay = weekStart - 1;
            this.weekOptions.push({
                label: `${monthNames[mon]} ${firstDay}-${endDay}, ${year}`,
                value: { start: firstDay, end: endDay }
            });
        }
        // Full weeks Mon-Sat
        while (weekStart <= daysInMonth) {
            let weekEnd = weekStart + 5; // Mon to Sat = 6 days
            if (weekEnd > daysInMonth) weekEnd = daysInMonth;
            this.weekOptions.push({
                label: `${monthNames[mon]} ${weekStart}-${weekEnd}, ${year}`,
                value: { start: weekStart, end: weekEnd }
            });
            weekStart = weekStart + 7; // next Monday
        }

        this.reportFilters.week = null;
        this.reportWeekData = [];
    }

    generateReport() {
        if (!this.reportFilters.month || !this.reportFilters.week) return;

        const month = this.reportFilters.month;
        const year = month.getFullYear();
        const mon = month.getMonth();
        const { start, end } = this.reportFilters.week;

        const DAILY_HOURS = 8; // 8AM-12PM + 1PM-5PM
        const dayShortNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Build day headers for the selected week
        const dayDates: { day: number; dayOfWeek: number }[] = [];
        for (let d = start; d <= end; d++) {
            const dow = new Date(year, mon, d).getDay();
            if (dow !== 0) { // skip Sunday
                dayDates.push({ day: d, dayOfWeek: dow });
            }
        }
        this.weekDayHeaders = dayDates.map(dd => `${dayShortNames[dd.dayOfWeek]} (${dd.day})`);

        // Build data per laboratory
        this.reportWeekData = this.laboratories.map((lab) => {
            const availableHours = dayDates.map(() => DAILY_HOURS);
            const actualHours = dayDates.map(() => 0); // placeholder — will be from API
            const totalAvailable = availableHours.reduce((a, b) => a + b, 0);
            const totalActual = actualHours.reduce((a, b) => a + b, 0);
            const utilization = totalAvailable > 0 ? (totalActual / totalAvailable) * 100 : 0;

            return {
                laboratoryName: lab.laboratoryName,
                laboratoryId: lab.laboratoryId,
                availableHours,
                actualHours,
                totalAvailable,
                totalActual,
                utilization
            };
        });

        this.cdr.detectChanges();
    }

    exportCSV() {
        let csv = 'Laboratory ID,Laboratory Name,Campus\n';
        this.laboratories.forEach((lab) => {
            csv += `${lab.laboratoryId},${lab.laboratoryName},${lab.campus?.campusName}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'laboratories.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    }

    isBase64Image(qrCode: string): boolean {
        return qrCode?.startsWith('data:image') || qrCode?.startsWith('http');
    }

    deleteSelectedAssets() {
        if (!this.selectedAssets || this.selectedAssets.length === 0) return;
        this.messageService.add({
            severity: 'warn',
            summary: 'Delete',
            detail: `Delete ${this.selectedAssets.length} asset(s)?`
        });
    }

    exportAssetsCSV() {
        const assets = this.selectedLaboratoryData?.assets || [];
        let csv = 'Asset Name,Property #,Category,Issued To\n';
        assets.forEach((asset: any) => {
            csv += `${asset.assetName},${asset.propertyNumber},${asset.category || 'N/A'},${asset.issuedTo}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.selectedLaboratoryData?.laboratoryName || 'laboratory'}_assets.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}
