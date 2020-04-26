import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardSharedModule } from '../../projects/dashboard/src/app/app.module';
import { SiteSharedModule } from '../../projects/site/src/app/app.module';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const routes: Routes = [
  { path: 'website', loadChildren: '../../projects/site/src/app/app.module#SiteSharedModule' },
  { path: 'dashboard', loadChildren: '../../projects/dashboard/src/app/app.module#DashboardSharedModule' },
  { path: '', redirectTo: 'website' }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    DashboardSharedModule.forRoot(),
    SiteSharedModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
