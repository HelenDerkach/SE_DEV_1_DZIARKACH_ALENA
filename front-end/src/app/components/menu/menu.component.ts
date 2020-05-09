import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	cogIcon = faCog;
	logOutIcon = faSignOutAlt;

  constructor(private _router: Router,
              private authenticationService : UserService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.authenticationService.logout();
    this._router.navigate(['/login']);
  }

}
