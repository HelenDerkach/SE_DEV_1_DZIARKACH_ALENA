import { Component, OnInit, Host, Input, Output } from '@angular/core';
import { HomepageComponent } from '../../pages/homepage/homepage.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	@Input() 
	_user: User;

  constructor() { 
  	//this._user = parent.currentUser;
  }

  ngOnInit(): void {
  }

}
