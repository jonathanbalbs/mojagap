import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClientModule }    from '@angular/common/http';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ActionCallComponent } from './action-call/action-call.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MasterheadComponent } from './masterhead/masterhead.component';
import { Page404Component } from './page404/page404.component';
import { ProductsComponent } from './products/products.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './dashboard/account/account.component';
import { CardsComponent } from './dashboard/cards/cards.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { TransactComponent } from './dashboard/transact/transact.component';
import { TransationsComponent } from './dashboard/transations/transations.component';
import { WrapperComponent } from './dashboard/wrapper/wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { EmployeesComponent } from './dashboard/employees/employees.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'settings', component: SettingsComponent, outlet: 'dashboard-outlet' },
  { path: 'cards', component: CardsComponent, outlet: 'dashboard-outlet' },
  { path: 'account', component: AccountComponent, outlet: 'dashboard-outlet' },
  { path: 'dashboard-home', component: DashboardHomeComponent, outlet: 'dashboard-outlet' },
  { path: '**', component: Page404Component }
];

const oktaConfig = {
  issuer: 'https://dev-406179.okta.com',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa24rrsy0EPl7jSW4x6'
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ActionCallComponent,
    ContactComponent,
    FooterComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MasterheadComponent,
    Page404Component,
    ProductsComponent,
    TutorialsComponent,
    WhyUsComponent,
    RegisterComponent,
    AccountComponent,
    CardsComponent,
    SettingsComponent,
    SidebarComponent,
    TransactComponent,
    TransationsComponent,
    WrapperComponent,
    DashboardComponent,
    DashboardHomeComponent,
    EmployeesComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
