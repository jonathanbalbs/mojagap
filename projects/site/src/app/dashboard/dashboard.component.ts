import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../assets/dashboard.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
