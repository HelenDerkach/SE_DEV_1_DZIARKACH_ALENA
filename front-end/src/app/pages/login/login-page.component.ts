import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../services/authentication-service.service';

@Component({
  selector: "login-page",
  templateUrl: "./login-page.component.html"
})
export class LoginPageComponent {

  constructor(private _router: Router,
              private authenticationService : AuthenticationService,
              private toastr: ToastrService
              ) {}

  onSubmit(event) {
    this.authenticationService.login(event).subscribe(
      data => {
        if(data.role === 2){
          this._router.navigate(['/admin']);
        }
        else{
          this._router.navigate(['/home']);
        }
        
        },
      error => {
        this.toastr.error(error.error.message, 'Error');
      });
  }
}
