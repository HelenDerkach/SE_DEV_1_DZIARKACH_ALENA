import {Component, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

	_loginForm:FormGroup;
	
	@Output()
  	login: EventEmitter<{nickname: string, password: string}> = new EventEmitter();
 
	// constructor() { }

	ngOnInit(): void {
		this._loginForm = new FormGroup({
			"login": new FormControl('', [Validators.required, Validators.minLength(5)]),
			"password": new FormControl('', [Validators.required, Validators.minLength(5)]),
		});
	}

	onSubmit() {
	  this.login.next(this._loginForm.value);
	}
}
