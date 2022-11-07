import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { VmessageComponent } from './shared/components/vmessage/vmessage.component';
import { HeaderComponent } from './core/header/header.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { BolaoComponent } from './pages/bolao/bolao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    VmessageComponent,
    HeaderComponent,
    SignupComponent,
    BolaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
