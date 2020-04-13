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
  public forms;

  constructor(private _router: Router,
              private authenticationService : AuthenticationService,
              private toastr: ToastrService) { 
  	this.currentUser = localStorage.getItem('currentUser')? 
      JSON.parse(localStorage.getItem('currentUser')) : 
      this._router.navigate(['/login']);
    this.forms = Forms.filter((form)=>form.userId == this.currentUser.id);
  }

  ngOnInit(): void {

  }

  createForm() {
    this._router.navigate(['/createForm']);
  }

  showFormDetails(event){
    this._router.navigate(['form', event]);
  }

}
