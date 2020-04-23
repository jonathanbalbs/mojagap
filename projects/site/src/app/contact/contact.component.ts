import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
    message: new FormControl('', Validators.required)
  });

  getName() {
    return this.contactFormGroup.get('name')
  }
  getEmail() {
    return this.contactFormGroup.get('email')
  }
  getMessage() {
    return this.contactFormGroup.get('message')
  }

}
