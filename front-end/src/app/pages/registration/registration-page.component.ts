import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html'
})
export class RegistrationPageComponent implements OnInit {
  errorMessage: string;

    constructor(private _router: Router,
              private userService: UserService,
              private toastr: ToastrService
              ) {}

  onSubmit(event) {
    this.userService.registration(event).subscribe(
      data => {
        this._router.navigate(['/home']);
        },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  ngOnInit(): void {
  }

}
