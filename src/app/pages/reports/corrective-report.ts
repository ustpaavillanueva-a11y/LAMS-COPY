import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ReportService } from '../service/report.service';

interface Laboratory {
    laboratoryId: string;
    laboratoryName: string;
}

@Component({
    selector: 'app-corrective-report',
    standalone: true,
    imports: [
        CommonModule, FormsModule, ToolbarModule, ButtonModule, DatePickerModule,
        TableModule, TagModule, SelectModule, ProgressSpinnerModule, MessageModule, CardModule
    ],
    template: `
<div class="card">
  <h2 class="text-2xl font-bold mb-3">Corrective Maintenance Report</h2>

  <!-- FILTER SECTION -->
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">

    <!-- Report Type -->
    <div>
      <label class="font-semibold">Report Type</label>
      <p-select 
        [(ngModel)]="reportType" 
        [options]="reportTypes" 
        optionLabel="label" 
        optionValue="value"
        (onChange)="onReportTypeChange()">
      </p-select>
    </div>

    <!-- Date / Month / Year -->
    <div *ngIf="reportType === 'daily'">
      <label class="font-semibold">Date</label>
      <p-datepicker [(ngModel)]="selectedDate" dateFormat="yy-mm-dd"></p-datepicker>
    </div>

    <div *ngIf="reportType === 'monthly'">
      <label class="font-semibold">Month</label>
      <p-select [(ngModel)]="selectedMonth" [options]="months" optionLabel="label" optionValue="value"></p-select>
    </div>

    <div *ngIf="reportType !== 'daily'">
      <label class="font-semibold">Year</label>
      <p-select [(ngModel)]="selectedYear" [options]="years"></p-select>
    </div>

    <!-- Laboratory -->
    <div>
      <label class="font-semibold">Laboratory</label>
      <p-select
        [(ngModel)]="selectedLaboratoryId"
        [options]="laboratories"
        optionLabel="laboratoryName"
        optionValue="laboratoryId"
        placeholder="Select Laboratory">
      </p-select>
    </div>

    <!-- Generate Button -->
    <div class="flex items-end">
      <p-button label="Generate Report" icon="pi pi-chart-bar" (onClick)="generateReport()" [loading]="isLoading"></p-button>
    </div>
  </div>

  <!-- ERROR MESSAGE -->
  <p-message *ngIf="errorMessage" severity="error" [text]="errorMessage" styleClass="mb-3 w-full"></p-message>

  <!-- LOADING -->
  <div *ngIf="isLoading" class="flex justify-center py-5">
    <p-progressSpinner></p-progressSpinner>
  </div>

  <!-- REPORT HEADER (FOR DAILY) -->
  <div *ngIf="reportData && reportType === 'daily' && !isLoading" class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
    <h3 class="text-xl font-bold mb-2">Daily Calibration Report</h3>
    <p><strong>Laboratory:</strong> {{ reportData.laboratoryName }}</p>
    <p><strong>Date:</strong> {{ formatDate(reportData.date) }}</p>
    <p><strong>Performed By:</strong> {{ reportData.performedBy || 'N/A' }}</p>
    <p><strong>Assisted By:</strong> {{ reportData.assistedBy || 'N/A' }}</p>
    <p><strong>Noted By:</strong> {{ reportData.notedBy || 'N/A' }}</p>
    <p><strong>Recommendation:</strong> {{ reportData.recommendation || 'N/A' }}</p>
  </div>

  <!-- TABLE -->
  <p-table *ngIf="reportData && reportData.records?.length > 0 && !isLoading" [value]="reportData.records" [paginator]="true" [rows]="10">
    <ng-template pTemplate="header">
      <tr>
        <th>Equipment / Instrument</th>
        <th>Actual Reading</th>
        <th>Expected Reading</th>
        <th>Observation</th>
        <th>Action Taken</th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-row>
      <tr>
        <td>{{ row.machineEquipmentInstrument }}</td>
        <td>{{ row.actualReading || 'N/A' }}</td>
        <td>{{ row.expectedReading || 'N/A' }}</td>
        <td>{{ row.observation || 'N/A' }}</td>
        <td>{{ row.actionTaken || 'N/A' }}</td>
      </tr>
    </ng-template>
    <ng-template pTemplate="emptymessage">
      <tr>
        <td colspan="5" class="text-center py-4">No records found.</td>
      </tr>
    </ng-template>
  </p-table>
</div>
`
})
export class CorrectiveReportComponent implements OnInit {

    reportType: 'daily' | 'monthly' | 'yearly' = 'daily';
    selectedDate: Date = new Date();
    selectedMonth: number = new Date().getMonth() + 1;
    selectedYear: number = new Date().getFullYear();
    selectedLaboratoryId: string = '';

    reportData: any = null;
    isLoading = false;
    errorMessage = '';

    laboratories: Laboratory[] = [];

    reportTypes = [
        { label: 'Daily Report', value: 'daily' },
        { label: 'Monthly Report', value: 'monthly' },
        { label: 'Yearly Report', value: 'yearly' }
    ];

    months = [
        { label: 'January', value: 1 },
        { label: 'February', value: 2 },
        { label: 'March', value: 3 },
        { label: 'April', value: 4 },
        { label: 'May', value: 5 },
        { label: 'June', value: 6 },
        { label: 'July', value: 7 },
        { label: 'August', value: 8 },
        { label: 'September', value: 9 },
        { label: 'October', value: 10 },
        { label: 'November', value: 11 },
        { label: 'December', value: 12 }
    ];

    years: number[] = [];

    constructor(private reportService: ReportService, private http: HttpClient) {
        const currentYear = new Date().getFullYear();
        for (let i = 2020; i <= currentYear + 5; i++) this.years.push(i);
    }

    ngOnInit(): void {
        this.loadLaboratories();
    }

    loadLaboratories(): void {
        const url = `${environment.apiUrl}/laboratories`;
        this.http.get<Laboratory[]>(url).subscribe({
            next: (data) => {
                this.laboratories = data;
            },
            error: (err) => console.error('Error loading laboratories:', err)
        });
    }

    onReportTypeChange(): void {
        this.reportData = null;
        this.errorMessage = '';
    }

    generateReport(): void {
        if (!this.selectedLaboratoryId) {
            this.errorMessage = 'Please select a Laboratory.';
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';
        this.reportData = null;

        if (this.reportType === 'daily') {
            const dateStr = this.formatDateToString(this.selectedDate);
            this.reportService.getDailyCalibrationReport(dateStr, this.selectedLaboratoryId)
                .subscribe({
                    next: (data) => {
                        console.log('Filtered Daily Report:', data);
                        this.reportData = data;
                        this.isLoading = false;
                    },
                    error: (err) => {
                        this.errorMessage = err.error?.message || 'Failed to generate daily report';
                        this.isLoading = false;
                        console.error('Error loading daily report:', err);
                    }
                });
        } else if (this.reportType === 'monthly') {
            this.reportService.getMonthlyCalibrationReport(this.selectedMonth, this.selectedYear, this.selectedLaboratoryId)
                .subscribe({
                    next: (data) => {
                        console.log('Filtered Monthly Report:', data);
                        this.reportData = data;
                        this.isLoading = false;
                    },
                    error: (err) => {
                        this.errorMessage = err.error?.message || 'Failed to generate monthly report';
                        this.isLoading = false;
                        console.error('Error loading monthly report:', err);
                    }
                });
        } else if (this.reportType === 'yearly') {
            this.reportService.getYearlyCalibrationReport(this.selectedYear, this.selectedLaboratoryId)
                .subscribe({
                    next: (data) => {
                        console.log('Filtered Yearly Report:', data);
                        this.reportData = data;
                        this.isLoading = false;
                    },
                    error: (err) => {
                        this.errorMessage = err.error?.message || 'Failed to generate yearly report';
                        this.isLoading = false;
                        console.error('Error loading yearly report:', err);
                    }
                });
        }
    }

    formatDateToString(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    formatDate(date: string | Date): string {
        const d = new Date(date);
        return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
}