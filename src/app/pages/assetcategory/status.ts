import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';

// PrimeNG
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule, Table } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageService } from 'primeng/api';

// Core
import { BaseComponent } from '../../core/base/base.component';
import { LoadingState, isLoading } from '../../core/models/loading-state.enum';
import { ErrorHandlerService } from '../../core/services/error-handler.service';

// Shared
import { DialogService } from '../../shared/services/dialog.service';
import { ExportService, ExportColumn } from '../../shared/services/export.service';
import { debounceInput } from '../../shared/utils/rxjs-operators';

// Services
import { AssetService, Status } from '../service/asset.service';

@Component({
    selector: 'app-status',
    standalone: true,
    imports: [CommonModule, FormsModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule],
    styleUrls: ['../../../assets/pages/_assetcategory.scss'],
    providers: [MessageService],
    template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewDialog()" [disabled]="isUpdating" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems.length || isDeleting" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportData()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="onSearchInput()" placeholder="Search statuses..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            #dt
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="statusId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} statuses"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="statusName" style="min-width:20rem">Status <p-sortIcon field="statusName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.statusId }}</td>
                    <td>{{ row.statusName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" [disabled]="isUpdating" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" [disabled]="isDeleting" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No statuses found</td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class StatusComponent extends BaseComponent implements OnInit {
    // State management
    loadingState: LoadingState = LoadingState.IDLE;
    isUpdating: boolean = false;
    isDeleting: boolean = false;

    items: Status[] = [];
    filteredItems: Status[] = [];
    selectedItems: Status[] = [];

    // Table columns
    columns: TableColumn[] = [
        { field: 'statusId', header: 'ID', sortable: true },
        { field: 'statusName', header: 'Status', sortable: true }
    ];

    private searchSubject$ = new Subject<string>();

    // Computed properties
    get loading(): boolean {
        return isLoading(this.loadingState);
    }

    constructor(
        private assetService: AssetService,
        private messageService: MessageService,
        private dialogService: DialogService,
        private exportService: ExportService,
        private errorHandler: ErrorHandlerService
    ) {
        super();
    }

    ngOnInit() {
        this.loadItems();
        this.setupSearchDebounce();
    }

    /**
     * Setup search debouncing
     */
    private setupSearchDebounce(): void {
        this.searchSubject$.pipe(debounceInput(300), takeUntil(this.destroy$)).subscribe((searchTerm) => {
            this.filterData(searchTerm);
        });
    }

    /**
     * Handle search input
     */
    onSearchInput(searchTerm: string): void {
        this.searchSubject$.next(searchTerm);
    }

    /**
     * Filter data based on search term
     */
    private filterData(searchTerm: string): void {
        if (!searchTerm) {
            this.filteredItems = [...this.items];
            return;
        }

        const term = searchTerm.toLowerCase();
        this.filteredItems = this.items.filter((item) => item.statusName?.toLowerCase().includes(term) || item.statusId?.toString().toLowerCase().includes(term));
    }

    /**
     * Load statuses
     */
    loadItems(): void {
        if (this.loading) return;

        this.loadingState = LoadingState.LOADING;

        this.assetService
            .getStatuses()
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => {
                    if (this.loadingState === LoadingState.LOADING) {
                        this.loadingState = LoadingState.IDLE;
                    }
                })
            )
            .subscribe({
                next: (data) => {
                    this.items = data || [];
                    this.filteredItems = [...this.items];
                    this.loadingState = LoadingState.SUCCESS;
                },
                error: (error) => {
                    this.loadingState = LoadingState.ERROR;
                    this.errorHandler.handleError(error, 'loading statuses');
                }
            });
    }

    /**
     * Filter statuses
     */
    filter(): void {
        this.filteredItems = this.items.filter((item) => item.statusName?.toLowerCase().includes(this.searchValue.toLowerCase()));
    }

    onSelectionChange(event: any) {}

    /**
     * Open dialog to create new status
     */
    async openNewDialog(): Promise<void> {
        if (this.isUpdating) return;

        const result = await this.dialogService.showForm({
            title: 'New Status',
            fields: [
                {
                    name: 'statusName',
                    label: 'Status Name',
                    type: 'text',
                    required: true,
                    placeholder: 'Enter status name'
                }
            ]
        });

        if (!result.isConfirmed) return;

        this.isUpdating = true;

        this.assetService
            .createStatus(result.value)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => (this.isUpdating = false))
            )
            .subscribe({
                next: (created) => {
                    this.items.push(created);
                    this.filteredItems = [...this.items];
                    this.dialogService.showSuccess('Status created successfully');
                },
                error: (error) => {
                    this.errorHandler.handleError(error, 'creating status');
                }
            });
    }

    /**
     * Edit status
     */
    async edit(item: Status): Promise<void> {
        if (this.isUpdating) return;

        const result = await this.dialogService.showForm({
            title: 'Edit Status',
            fields: [
                {
                    name: 'statusName',
                    label: 'Status Name',
                    type: 'text',
                    required: true,
                    value: item.statusName
                }
            ]
        });

        if (!result.isConfirmed) return;

        this.isUpdating = true;

        this.assetService
            .updateStatus(item.statusId!, result.value)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => (this.isUpdating = false))
            )
            .subscribe({
                next: (updated) => {
                    const idx = this.items.findIndex((s) => s.statusId === updated.statusId);
                    if (idx > -1) this.items[idx] = updated;
                    this.filteredItems = [...this.items];
                    this.dialogService.showSuccess('Status updated successfully');
                },
                error: (error) => {
                    this.errorHandler.handleError(error, 'updating status');
                }
            });
    }

    /**
     * Delete status
     */
    async delete(item: Status): Promise<void> {
        if (this.isDeleting) return;

        const confirmed = await this.dialogService.confirmDelete(`status "${item.statusName}"`);
        if (!confirmed.isConfirmed) return;

        this.isDeleting = true;

        this.assetService
            .deleteStatus(item.statusId!)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => (this.isDeleting = false))
            )
            .subscribe({
                next: () => {
                    this.items = this.items.filter((s) => s.statusId !== item.statusId);
                    this.filteredItems = [...this.items];
                    this.dialogService.showSuccess('Status deleted successfully');
                },
                error: (error) => {
                    this.errorHandler.handleError(error, 'deleting status');
                }
            });
    }

    /**
     * Delete selected statuses
     */
    async deleteSelected(): Promise<void> {
        if (!this.selectedItems?.length || this.isDeleting) return;

        const confirmed = await this.dialogService.confirm('Delete Selected', `Are you sure you want to delete ${this.selectedItems.length} status(es)?`);

        if (!confirmed.isConfirmed) return;

        this.isDeleting = true;
        let deletedCount = 0;
        let failedCount = 0;
        const totalCount = this.selectedItems.length;

        this.selectedItems.forEach((item) => {
            this.assetService
                .deleteStatus(item.statusId!)
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                    next: () => {
                        deletedCount++;
                        this.checkBulkDeleteComplete(deletedCount, failedCount, totalCount);
                    },
                    error: (error) => {
                        failedCount++;
                        console.error(`Failed to delete status ${item.statusId}:`, error);
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

            // Reload items to get fresh state
            this.loadItems();
            this.selectedItems = [];

            if (failed === 0) {
                this.dialogService.showSuccess(`${deleted} status(es) deleted successfully`);
            } else {
                this.dialogService.showWarning(`${deleted} status(es) deleted, ${failed} failed`, 'Partial Delete');
            }
        }
    }

    /**
     * Export data to CSV
     */
    exportData(): void {
        if (this.items.length === 0) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Warning',
                detail: 'No data to export'
            });
            return;
        }

        const exportColumns: ExportColumn[] = [
            { field: 'statusName', header: 'Status Name' },
            { field: 'statusId', header: 'ID' }
        ];

        this.exportService.exportToCsv(this.items, 'statuses', exportColumns);

        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Data exported to CSV'
        });
    }
}
