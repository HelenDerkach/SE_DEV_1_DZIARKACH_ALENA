import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../services/authentication-service.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html'
})
export class RegistrationPageComponent implements OnInit {

    constructor(private _router: Router,
              private authenticationService : AuthenticationService,
              private toastr: ToastrService
              ) {}

  onSubmit(event) {
  	event.id = 1;
    this.authenticationService.login(event).subscribe(
      data => {
        this._router.navigate(['/home']);
        },
      error => {
        this.toastr.error(error.error.message, 'Error');
      });
  }

  ngOnInit(): void {
  }

}
