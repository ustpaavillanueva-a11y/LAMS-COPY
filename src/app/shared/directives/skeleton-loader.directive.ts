import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

/**
 * Directive to add skeleton loading animation to elements.
 * This creates a better UX by showing placeholders while content loads.
 *
 * Usage:
 * ```html
 * <div appSkeletonLoader [isLoading]="loading" [rows]="3">
 *   <!-- Content will be shown when loading is false -->
 * </div>
 * ```
 */
@Directive({
    selector: '[appSkeletonLoader]',
    standalone: true
})
export class SkeletonLoaderDirective implements OnInit {
    /** Whether to show the skeleton loader */
    @Input() isLoading = false;

    /** Number of skeleton rows to show (for tables/lists) */
    @Input() rows = 3;

    /** Height of each skeleton row */
    @Input() height = '2rem';

    /** Type of skeleton (line, circle, rectangle) */
    @Input() skeletonType: 'line' | 'circle' | 'rectangle' = 'line';

    private skeletonContainer: HTMLElement | null = null;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    ngOnInit(): void {
        this.updateSkeleton();
    }

    ngOnChanges(): void {
        this.updateSkeleton();
    }

    private updateSkeleton(): void {
        if (this.isLoading) {
            this.showSkeleton();
        } else {
            this.hideSkeleton();
        }
    }

    private showSkeleton(): void {
        // Hide actual content
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');

        // Create skeleton if it doesn't exist
        if (!this.skeletonContainer) {
            this.createSkeleton();
        }
    }

    private hideSkeleton(): void {
        // Show actual content
        this.renderer.removeStyle(this.el.nativeElement, 'display');

        // Remove skeleton
        if (this.skeletonContainer) {
            this.renderer.removeChild(this.el.nativeElement.parentNode, this.skeletonContainer);
            this.skeletonContainer = null;
        }
    }

    private createSkeleton(): void {
        const parent = this.el.nativeElement.parentNode;
        this.skeletonContainer = this.renderer.createElement('div');
        this.renderer.addClass(this.skeletonContainer, 'skeleton-container');

        // Add styles for skeleton animation
        const styles = {
            width: '100%',
            animation: 'skeleton-loading 1.5s infinite ease-in-out'
        };

        Object.entries(styles).forEach(([key, value]) => {
            this.renderer.setStyle(this.skeletonContainer, key, value);
        });

        // Create skeleton rows
        for (let i = 0; i < this.rows; i++) {
            const skeletonRow = this.createSkeletonRow();
            this.renderer.appendChild(this.skeletonContainer, skeletonRow);
        }

        // Insert skeleton before the actual content
        this.renderer.insertBefore(parent, this.skeletonContainer, this.el.nativeElement);

        // Add animation keyframes if not already present
        this.addSkeletonStyles();
    }

    private createSkeletonRow(): HTMLElement {
        const row = this.renderer.createElement('div');
        this.renderer.addClass(row, 'skeleton-row');

        const styles: { [key: string]: string } = {
            height: this.height,
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            'background-size': '200% 100%',
            animation: 'skeleton-shimmer 1.5s infinite',
            'margin-bottom': '0.5rem',
            'border-radius': '0.375rem'
        };

        if (this.skeletonType === 'circle') {
            styles['border-radius'] = '50%';
            styles['width'] = this.height;
        } else if (this.skeletonType === 'rectangle') {
            styles['border-radius'] = '0.25rem';
        }

        Object.entries(styles).forEach(([key, value]) => {
            this.renderer.setStyle(row, key, value);
        });

        return row;
    }

    private addSkeletonStyles(): void {
        // Check if styles already exist
        if (document.getElementById('skeleton-loader-styles')) {
            return;
        }

        const styleElement = this.renderer.createElement('style');
        styleElement.id = 'skeleton-loader-styles';
        styleElement.textContent = `
            @keyframes skeleton-shimmer {
                0% {
                    background-position: 200% 0;
                }
                100% {
                    background-position: -200% 0;
                }
            }

            .dark .skeleton-row {
                background: linear-gradient(90deg, #2d3748 25%, #1a202c 50%, #2d3748 75%) !important;
            }
        `;

        this.renderer.appendChild(document.head, styleElement);
    }
}
