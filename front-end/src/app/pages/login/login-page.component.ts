import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../services/user-service.service';

@Component({
  selector: "login-page",
  templateUrl: "./login-page.component.html"
})
export class LoginPageComponent {
  errorMessage: string;

  constructor(private _router: Router,
              private userService: UserService,
              private toastr: ToastrService
              ) {}

  onSubmit(event) {
    this.userService.login(event).subscribe(
      data => {
          if (data.role === 2) {
            this._router.navigate(['/admin']);
          } else {
            this._router.navigate(['/home']);
          }
        },
      error => {
        this.errorMessage = error.error.message;
      });
  }
}
