import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showUserForm = true;
  showCompanyForm =false;

  apiUrl = 'http://127.0.0.1:8000/api/auth/users';

  public form = { email: null, password: null};

  constructor(private httpClient: HttpClient) {}

  submitUserForm() {
    this.httpClient.post(this.apiUrl, this.form).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }
  submitCompanyForm() {

  }


  ngOnInit() {
  }

  showUser() {
    this.showUserForm = true;
    this.showCompanyForm = false;
  }
  showCompany() {
    this.showUserForm = false;
    this.showCompanyForm = true;
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
