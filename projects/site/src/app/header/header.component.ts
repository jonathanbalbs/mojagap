import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //hide/show header
  isWebsite: boolean = true;


  constructor() { }

  ngOnInit() {
  }



}
