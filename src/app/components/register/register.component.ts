import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

function characterValidator(control) {
  if (control.hasError('required')) return null;
  if (control.hasError('minlength')) return null;
  if (control.value.indexOf('@') > -1) {
    return null;
  } else {
    return { symbol: true };
  }
}

function passwordMatchValidator(form) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMatch: true });
  } else {
    confirmPassword.setErrors(null);
  }
  return null;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.builder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [Validators.required, characterValidator, Validators.minLength(6)],
        ],
        confirmPassword: '',
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }
  register() {
    console.log(this.registerForm.value);
  }
}
