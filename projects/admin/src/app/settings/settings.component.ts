import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  showDataCard = true;
  showEditCard = false;

  showData() {
    this.showDataCard = true;
    this.showEditCard = false;
  }

  showEdit() {
    this.showDataCard = false;
    this.showEditCard = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
