import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

/**
 * Reusable Toolbar Component
 * Provides consistent toolbar UI with actions and filters
 */
@Component({
    selector: 'app-toolbar',
    standalone: true,
    imports: [CommonModule, ToolbarModule, ButtonModule, SelectModule, FormsModule],
    template: `
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <ng-container *ngTemplateOutlet="startTemplate || defaultStart"></ng-container>
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <ng-container *ngTemplateOutlet="endTemplate || defaultEnd"></ng-container>
                </div>
            </ng-template>
        </p-toolbar>

        <ng-template #defaultStart>
            <p-button *ngIf="showNew" [label]="newLabel" icon="pi pi-plus" severity="secondary" (onClick)="newClick.emit()" [disabled]="newDisabled" />
            <p-button *ngIf="showDelete && selectedCount > 0" [label]="deleteLabel" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteClick.emit()" [disabled]="selectedCount === 0" />
        </ng-template>

        <ng-template #defaultEnd>
            <p-select
                *ngIf="showFilter && filterOptions.length > 0"
                [(ngModel)]="filterValue"
                [options]="filterOptions"
                [optionLabel]="filterOptionLabel"
                [optionValue]="filterOptionValue"
                [placeholder]="filterPlaceholder"
                [class]="filterClass"
                appendTo="body"
                [showClear]="filterClearable"
                (onChange)="filterChange.emit($event.value)"
            />
        </ng-template>
    `,
    styles: [
        `
            :host ::ng-deep .p-toolbar {
                border-radius: 8px;
                background: var(--surface-0);
                border: 1px solid var(--surface-border);
            }
        `
    ]
})
export class ToolbarComponent {
    // New Button
    @Input() showNew: boolean = true;
    @Input() newLabel: string = 'New';
    @Input() newDisabled: boolean = false;
    @Output() newClick = new EventEmitter<void>();

    // Delete Button
    @Input() showDelete: boolean = true;
    @Input() deleteLabel: string = 'Delete Selected';
    @Input() selectedCount: number = 0;
    @Output() deleteClick = new EventEmitter<void>();

    // Filter
    @Input() showFilter: boolean = false;
    @Input() filterOptions: any[] = [];
    @Input() filterOptionLabel: string = 'name';
    @Input() filterOptionValue: string = 'id';
    @Input() filterPlaceholder: string = 'Filter...';
    @Input() filterClass: string = 'w-56';
    @Input() filterClearable: boolean = true;
    @Input() filterValue: any = null;
    @Output() filterChange = new EventEmitter<any>();

    // Custom Templates
    @ContentChild('start') startTemplate: TemplateRef<any> | null = null;
    @ContentChild('end') endTemplate: TemplateRef<any> | null = null;
}
