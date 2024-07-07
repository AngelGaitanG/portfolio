import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../../service/email/email.service';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  @Input() info: any;

  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.messageForm.valid) {
      console.log(this.messageForm.value);
      this.emailService.sendEmail(this.messageForm.value)
    } else {
      this.validateAllFormFields(this.messageForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  validateField(field: string) {
    const control = this.messageForm.get(field);
    if (control) {
      control.markAsTouched({ onlySelf: true });
    }
  }
}
