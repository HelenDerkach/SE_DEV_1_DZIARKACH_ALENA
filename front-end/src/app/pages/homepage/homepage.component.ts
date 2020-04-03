import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../services/authentication-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

	public currentUser;

  constructor(private _router: Router,
              private authenticationService : AuthenticationService,
              private toastr: ToastrService) { 
  	this.currentUser = localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')) : '';
  }

  ngOnInit(): void {
  }

  onSubmit(event) {
    this.authenticationService.login(event.email, event.password).subscribe(
      data => {
        this._router.navigate(['/home']);
        },
      error => {
        this.toastr.error(error.error.message, 'Error');
      });
  }

}
