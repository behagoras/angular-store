import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    // FormControl('Default value', validators[], asyncValidators[]);
    // FormControl(formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]): FormControl

    this.emailField =  new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(4),
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ]);
    this.emailField.valueChanges
      .subscribe( value => {
      });
  }


  ngOnInit(): void {
  }

  sendEmail(){
    if(this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
