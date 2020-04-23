import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Forms } from '../../mock-forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
	public currentUser;
	public forms;
	public users;

  constructor(private _router: Router,
              private toastr: ToastrService) { 
  	this.currentUser = localStorage.getItem('currentUser')? 
      JSON.parse(localStorage.getItem('currentUser')) : 
      this._router.navigate(['/login']);
    this.forms = Forms;
  }

  ngOnInit(): void {
  }

  showFormDetails(event){
    this._router.navigate(['form', event]);
  }

}
