import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoUsuario } from 'src/app/interfaces/NUsuario';
import { SignupService } from 'src/app/services/signup.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from 'src/app/shared/validators/user-not-taken.validator.service';

@Component({
  selector: 'bwc-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const fn = this.userNotTakenValidatorService.checkUserNameTaken();
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
        this.userNotTakenValidatorService.checkUserNameTaken(),
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ],
      ],
    });
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NovoUsuario;
    this.signUpService.signup(newUser).subscribe(
      () => this.router.navigate(['login']),
      (err) => console.log(err)
    );
  }
}
