import { Component, DestroyRef, inject, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILoginForm } from '../../interfaces/login-form.interface';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Eye, EyeOff, LoaderCircle, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'workroom-login',
  imports: [RouterLink, ReactiveFormsModule, NgOptimizedImage, NgClass, LucideAngularModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  loginForm: FormGroup<ILoginForm> = inject(NonNullableFormBuilder).group<ILoginForm>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rememberMe: new FormControl(false, { nonNullable: true })
  });
  type: WritableSignal<'text' | 'password'> = signal<'text' | 'password'>('password');
  protected readonly LoaderCircle = LoaderCircle;
  protected readonly Eye = Eye;
  protected readonly EyeOff = EyeOff;
  #authService: AuthService = inject(AuthService);
  loading: Signal<boolean> = this.#authService.loading;
  #destroyRef: DestroyRef = inject(DestroyRef);

  get f(): ILoginForm {
    return this.loginForm.controls;
  }

  togglePasswordVisibility(): void {
    this.type.set(this.type() === 'password' ? 'text' : 'password');
  }

  onSubmitForm(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.getRawValue();
      this.#authService.login({ email, password }).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
    }
  }
}
