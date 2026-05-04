import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

/**
 * Reusable Dialog Service
 * Provides consistent dialog UI for view, edit, delete, and custom forms
 */
@Injectable({
    providedIn: 'root'
})
export class DialogService {
    /**
     * Show a confirmation dialog
     */
    async confirm(title: string, message: string, confirmText: string = 'Yes', cancelText: string = 'Cancel'): Promise<boolean> {
        const result = await Swal.fire({
            title,
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
            confirmButtonColor: '#667eea',
            cancelButtonColor: '#64748b'
        });
        return result.isConfirmed;
    }

    /**
     * Show a delete confirmation dialog
     */
    async confirmDelete(itemName: string = 'this item'): Promise<boolean> {
        const result = await Swal.fire({
            title: 'Confirm Delete',
            text: `Are you sure you want to delete ${itemName}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#64748b'
        });
        return result.isConfirmed;
    }

    /**
     * Show an information dialog with data
     */
    showInfo(title: string, htmlContent: string): Promise<SweetAlertResult> {
        return Swal.fire({
            title,
            html: htmlContent,
            icon: 'info',
            confirmButtonText: 'Close',
            confirmButtonColor: '#667eea',
            width: '600px'
        });
    }

    /**
     * Show a form dialog
     */
    async showForm(options: FormDialogOptions): Promise<SweetAlertResult> {
        let html = options.html || '';

        // Generate HTML from fields if provided
        if (options.fields) {
            html = this.generateFormHTML(options.fields);
        }

        return Swal.fire({
            title: options.title,
            html,
            width: options.width || '750px',
            showCancelButton: true,
            confirmButtonText: options.confirmButtonText || options.confirmText || 'Save',
            cancelButtonText: options.cancelText || 'Cancel',
            confirmButtonColor: '#667eea',
            cancelButtonColor: '#e0e0e0',
            didOpen: options.didOpen,
            preConfirm:
                options.preConfirm ||
                (() => {
                    if (!options.fields) return true;

                    const result: any = {};
                    options.fields.forEach((field) => {
                        const fieldId = field.id || field.name;
                        const inputElement = document.getElementById(`swal-input-${fieldId}`) as HTMLInputElement;
                        if (inputElement) {
                            result[fieldId!] = inputElement.value;
                        }
                    });
                    return result;
                }),
            customClass: options.customClass
        });
    }

    /**
     * Generate HTML for form fields
     */
    private generateFormHTML(fields: FormField[]): string {
        return fields
            .map((field) => {
                const fieldId = field.id || field.name;
                const required = field.required ? 'required' : '';
                const requiredMark = field.required ? '<span class="text-red-500">*</span>' : '';

                let inputHTML = '';

                switch (field.type) {
                    case 'textarea':
                        inputHTML = `<textarea id="swal-input-${fieldId}" class="swal2-input" placeholder="${field.placeholder || ''}" ${required} style="width: 100%; height: 80px;"></textarea>`;
                        break;
                    case 'select':
                        const options =
                            field.options
                                ?.map((opt) => {
                                    const value = field.optionValue ? opt[field.optionValue] : opt;
                                    const label = field.optionLabel ? opt[field.optionLabel] : opt;
                                    return `<option value="${value}">${label}</option>`;
                                })
                                .join('') || '';
                        inputHTML = `<select id="swal-input-${fieldId}" class="swal2-input" ${required}><option value="">Select ${field.label}</option>${options}</select>`;
                        break;
                    default:
                        inputHTML = `<input id="swal-input-${fieldId}" type="${field.type}" class="swal2-input" placeholder="${field.placeholder || ''}" ${required}>`;
                }

                return `
                <div style="margin-bottom: 1rem; text-align: left;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">${field.label} ${requiredMark}</label>
                    ${inputHTML}
                </div>
            `;
            })
            .join('');
    }

    /**
     * Show success message
     */
    showSuccess(message: string, title: string = 'Success'): Promise<SweetAlertResult> {
        return Swal.fire({
            icon: 'success',
            title,
            text: message,
            timer: 2000,
            showConfirmButton: false
        });
    }

    /**
     * Show error message
     */
    showError(message: string, title: string = 'Error'): Promise<SweetAlertResult> {
        return Swal.fire({
            icon: 'error',
            title,
            text: message,
            confirmButtonColor: '#ef4444'
        });
    }

    /**
     * Show warning message
     */
    showWarning(message: string, title: string = 'Warning'): Promise<SweetAlertResult> {
        return Swal.fire({
            icon: 'warning',
            title,
            text: message,
            confirmButtonColor: '#f59e0b'
        });
    }

    /**
     * Show a loading dialog
     */
    showLoading(message: string = 'Processing...'): void {
        Swal.fire({
            title: message,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
    }

    /**
     * Close any open dialog
     */
    close(): void {
        Swal.close();
    }

    /**
     * Generic alert with custom options
     */
    alert(options: SweetAlertOptions): Promise<SweetAlertResult> {
        return Swal.fire(options);
    }
}

export interface FormDialogOptions {
    title: string;
    html?: string;
    fields?: FormField[];
    width?: string;
    confirmText?: string;
    cancelText?: string;
    confirmButtonText?: string;
    didOpen?: () => void;
    preConfirm?: () => any | Promise<any>;
    customClass?: any;
}

export interface FormField {
    id?: string;
    name?: string;
    label: string;
    type: 'text' | 'email' | 'number' | 'select' | 'textarea';
    placeholder?: string;
    required?: boolean;
    options?: any[];
    optionLabel?: string;
    optionValue?: string;
    value?: any;
}
