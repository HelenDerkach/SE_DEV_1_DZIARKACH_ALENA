import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from '../../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
	loginForm: FormGroup;
	loading = false;
	submitted = false;
	returnUrl: string;

	@Output()
  	login: EventEmitter<{email: string, password: string}> = new EventEmitter();

	constructor(private formBuilder: FormBuilder,
				         private route: ActivatedRoute,
				         private router: Router,
				         private authenticationService: AuthenticationService,
				         private toastr: ToastrService) { }

	ngOnInit(): void {
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
			password: new FormControl('', [Validators.required, Validators.minLength(5)]),
		});
	}

	onSubmit() {
    // tslint:disable-next-line:indent
		this.submitted = true;
		if (this.loginForm.invalid) {
		return;
		}

		this.loading = true;
	 this.login.next(this.loginForm.value);
	}

	get fval() { return this.loginForm.controls; }

	// this.authenticationService.login(this.fval.email.value, this.fval.password.value).subscribe(
	// 	data => {
	// 		this.router.navigate(['/']);
	// 		},
	// 	error => {
	// 		this.toastr.error(error.error.message, 'Error');
	// 		this.loading = false;
	// 	});
	// }
}
