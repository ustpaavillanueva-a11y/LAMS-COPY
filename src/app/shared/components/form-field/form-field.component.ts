import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
// Note: InputTextareaModule and CalendarModule names may need to be updated based on PrimeNG version
// import { InputTextareaModule } from 'primeng/textarea';
// import { CalendarModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';

/**
 * Reusable Form Field Component
 * Handles all common form input types with consistent styling and validation
 */
@Component({
    selector: 'app-form-field',
    standalone: true,
    imports: [CommonModule, FormsModule, InputTextModule, InputNumberModule, SelectModule, CheckboxModule, PasswordModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormFieldComponent),
            multi: true
        }
    ],
    template: `
        <div class="form-field" [class.form-field-error]="hasError">
            <label *ngIf="label && type !== 'checkbox'" [for]="id" class="form-label">
                {{ label }}
                <span *ngIf="required" class="text-red-500">*</span>
            </label>

            <!-- Text Input -->
            <input *ngIf="type === 'text'" [id]="id" pInputText [type]="type" [(ngModel)]="value" [placeholder]="placeholder" [disabled]="disabled" [required]="required" class="w-full" />

            <!-- Email Input -->
            <input *ngIf="type === 'email'" [id]="id" pInputText type="email" [(ngModel)]="value" [placeholder]="placeholder" [disabled]="disabled" [required]="required" class="w-full" />

            <!-- Password Input -->
            <p-password *ngIf="type === 'password'" [id]="id" [(ngModel)]="value" [placeholder]="placeholder" [disabled]="disabled" [toggleMask]="true" [feedback]="showPasswordStrength" [fluid]="true" />

            <!-- Number Input -->
            <p-inputNumber *ngIf="type === 'number'" [id]="id" [(ngModel)]="value" [placeholder]="placeholder" [disabled]="disabled" [required]="required" [min]="min" [max]="max" [step]="step" [fluid]="true" />

            <!-- Textarea -->
            <textarea *ngIf="type === 'textarea'" [id]="id" pInputTextarea [(ngModel)]="value" [placeholder]="placeholder" [disabled]="disabled" [required]="required" [rows]="rows" class="w-full"></textarea>

            <!-- Select/Dropdown -->
            <p-select
                *ngIf="type === 'select'"
                [id]="id"
                [(ngModel)]="value"
                [options]="options"
                [optionLabel]="optionLabel"
                [optionValue]="optionValue"
                [placeholder]="placeholder"
                [disabled]="disabled"
                [showClear]="showClear"
                [filter]="filterOptions"
                [fluid]="true"
            />

            <!-- Date Picker -->
            <p-calendar *ngIf="type === 'date'" [id]="id" [(ngModel)]="value" [placeholder]="placeholder" [disabled]="disabled" [showIcon]="true" [dateFormat]="dateFormat" [fluid]="true" />

            <!-- Checkbox -->
            <div *ngIf="type === 'checkbox'" class="flex items-center gap-2">
                <p-checkbox [id]="id" [(ngModel)]="value" [binary]="true" [disabled]="disabled" />
                <label [for]="id" class="cursor-pointer">
                    {{ label }}
                    <span *ngIf="required" class="text-red-500">*</span>
                </label>
            </div>

            <!-- Help Text -->
            <small *ngIf="helpText" class="form-help-text">
                {{ helpText }}
            </small>

            <!-- Error Message -->
            <small *ngIf="errorMessage" class="form-error-text">
                {{ errorMessage }}
            </small>
        </div>
    `,
    styles: [
        `
            .form-field {
                margin-bottom: 1rem;
            }

            .form-label {
                display: block;
                font-weight: 500;
                margin-bottom: 0.5rem;
                color: var(--text-color);
                font-size: 0.875rem;
            }

            .form-help-text {
                display: block;
                margin-top: 0.25rem;
                color: var(--text-color-secondary);
                font-size: 0.75rem;
            }

            .form-error-text {
                display: block;
                margin-top: 0.25rem;
                color: var(--red-500);
                font-size: 0.75rem;
            }

            .form-field-error :ng-deep .p-inputtext,
            .form-field-error :ng-deep .p-inputnumber-input,
            .form-field-error :ng-deep .p-select {
                border-color: var(--red-500);
            }
        `
    ]
})
export class FormFieldComponent implements ControlValueAccessor {
    @Input() id: string = `field-${Math.random().toString(36).substring(7)}`;
    @Input() label: string = '';
    @Input() type: FormFieldType = 'text';
    @Input() placeholder: string = '';
    @Input() helpText: string = '';
    @Input() errorMessage: string = '';
    @Input() required: boolean = false;
    @Input() disabled: boolean = false;
    @Input() hasError: boolean = false;

    // Number input
    @Input() min?: number;
    @Input() max?: number;
    @Input() step?: number = 1;

    // Textarea
    @Input() rows: number = 3;

    // Select
    @Input() options: any[] = [];
    @Input() optionLabel: string = 'label';
    @Input() optionValue: string = 'value';
    @Input() showClear: boolean = true;
    @Input() filterOptions: boolean = false;

    // Date
    @Input() dateFormat: string = 'mm/dd/yy';

    // Password
    @Input() showPasswordStrength: boolean = false;

    // Internal value
    private _value: any;

    get value(): any {
        return this._value;
    }

    set value(val: any) {
        if (val !== this._value) {
            this._value = val;
            this.onChange(val);
            this.onTouched();
        }
    }

    // ControlValueAccessor implementation
    onChange: any = () => {};
    onTouched: any = () => {};

    writeValue(value: any): void {
        this._value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}

export type FormFieldType = 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'date' | 'checkbox';
