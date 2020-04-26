import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //form display controller code
  showUserForm = true;
  showCompanyForm =false;

  showUser() {
    this.showUserForm = true;
    this.showCompanyForm = false;
  }
  showCompany() {
    this.showUserForm = false;
    this.showCompanyForm = true;
  }

//checbox / terms agreemnt verifcation
  userTermsChecked = false;
  companyTermsChecked = false;

  userChecked (event) {
    if (event.target.checked) {
      this.userTermsChecked = true
    }
  }
  companyChecked (event) {
    this.companyTermsChecked = true
  }

  //submit buttons control code
  public userForm = { email: '', password: '', stayActive: false };
  public companyForm = { email: '', password: '', stayActive: false };
  emailError = '';
  passwordError = '';
  userFormErrors = false;

  showDefault() {
    this.userFormErrors = false;
  }

  validateUserForm() {
    if (this.userForm.email === ''){
      this.emailError = 'You must provide an email to continue'
    }
    if (this.userForm.password === '') {
      this.passwordError = 'You must provide a password to continue'
    }
    if (this.userForm.email === '' || this.userForm.password === '') {
      this.userFormErrors =true;
    }

  }
  valiateCompanyForm() {
  }




  constructor() {}

  ngOnInit() {
  }


  loginFormGroup = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
    password: new FormControl('', Validators.required)
  });
  get getEmail() {
    return this.loginFormGroup.get('email')
  }
  get getPassword() {
    return this.loginFormGroup.get('password')
  }

  loginFormGroup2 = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])),
    password: new FormControl('', Validators.required)
  });
  get getEmail2() {
    return this.loginFormGroup2.get('email')
  }
  get getPassword2() {
    return this.loginFormGroup2.get('password')
  }

}
