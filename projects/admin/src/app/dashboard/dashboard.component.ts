import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dailySales: boolean = true;
  weeklySales: boolean = false;
  monthlySales: boolean = false;

  dailyTransactions = true;
  weeklyTransactions = false;
  monthlyTransactions = false;

  dailySubscribers = true;
  weeklySubscribers = false;
  monthlySubscribers = false;

  showDailySubscribers() {
    this.dailySubscribers = true;
    this.weeklySubscribers = false;
    this.monthlySubscribers = false;
  }

  showWeeklySubscribers() {
    this.dailySubscribers = false;
    this.weeklySubscribers = true;
    this.monthlySubscribers = false;
  }

  showMonthlySubscribers() {
    this.dailySubscribers = false;
    this.weeklySubscribers = false;
    this.monthlySubscribers = true;
  }

  showDailyTransactions() {
    this.dailyTransactions = true;
    this.weeklyTransactions = false;
    this.monthlyTransactions = false;
  }

  showWeeklyTransactions() {
    this.dailyTransactions = false;
    this.weeklyTransactions = true;
    this.monthlyTransactions =false;
  }

  showMonthlyTransactions() {
    this.dailyTransactions = false;
    this.weeklyTransactions = false;
    this.monthlyTransactions = true;
  }

  showDailySales() {
    this.dailySales = true;
    this.weeklySales = false;
    this.monthlySales = false;
  }

  showWeeklySales() {
    this.monthlySales = false;
    this.dailySales = false;
    this.weeklySales = true;
  }

  showMonthlySales() {
    this.monthlySales = true;
    this.dailySales = false;
    this.weeklySales = false;
  }

  constructor() { }

  ngOnInit() {
  }
}
