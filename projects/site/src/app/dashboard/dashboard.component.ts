import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../assets/dashboard.css']
})
export class DashboardComponent implements OnInit {
  //manage navigation and breadcrumps
  activatedSidebarLink: string = 'Dashboard';
  getLink(link: string) {
    this.activatedSidebarLink = link;
  }

  //determine account type and retrieve email
  accountEmail: string;


  constructor() { }

  ngOnInit() {
  }



}
