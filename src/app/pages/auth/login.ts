import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { MessageModule } from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import { takeUntil, finalize } from 'rxjs/operators';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { AuthService } from '../service/auth.service';
import { BaseComponent } from '../../core/base/base.component';
import { LoadingState, isLoading } from '../../core/models/loading-state.enum';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, HttpClientModule, AppFloatingConfigurator],
    template: `
        <app-floating-configurator />
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <img src="assets/icons/icon-48x48.png" alt="logo" class="mb-8 mx-auto" />
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Welcome to Lams!</div>
                            <span class="text-muted-color font-medium">Sign in to continue</span>
                        </div>

                        <div>
                            <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Email</label>
                            <input pInputText id="email1" type="text" placeholder="Email address" class="w-full md:w-120 mb-8" [(ngModel)]="email" />

                            <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Password</label>
                            <p-password id="password1" [(ngModel)]="password" placeholder="Password" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false"></p-password>

                            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                                <div class="flex items-center">
                                    <p-checkbox [(ngModel)]="checked" id="rememberme1" binary class="mr-2"></p-checkbox>
                                    <label for="rememberme1">Remember me</label>
                                </div>
                                <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Forgot password?</span>
                            </div>

                            <p-button label="Sign In" styleClass="w-full" [loading]="isLoadingState" [disabled]="isLoadingState" (onClick)="onLogin()"> </p-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Login extends BaseComponent {
    email: string = '';
    password: string = '';
    checked: boolean = false;
    loadingState: LoadingState = LoadingState.IDLE;

    constructor(
        private authService: AuthService,
        private router: Router,
        private errorHandler: ErrorHandlerService
    ) {
        super();
    }

    // Getter for template
    get isLoadingState(): boolean {
        return isLoading(this.loadingState);
    }

    onLogin(): void {
        // Input validation
        if (!this.email || !this.password) {
            this.errorHandler.showWarning('Please enter both email and password', 'Missing Information');
            return;
        }

        // Prevent duplicate login attempts
        if (this.isLoadingState) {
            return;
        }

        this.loadingState = LoadingState.LOADING;

        this.authService
            .login(this.email, this.password)
            .pipe(
                takeUntil(this.destroy$),
                finalize(() => {
                    // Always reset to idle state when done
                    if (this.loadingState === LoadingState.LOADING) {
                        this.loadingState = LoadingState.IDLE;
                    }
                })
            )
            .subscribe({
                next: (response) => {
                    if (response.success) {
                        const userName = response.user?.firstName || response.user?.lastName || 'User';
                        this.loadingState = LoadingState.SUCCESS;

                        Swal.fire({
                            icon: 'success',
                            title: 'Login Successful!',
                            text: `Welcome back, ${userName}!`,
                            timer: 2000,
                            showConfirmButton: false,
                            confirmButtonColor: '#10B981'
                        }).then(() => {
                            this.router.navigate(['/app']);
                        });
                    } else {
                        this.loadingState = LoadingState.ERROR;
                        this.errorHandler.showWarning(response.message || 'Invalid email or password', 'Login Failed');
                    }
                },
                error: (error) => {
                    this.loadingState = LoadingState.ERROR;
                    this.errorHandler.handleError(error, 'Login attempt', 'Unable to connect to the server. Please check your connection and try again.');
                }
            });
    }
}
