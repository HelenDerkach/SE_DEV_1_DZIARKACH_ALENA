import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModuleModule } from './modules/material-module.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { LoginPageComponent } from './pages/login/login-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegistrationPageComponent } from './pages/registration/registration-page.component';
import { NewFormComponent } from './pages/new-form/new-form.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CardComponent } from './components/card/card.component';
import { FormEditorComponent } from './components/form-editor/form-editor.component';
import { FormDetailsComponent } from './components/form-details/form-details.component';
import { QuestionComponent } from './components/question/question.component';
import { FormDetailsPageComponent } from './pages/form-details-page/form-details-page.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { DraftsComponent } from './components/drafts/drafts.component';
import { ThemeComponent } from './components/themes/theme.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SurveyPassingComponent } from './pages/survey-passing/survey-passing.component';
import { SurveyQuestionComponent } from './components/survey-question/survey-question.component';
import { ThemeEditorDialogComponent } from './components/theme-editor-dialog/theme-editor-dialog.component';
import { ThemeSelectionDialogComponent } from './components/theme-selection-dialog/theme-selection-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomepageComponent,
    LoginComponent,
    HomeComponent,
    RegistrationPageComponent,
    RegistrationComponent,
    CardComponent,
    NewFormComponent,
    FormEditorComponent,
    FormDetailsComponent,
    QuestionComponent,
    FormDetailsPageComponent,
    FormDataComponent,
    AdminPageComponent,
    MenuComponent,
    DraftsComponent,
    ThemeComponent,
    ConfirmationDialogComponent,
    LoaderComponent,
    SurveyPassingComponent,
    SurveyQuestionComponent,
    ThemeEditorDialogComponent,
    ThemeSelectionDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ChartsModule,
    AppRoutingModule,
    FontAwesomeModule,
    DragDropModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [
    {provide: ErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
