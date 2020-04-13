import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginPageComponent } from './pages/login/login-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegistrationPageComponent } from './pages/registration/registration-page.component';
import { NewFormComponent } from './pages/new-form/new-form.component';

import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormComponent } from './components/form/form.component';
import { FormEditorComponent } from './components/form-editor/form-editor.component';
import { FormDetailsComponent } from './components/form-details/form-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomepageComponent,
    LoginComponent,
    HomeComponent,
    RegistrationPageComponent,
    RegistrationComponent,
    FormComponent,
    NewFormComponent,
    FormEditorComponent,
    FormDetailsComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    {provide: ErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
