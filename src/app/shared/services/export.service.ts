import { Injectable } from '@angular/core';

/**
 * Reusable Export Service
 * Handles data export to Excel, PDF, and CSV formats
 */
@Injectable({
    providedIn: 'root'
})
export class ExportService {
    /**
     * Export data to CSV
     */
    exportToCsv(data: any[], filename: string, columns: ExportColumn[]): void {
        if (!data || data.length === 0) {
            console.warn('No data to export');
            return;
        }

        // Create CSV header
        const header = columns.map((col) => col.header).join(',');

        // Create CSV rows
        const rows = data.map((item) => {
            return columns
                .map((col) => {
                    const value = this.getNestedValue(item, col.field);
                    const formattedValue = col.format ? col.format(value, item) : value;
                    return this.escapeCsvValue(formattedValue);
                })
                .join(',');
        });

        // Combine header and rows
        const csv = [header, ...rows].join('\n');

        // Create blob and download
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        this.downloadBlob(blob, `${filename}.csv`);
    }

    /**
     * Export data to Excel (using CSV format)
     */
    exportToExcel(data: any[], filename: string, columns: ExportColumn[]): void {
        this.exportToCsv(data, filename, columns);
    }

    /**
     * Generate print HTML for data table
     */
    generatePrintHtml(data: any[], columns: ExportColumn[], title: string, headerLogoUrl?: string, footerLogoUrl?: string): string {
        const headerRows = data
            .map((item) => {
                const cells = columns
                    .map((col) => {
                        const value = this.getNestedValue(item, col.field);
                        const formattedValue = col.format ? col.format(value, item) : value;
                        return `<td>${this.escapeHtml(formattedValue)}</td>`;
                    })
                    .join('');
                return `<tr>${cells}</tr>`;
            })
            .join('');

        const headerCells = columns.map((col) => `<th>${col.header}</th>`).join('');

        return `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${title}</title>
                <style>
                    @media print {
                        body { margin: 0; }
                        @page { margin: 20mm; }
                    }
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                    }
                    .print-header {
                        text-align: center;
                        margin-bottom: 30px;
                    }
                    .print-header img {
                        max-height: 80px;
                        margin-bottom: 10px;
                    }
                    h1 {
                        margin: 10px 0;
                        font-size: 24px;
                        color: #333;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 12px;
                        text-align: left;
                    }
                    th {
                        background-color: #667eea;
                        color: white;
                        font-weight: 600;
                    }
                    tr:nth-child(even) {
                        background-color: #f9f9f9;
                    }
                    .total {
                        margin-top: 20px;
                        font-weight: bold;
                        text-align: right;
                    }
                    .print-footer-img {
                        text-align: center;
                        margin-top: 40px;
                    }
                    .print-footer-img img {
                        width: 100%;
                        max-height: 80px;
                        object-fit: contain;
                    }
                </style>
            </head>
            <body>
                ${headerLogoUrl ? `<div class="print-header"><img src="${headerLogoUrl}" /></div>` : ''}
                <h1>${title}</h1>
                <table>
                    <thead>
                        <tr>${headerCells}</tr>
                    </thead>
                    <tbody>
                        ${headerRows}
                    </tbody>
                </table>
                <div class="total">Total Records: ${data.length}</div>
                ${footerLogoUrl ? `<div class="print-footer-img"><img src="${footerLogoUrl}" /></div>` : ''}
            </body>
            </html>
        `;
    }

    /**
     * Print data table
     */
    print(data: any[], columns: ExportColumn[], title: string, headerLogoUrl?: string, footerLogoUrl?: string): void {
        const printHtml = this.generatePrintHtml(data, columns, title, headerLogoUrl, footerLogoUrl);
        const printWindow = window.open('', '_blank');

        if (printWindow) {
            printWindow.document.write(printHtml);
            printWindow.document.close();
            printWindow.onload = () => {
                printWindow.print();
            };
        }
    }

    // Helper methods

    private getNestedValue(obj: any, path: string): any {
        return path.split('.').reduce((current, prop) => current?.[prop], obj);
    }

    private escapeCsvValue(value: any): string {
        if (value === null || value === undefined) {
            return '';
        }
        const stringValue = String(value);
        if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
            return `"${stringValue.replace(/"/g, '""')}"`;
        }
        return stringValue;
    }

    private escapeHtml(value: any): string {
        if (value === null || value === undefined) {
            return '';
        }
        const stringValue = String(value);
        const div = document.createElement('div');
        div.textContent = stringValue;
        return div.innerHTML;
    }

    private downloadBlob(blob: Blob, filename: string): void {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
    }
}

export interface ExportColumn {
    field: string;
    header: string;
    format?: (value: any, row: any) => string;
}
