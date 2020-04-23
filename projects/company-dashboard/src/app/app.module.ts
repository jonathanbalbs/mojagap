import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TransactComponent } from './transact/transact.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MyEmployeesComponent } from './my-employees/my-employees.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transact', component: TransactComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'account', component: AccountComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CardsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    EmployeesComponent,
    SettingsComponent,
    SidebarComponent,
    TransactComponent,
    TransactionsComponent,
    WrapperComponent,
    MyEmployeesComponent
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
