import {Component, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

	_loginForm:FormGroup;

	// constructor() { }

	ngOnInit(): void {
		this._loginForm = new FormGroup({
			"login": new FormControl('', [Validators.required, Validators.minLength(5)]),
			"password": new FormControl('', [Validators.required, Validators.minLength(5)]),
		});
	}

	onSubmit() {
	  // TODO: Use EventEmitter with form value
	  console.warn(this._loginForm.value);
	}
	// profileForm = new FormGroup({
 //    firstName: new FormControl(''),
 //    lastName: new FormControl(''),
 //  });
}
