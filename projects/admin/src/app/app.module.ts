import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { CompaniesComponent } from './companies/companies.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    CardsComponent,
    CompaniesComponent,
    NotificationsComponent,
    SettingsComponent,
    TransactionsComponent,
    UsersComponent,
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
