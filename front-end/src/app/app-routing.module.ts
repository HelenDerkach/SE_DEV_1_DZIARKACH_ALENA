import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from "./pages/login/login-page.component";
import { RegistrationPageComponent } from "./pages/registration/registration-page.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { NewFormComponent } from "./pages/new-form/new-form.component";
import { FormDetailsComponent } from './components/form-details/form-details.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'createForm', component: NewFormComponent },
  { path: 'form/:id', component: FormDetailsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }