import { Component, inject } from '@angular/core';
import { DestroyRef } from '@angular/core';
import { Signal } from '@angular/core';
import { Fingerprint, LucideAngularModule } from 'lucide-angular';
import { Facebook, Github, Linkedin, LoaderCircle } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface IForgotPasswordForm {
  email: FormControl<string>;
}

@Component({
  selector: 'workroom-forgot-password',
  imports: [
    LucideAngularModule,
    RouterLink,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './forgot-password.component.html',
  styles: ``
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup<IForgotPasswordForm> = inject(NonNullableFormBuilder).group<IForgotPasswordForm>({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] })
  });
  protected readonly Fingerprint = Fingerprint;
  protected readonly LoaderCircle = LoaderCircle;
  protected readonly Facebook = Facebook;
  protected readonly Linkedin = Linkedin;
  protected readonly Github = Github;
  private authService: AuthService = inject(AuthService);
  loading: Signal<boolean> = this.authService.loading;
  private destroyRef: DestroyRef = inject(DestroyRef);

  get f(): IForgotPasswordForm {
    return this.forgotPasswordForm.controls;
  }

  onSubmitForm(): void {
    this.forgotPasswordForm.markAllAsTouched();
    if (this.forgotPasswordForm.valid) {
      this.forgotPasswordForm.disable();
      const { email } = this.forgotPasswordForm.getRawValue();
      this.authService.sendResetPasswordInstructions(email)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(_value => {
          this.forgotPasswordForm.enable();
        });
    }
  }
}
