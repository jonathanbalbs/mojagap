import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', '../../../assets/dashboard.css']
})
export class SidebarComponent implements OnInit {

  //hide company-links
  companyDashboard: boolean = false;

  //manage links and bradcrumps to appear in dashboard component
  @Output() activatedLink = new EventEmitter<string>();
  breadcrump: string = 'Dashboard';

  dHome() {
    this.breadcrump = 'Dashboard';
    this.activatedLink.emit(this.breadcrump)
  }
  dCards() {
    this.breadcrump = 'Cards';
    this.activatedLink.emit(this.breadcrump)
  }
  dEmployees() {
    this.breadcrump = 'Employees';
    this.activatedLink.emit(this.breadcrump)
  }
  dAccount() {
    this.breadcrump = 'Account';
    this.activatedLink.emit(this.breadcrump)
  }
  dSettings() {
    this.breadcrump = 'Settings';
    this.activatedLink.emit(this.breadcrump)
  }

  constructor() { }

  ngOnInit() {
  }

}
