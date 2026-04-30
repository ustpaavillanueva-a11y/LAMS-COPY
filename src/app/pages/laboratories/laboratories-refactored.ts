import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';

// PrimeNG
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

// Third-party
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

// Core
import { BaseComponent } from '../../core/base/base.component';
import { LoadingState, isLoading } from '../../core/models/loading-state.enum';
import { ErrorHandlerService } from '../../core/services/error-handler.service';

// Shared
import { DataTableComponent, TableColumn } from '../../shared/components/data-table/data-table.component';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { ActionButtonsComponent } from '../../shared/components/action-buttons/action-buttons.component';
import { DialogService } from '../../shared/services/dialog.service';
import { ExportService, ExportColumn } from '../../shared/services/export.service';
import { debounceInput } from '../../shared/utils/rxjs-operators';

// Environment
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-laboratories',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        InputTextModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        TooltipModule,
        DialogModule,
        SelectModule,
        InputNumberModule,
        TextareaModule,
        DatePickerModule,
        DataTableComponent,
        ToolbarComponent,
        ActionButtonsComponent
    ],
    providers: [MessageService],
    templateUrl: './laboratories.component.html'
})
export class LaboratoriesComponent extends BaseComponent implements OnInit {
    @ViewChild('dt') dt: Table | undefined;

    // State management
    loadingState: LoadingState = LoadingState.IDLE;
    isUpdating: boolean = false;
    isDeleting: boolean = false;

    // Data
    laboratories: any[] = [];
    filteredLaboratories: any[] = [];
    selectedLabs: any[] = [];
    selectedAssets: any[] = [];
    selectedLaboratoryId: string | null = null;
    selectedLaboratoryData: any = null;

    // Search
    private searchSubject$ = new Subject<string>();
    private currentSearchTerm: string = '';

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

    // Table configuration
    tableColumns: TableColumn[] = [
        { field: 'laboratoryId', header: 'ID', sortable: false },
        { field: 'laboratoryName', header: 'Laboratory Name', sortable: true },
        { field: 'campus.campusName', header: 'Campus', sortable: false },
        { field: 'actions', header: 'Actions', sortable: false }
    ];

    assetColumns: TableColumn[] = [
        { field: 'assetName', header: 'Asset', sortable: true },
        { field: 'propertyNumber', header: 'Property #', sortable: false },
        { field: 'category', header: 'Category', sortable: false },
        { field: 'issuedTo', header: 'Issued To', sortable: false },
        { field: 'qrCode', header: 'QR Code', sortable: false }
    ];

    // Computed properties
    get loading(): boolean {
        return isLoading(this.loadingState);
    }

    private apiUrl = `${environment.apiUrl}/laboratories`;

    constructor(
        private messageService: MessageService,
        private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private cdr: ChangeDetectorRef,
        private dialogService: DialogService,
        private exportService: ExportService,
        private errorHandler: ErrorHandlerService
    ) {
        super();
    }

    ngOnInit() {
        this.setupSearchDebounce();

        // Check if navigated with a specific laboratory ID
        this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
            const labId = params.get('id');
            if (labId) {
                this.selectedLaboratoryId = labId;
                this.loadLaboratories(labId);
            } else {
                this.loadLaboratories();
            }
        });
    }

    /**
     * Setup debounced search
     */
    private setupSearchDebounce(): void {
        this.searchSubject$.pipe(debounceInput(300), takeUntil(this.destroy$)).subscribe((searchTerm) => {
            this.currentSearchTerm = searchTerm;
            this.filter();
        });
    }

    /**
     * Handle search input
     */
    onSearchInput(searchTerm: string): void {
        this.searchSubject$.next(searchTerm);
    }

    /**
     * Get empty laboratory object
     */
    private getEmptyLab() {
        return {
            laboratoryId: '',
            laboratoryName: '',
            laboratoryLocation: '',
            campus: null
        };
    }

    /**
     * Load laboratories
     */
    loadLaboratories(laboratoryId?: string): void {
        if (this.loading) return;

        this.loadingState = LoadingState.LOADING;

        this.http
            .get<any[]>(this.apiUrl)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => {
                    if (this.loadingState === LoadingState.LOADING) {
                        this.loadingState = LoadingState.IDLE;
                    }
                })
            )
            .subscribe({
                next: (data: any[]) => {
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

                    this.loadingState = LoadingState.SUCCESS;
                },
                error: (error: any) => {
                    this.loadingState = LoadingState.ERROR;
                    this.errorHandler.handleError(error, 'loading laboratories');
                }
            });
    }

    /**
     * Filter laboratories based on search term
     */
    filter(): void {
        const searchValue = this.currentSearchTerm.toLowerCase();

        if (!searchValue.trim()) {
            this.filteredLaboratories = [...this.laboratories];
            return;
        }

        this.filteredLaboratories = this.laboratories.filter((lab) => {
            return lab.laboratoryName?.toLowerCase().includes(searchValue) || lab.laboratoryId?.toLowerCase().includes(searchValue) || lab.campus?.campusName?.toLowerCase().includes(searchValue);
        });
    }

    onSelectionChange(event: any) {}

    /**
     * Open new laboratory dialog
     */
    async openNew(): Promise<void> {
        if (this.isUpdating) return;

        const result = await this.dialogService.showForm({
            title: '➕ Add New Laboratory',
            fields: [
                {
                    id: 'laboratoryName',
                    label: 'Laboratory Name *',
                    type: 'text',
                    placeholder: 'Enter laboratory name',
                    required: true
                },
                {
                    id: 'laboratoryLocation',
                    label: 'Laboratory Location *',
                    type: 'text',
                    placeholder: 'Enter laboratory location',
                    required: true
                }
            ],
            confirmButtonText: 'Create Laboratory'
        });

        if (!result.isConfirmed || !result.value) return;

        const { laboratoryName, laboratoryLocation } = result.value;

        if (!laboratoryName?.trim() || !laboratoryLocation?.trim()) {
            this.dialogService.showError('Laboratory Name and Location are required');
            return;
        }

        this.isUpdating = true;

        const payload = {
            laboratoryName: laboratoryName.trim(),
            laboratoryLocation: laboratoryLocation.trim()
        };

        this.http
            .post<any>(this.apiUrl, payload)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => (this.isUpdating = false))
            )
            .subscribe({
                next: () => {
                    this.dialogService.showSuccess('Laboratory created successfully');
                    this.loadLaboratories();
                },
                error: (error) => {
                    this.errorHandler.handleError(error, 'creating laboratory');
                }
            });
    }

    closeDialog() {
        this.labDialog = false;
        this.newLab = this.getEmptyLab();
    }

    view(lab: any) {
        this.messageService.add({
            severity: 'info',
            summary: 'View Laboratory',
            detail: `Viewing: ${lab.laboratoryName}`
        });
    }

    /**
     * Edit laboratory
     */
    async edit(lab: any): Promise<void> {
        if (this.isUpdating) return;

        const result = await this.dialogService.showForm({
            title: '✎ Edit Laboratory',
            fields: [
                {
                    id: 'laboratoryName',
                    label: 'Laboratory Name *',
                    type: 'text',
                    value: lab.laboratoryName,
                    required: true
                },
                {
                    id: 'laboratoryLocation',
                    label: 'Laboratory Location *',
                    type: 'text',
                    value: lab.laboratoryLocation,
                    required: true
                }
            ],
            confirmButtonText: 'Update Laboratory'
        });

        if (!result.isConfirmed || !result.value) return;

        const { laboratoryName, laboratoryLocation } = result.value;

        if (!laboratoryName?.trim() || !laboratoryLocation?.trim()) {
            this.dialogService.showError('Laboratory Name and Location are required');
            return;
        }

        this.isUpdating = true;

        const payload = {
            laboratoryName: laboratoryName.trim(),
            laboratoryLocation: laboratoryLocation.trim()
        };

        this.http
            .put<any>(`${this.apiUrl}/${lab.laboratoryId}`, payload)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => (this.isUpdating = false))
            )
            .subscribe({
                next: () => {
                    this.dialogService.showSuccess('Laboratory updated successfully');
                    this.loadLaboratories();
                },
                error: (error) => {
                    this.errorHandler.handleError(error, 'updating laboratory');
                }
            });
    }

    /**
     * Delete laboratory
     */
    async delete(lab: any): Promise<void> {
        if (this.isDeleting) return;

        const confirmed = await this.dialogService.confirmDelete(`laboratory "${lab.laboratoryName}"`);
        if (!confirmed.isConfirmed) return;

        this.isDeleting = true;

        this.http
            .delete(`${this.apiUrl}/${lab.laboratoryId}`)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => (this.isDeleting = false))
            )
            .subscribe({
                next: () => {
                    this.dialogService.showSuccess('Laboratory deleted successfully');
                    this.loadLaboratories();
                },
                error: (error) => {
                    this.errorHandler.handleError(error, 'deleting laboratory');
                }
            });
    }

    /**
     * Delete selected laboratories
     */
    async deleteSelected(): Promise<void> {
        if (!this.selectedLabs || this.selectedLabs.length === 0) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Warning',
                detail: 'Please select laboratories to delete'
            });
            return;
        }

        if (this.isDeleting) return;

        const confirmed = await this.dialogService.confirm('Confirm Delete', `Are you sure you want to delete ${this.selectedLabs.length} laboratory(ies)?`);

        if (!confirmed.isConfirmed) return;

        this.isDeleting = true;
        let deletedCount = 0;
        let failedCount = 0;
        const totalCount = this.selectedLabs.length;

        this.selectedLabs.forEach((lab) => {
            this.http
                .delete(`${this.apiUrl}/${lab.laboratoryId}`)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: () => {
                        deletedCount++;
                        this.checkBulkDeleteComplete(deletedCount, failedCount, totalCount);
                    },
                    error: (error) => {
                        failedCount++;
                        console.error(`Failed to delete laboratory ${lab.laboratoryId}:`, error);
                        this.checkBulkDeleteComplete(deletedCount, failedCount, totalCount);
                    }
                });
        });
    }

    /**
     * Check if bulk delete operation is complete
     */
    private checkBulkDeleteComplete(deleted: number, failed: number, total: number): void {
        if (deleted + failed === total) {
            this.isDeleting = false;
            this.selectedLabs = [];
            this.loadLaboratories();

            if (failed === 0) {
                this.dialogService.showSuccess(`${deleted} laboratory(ies) deleted successfully`);
            } else {
                this.dialogService.showWarning(`${deleted} laboratory(ies) deleted, ${failed} failed`, 'Partial Delete');
            }
        }
    }

    // ==================== REPORTING FEATURES ====================

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
            if (dow !== 0) {
                // skip Sunday
                dayDates.push({ day: d, dayOfWeek: dow });
            }
        }
        this.weekDayHeaders = dayDates.map((dd) => `${dayShortNames[dd.dayOfWeek]} (${dd.day})`);

        // Build data per laboratory
        this.reportWeekData = this.laboratories.map((lab) => {
            const availableHours = dayDates.map(() => DAILY_HOURS);
            const actualHours = dayDates.map(() => 0); // placeholder
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

    onActualHoursChange(labIndex: number, dayIndex: number, event: Event) {
        const input = event.target as HTMLInputElement;
        let value = parseFloat(input.value) || 0;
        const maxHrs = this.reportWeekData[labIndex].availableHours[dayIndex];
        if (value < 0) value = 0;
        if (value > maxHrs) value = maxHrs;
        input.value = value.toString();

        const lab = this.reportWeekData[labIndex];
        lab.actualHours[dayIndex] = value;
        lab.totalActual = lab.actualHours.reduce((a: number, b: number) => a + b, 0);
        lab.utilization = lab.totalAvailable > 0 ? (lab.totalActual / lab.totalAvailable) * 100 : 0;
        this.cdr.detectChanges();
    }

    async downloadExcelReport() {
        if (!this.reportWeekData.length || !this.reportFilters.week) return;

        const wb = new ExcelJS.Workbook();
        const ws = wb.addWorksheet('Utilization Report');

        const monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
        const month = this.reportFilters.month;
        const year = month.getFullYear();
        const mon = month.getMonth();
        const { start, end } = this.reportFilters.week;
        const numDays = this.weekDayHeaders.length;

        const totalCols = numDays + 4;
        ws.columns = [{ width: 25 }, { width: 16 }, ...this.weekDayHeaders.map(() => ({ width: 10 })), { width: 10 }, { width: 15 }];

        const lastCol = totalCols;
        const thinBorder: Partial<ExcelJS.Borders> = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
        };
        const headerFill: ExcelJS.FillPattern = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD6DCE4' } };
        const boldCenter: Partial<ExcelJS.Alignment> = { horizontal: 'center', vertical: 'middle' };

        // Header
        try {
            const response = await fetch(this.headerImgUrl);
            if (response.ok) {
                const blob = await response.blob();
                const buffer = await blob.arrayBuffer();
                const imgId = wb.addImage({ buffer, extension: 'png' });
                ws.mergeCells(1, 1, 3, lastCol);
                ws.addImage(imgId, {
                    tl: { col: 0, row: 0 },
                    ext: { width: 750, height: 80 }
                });
            }
        } catch (e) {}

        let row = 4;
        ws.mergeCells(row, 1, row, lastCol);
        const lmoCell = ws.getCell(row, 1);
        lmoCell.value = 'LABORATORY MANAGEMENT OFFICE';
        lmoCell.font = { bold: true, size: 11 };
        lmoCell.alignment = { horizontal: 'center' };

        row = 5;
        ws.mergeCells(row, 1, row, lastCol);
        const titleCell = ws.getCell(row, 1);
        titleCell.value = 'LABORATORY UTILIZATION REPORT';
        titleCell.font = { bold: true, size: 12 };
        titleCell.alignment = { horizontal: 'center' };

        row = 7;
        ws.getCell(row, 1).value = 'Month:';
        ws.getCell(row, 1).font = { bold: true };
        ws.getCell(row, 2).value = `${monthNames[mon]} ${year}`;

        row = 8;
        ws.getCell(row, 1).value = 'Inclusive dates:';
        ws.getCell(row, 1).font = { bold: true };
        ws.getCell(row, 2).value = `${start}-${end}`;

        row = 9;
        const headerRow = ws.getRow(row);
        headerRow.height = 20;
        const headers = ['', '', ...this.weekDayHeaders, 'Total', '% UTILIZATION'];
        headers.forEach((h, idx) => {
            const cell = ws.getCell(row, idx + 1);
            cell.value = h;
            cell.font = { bold: true, size: 10 };
            cell.alignment = boldCenter;
            cell.fill = headerFill;
            cell.border = thinBorder;
        });

        row = 10;
        this.reportWeekData.forEach((lab) => {
            const availRow = row;
            ws.getCell(availRow, 1).value = lab.laboratoryName;
            ws.getCell(availRow, 1).font = { bold: true, size: 10 };
            ws.getCell(availRow, 1).alignment = { vertical: 'middle' };
            ws.mergeCells(availRow, 1, availRow + 1, 1);
            ws.getCell(availRow, 2).value = 'Available Hours';
            ws.getCell(availRow, 2).font = { italic: true, size: 9 };
            ws.getCell(availRow, 2).alignment = boldCenter;
            lab.availableHours.forEach((hrs: number, di: number) => {
                const cell = ws.getCell(availRow, 3 + di);
                cell.value = hrs || '';
                cell.alignment = boldCenter;
            });
            ws.getCell(availRow, 3 + numDays).value = lab.totalAvailable || '';
            ws.getCell(availRow, 3 + numDays).font = { bold: true };
            ws.getCell(availRow, 3 + numDays).alignment = boldCenter;

            const utilCol = 3 + numDays + 1;
            ws.mergeCells(availRow, utilCol, availRow + 1, utilCol);
            const utilCell = ws.getCell(availRow, utilCol);
            utilCell.value = lab.totalAvailable > 0 ? parseFloat(lab.utilization.toFixed(2)) + '%' : '0.00%';
            utilCell.font = { bold: true, size: 11 };
            utilCell.alignment = boldCenter;

            const actualRow = availRow + 1;
            ws.getCell(actualRow, 2).value = 'Actual Hours';
            ws.getCell(actualRow, 2).font = { italic: true, size: 9 };
            ws.getCell(actualRow, 2).alignment = boldCenter;
            lab.actualHours.forEach((hrs: number, di: number) => {
                const cell = ws.getCell(actualRow, 3 + di);
                cell.value = hrs || '';
                cell.alignment = boldCenter;
            });
            ws.getCell(actualRow, 3 + numDays).value = lab.totalActual || '';
            ws.getCell(actualRow, 3 + numDays).font = { bold: true };
            ws.getCell(actualRow, 3 + numDays).alignment = boldCenter;

            for (let r = availRow; r <= actualRow; r++) {
                for (let c = 1; c <= lastCol; c++) {
                    ws.getCell(r, c).border = thinBorder;
                }
            }

            row += 2;
        });

        row += 1;

        const sigRow = row + 1;
        ws.getCell(sigRow, 1).value = 'Prepared by:';
        ws.getCell(sigRow, 1).font = { bold: false, size: 10 };
        const notedCol = Math.ceil(lastCol / 2);
        ws.getCell(sigRow, notedCol).value = 'Noted by:';
        ws.getCell(sigRow, notedCol).font = { bold: false, size: 10 };
        const headCol = lastCol - 1;

        const nameRow = sigRow + 3;
        ws.getCell(nameRow, 1).value = '_________________________';
        ws.getCell(nameRow, 1).font = { bold: true, size: 10 };
        ws.getCell(nameRow + 1, 1).value = 'Laboratory Technician';
        ws.getCell(nameRow + 1, 1).font = { size: 9 };

        ws.getCell(nameRow, notedCol).value = '_________________________';
        ws.getCell(nameRow, notedCol).font = { bold: true, size: 10 };
        ws.getCell(nameRow + 1, notedCol).value = 'LMO - Coordinator';
        ws.getCell(nameRow + 1, notedCol).font = { size: 9 };

        ws.getCell(nameRow, headCol).value = '_________________________';
        ws.getCell(nameRow, headCol).font = { bold: true, size: 10 };
        ws.getCell(nameRow + 1, headCol).value = 'Head, Academic Head';
        ws.getCell(nameRow + 1, headCol).font = { size: 9 };

        const noteRow = nameRow + 4;
        const notes = ['*Available hours - potential student clock hours', '*Actual hours - based on actual number of hours the laboratory is utilized', '*% utilization = actual hours / available hours', '*Cut-off is per month'];
        notes.forEach((note, idx) => {
            ws.mergeCells(noteRow + idx, 1, noteRow + idx, lastCol);
            const cell = ws.getCell(noteRow + idx, 1);
            cell.value = note;
            cell.font = { italic: true, size: 9 };
        });

        const buffer = await wb.xlsx.writeBuffer();
        const fileName = `Laboratory_Utilization_Report_${monthNames[mon]}_${year}_${start}-${end}.xlsx`;
        saveAs(new Blob([buffer]), fileName);
    }

    /**
     * Export laboratories to CSV
     */
    exportCSV(): void {
        if (this.laboratories.length === 0) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Warning',
                detail: 'No data to export'
            });
            return;
        }

        const exportColumns: ExportColumn[] = [
            { field: 'laboratoryId', header: 'Laboratory ID' },
            { field: 'laboratoryName', header: 'Laboratory Name' },
            { field: 'campus.campusName', header: 'Campus' }
        ];

        this.exportService.exportToCsv(this.laboratories, 'laboratories_export', exportColumns);

        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Laboratories exported to CSV'
        });
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
