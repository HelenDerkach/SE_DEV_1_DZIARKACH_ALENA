import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from "./pages/login/login-page.component";
import { RegistrationPageComponent } from "./pages/registration/registration-page.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { NewFormComponent } from "./pages/new-form/new-form.component";
import { FormDetailsPageComponent } from './pages/form-details-page/form-details-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'createForm', component: NewFormComponent },
  { path: 'form/:id', component: FormDetailsPageComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }