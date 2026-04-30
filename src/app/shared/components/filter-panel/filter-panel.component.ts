import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { CalendarModule } from 'primeng/calendar';
import { PanelModule } from 'primeng/panel';

/**
 * Reusable Filter Panel Component
 * Provides advanced filtering UI for data tables
 */
@Component({
    selector: 'app-filter-panel',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, SelectModule, CalendarModule, PanelModule],
    template: `
        <p-panel [header]="title" [toggleable]="collapsible" [collapsed]="collapsed">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div *ngFor="let filter of filters" class="filter-item">
                    <label [for]="filter.key" class="block font-medium mb-2 text-sm">
                        {{ filter.label }}
                    </label>

                    <!-- Select Filter -->
                    <p-select
                        *ngIf="filter.type === 'select'"
                        [id]="filter.key"
                        [(ngModel)]="filterValues[filter.key]"
                        [options]="filter.options || []"
                        [optionLabel]="filter.optionLabel || 'label'"
                        [optionValue]="filter.optionValue || 'value'"
                        [placeholder]="filter.placeholder || 'Select...'"
                        [showClear]="true"
                        [fluid]="true"
                        (onChange)="onFilterChange()"
                    />

                    <!-- Date Range Filter -->
                    <p-calendar
                        *ngIf="filter.type === 'dateRange'"
                        [id]="filter.key"
                        [(ngModel)]="filterValues[filter.key]"
                        [selectionMode]="'range'"
                        [placeholder]="filter.placeholder || 'Select date range'"
                        [showIcon]="true"
                        [fluid]="true"
                        (onSelect)="onFilterChange()"
                        (onClearClick)="onFilterChange()"
                    />

                    <!-- Date Filter -->
                    <p-calendar
                        *ngIf="filter.type === 'date'"
                        [id]="filter.key"
                        [(ngModel)]="filterValues[filter.key]"
                        [placeholder]="filter.placeholder || 'Select date'"
                        [showIcon]="true"
                        [fluid]="true"
                        (onSelect)="onFilterChange()"
                        (onClearClick)="onFilterChange()"
                    />
                </div>
            </div>

            <div class="flex gap-2 mt-4">
                <p-button label="Apply Filters" icon="pi pi-filter" (onClick)="applyFilters()" [disabled]="!hasActiveFilters()" />
                <p-button label="Clear All" icon="pi pi-times" severity="secondary" outlined (onClick)="clearFilters()" [disabled]="!hasActiveFilters()" />
            </div>
        </p-panel>
    `,
    styles: [
        `
            :host ::ng-deep {
                .p-panel .p-panel-content {
                    padding: 1.25rem;
                }

                .p-panel .p-panel-header {
                    background: var(--surface-50);
                    border-bottom: 1px solid var(--surface-border);
                }
            }

            .filter-item label {
                color: var(--text-color);
            }
        `
    ]
})
export class FilterPanelComponent {
    @Input() title: string = 'Filters';
    @Input() filters: FilterConfig[] = [];
    @Input() collapsible: boolean = true;
    @Input() collapsed: boolean = false;
    @Input() autoApply: boolean = false; // Apply on change vs button click

    @Output() filterApply = new EventEmitter<Record<string, any>>();
    @Output() filterClear = new EventEmitter<void>();

    filterValues: Record<string, any> = {};

    onFilterChange(): void {
        if (this.autoApply) {
            this.applyFilters();
        }
    }

    applyFilters(): void {
        const activeFilters = this.getActiveFilters();
        this.filterApply.emit(activeFilters);
    }

    clearFilters(): void {
        this.filterValues = {};
        this.filterClear.emit();
    }

    hasActiveFilters(): boolean {
        return Object.values(this.filterValues).some((value) => value !== null && value !== undefined && value !== '');
    }

    getActiveFilters(): Record<string, any> {
        const active: Record<string, any> = {};
        Object.entries(this.filterValues).forEach(([key, value]) => {
            if (value !== null && value !== undefined && value !== '') {
                active[key] = value;
            }
        });
        return active;
    }
}

export interface FilterConfig {
    key: string;
    label: string;
    type: 'select' | 'date' | 'dateRange';
    placeholder?: string;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
}
