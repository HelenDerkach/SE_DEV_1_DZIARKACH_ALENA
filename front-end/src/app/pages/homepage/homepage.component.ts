import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Forms } from '../../mock-forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { AuthenticationService } from '../../services/authentication-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  plusIcon = faPlus;
  public currentUser;
  public publishedForms;
  public drafts;

  constructor(private _router: Router,
              private authenticationService: AuthenticationService,
              private toastr: ToastrService) {
    this.currentUser = localStorage.getItem('currentUser') ?
      JSON.parse(localStorage.getItem('currentUser')) :
      this._router.navigate(['/login']);
    this.publishedForms = Forms.filter((form) => (form.userId === this.currentUser.id) && (form.isPublished === true));
    this.drafts = Forms.filter((form) => (form.userId === this.currentUser.id) && (form.isPublished === false));
  }

  ngOnInit(): void {

  }

  createForm() {
    this._router.navigate(['createForm', 'new']);
  }

  showFormDetails(event) {
    this._router.navigate(['form', event]);
  }

  editForm(event) {
    this._router.navigate(['createForm', event]);
  }
}
