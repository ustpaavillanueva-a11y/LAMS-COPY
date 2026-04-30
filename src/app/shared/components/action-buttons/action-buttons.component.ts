import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

/**
 * Reusable Action Buttons Component
 * Provides consistent action button UI (view, edit, delete, etc.)
 */
@Component({
    selector: 'app-action-buttons',
    standalone: true,
    imports: [CommonModule, ButtonModule, TooltipModule],
    template: `
        <div class="flex gap-2">
            <p-button *ngIf="showView" icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" pTooltip="View" (onClick)="onView()" [disabled]="viewDisabled" />
            <p-button *ngIf="showEdit" icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" pTooltip="Edit" (onClick)="onEdit()" [disabled]="editDisabled" />
            <p-button *ngIf="showDelete" icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" pTooltip="Delete" (onClick)="onDelete()" [disabled]="deleteDisabled" />
            <p-button *ngFor="let action of customActions" [icon]="action.icon" [severity]="action.severity || 'secondary'" [rounded]="true" [text]="true" [pTooltip]="action.tooltip" (onClick)="action.onClick(data)" [disabled]="action.disabled" />
        </div>
    `
})
export class ActionButtonsComponent {
    @Input() data: any;

    @Input() showView: boolean = true;
    @Input() showEdit: boolean = true;
    @Input() showDelete: boolean = true;

    @Input() viewDisabled: boolean = false;
    @Input() editDisabled: boolean = false;
    @Input() deleteDisabled: boolean = false;

    @Input() customActions: CustomAction[] = [];

    @Output() view = new EventEmitter<any>();
    @Output() edit = new EventEmitter<any>();
    @Output() delete = new EventEmitter<any>();

    onView(): void {
        this.view.emit(this.data);
    }

    onEdit(): void {
        this.edit.emit(this.data);
    }

    onDelete(): void {
        this.delete.emit(this.data);
    }
}

export interface CustomAction {
    icon: string;
    tooltip: string;
    severity?: 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast';
    disabled?: boolean;
    onClick: (data: any) => void;
}
