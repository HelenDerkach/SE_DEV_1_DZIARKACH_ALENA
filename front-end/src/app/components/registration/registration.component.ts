import { Component, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input()
  errorMessage: string;

	_registrationForm: FormGroup;
	loading = false;
	submitted = false;

	@Output()
  	registration: EventEmitter<{
  		firstName: string,
  		lastName: string,
  		phone: string,
  		email: string,
  		password: string
  	}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this._registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this._registrationForm.invalid) {
      return;
    }
    this.loading = true;
      this.registration.next(this._registrationForm.value);
  }
}
