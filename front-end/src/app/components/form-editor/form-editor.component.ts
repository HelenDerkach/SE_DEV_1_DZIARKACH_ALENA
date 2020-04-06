import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Form } from '../../models/form.model';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {

	newForm: Form;
	_formData: FormGroup;
	_questionForms: FormGroup[];

  constructor() { 
  	this.newForm = new Form();
  	this._formData = new FormGroup({
  		"formName": new FormControl('', [Validators.required, Validators.minLength(2)]),
  		"description": new FormControl('', [Validators.minLength(2)]),
  		"questions": new FormControl('', [Validators.required, Validators.minLength(7)]),
	});
  }

  ngOnInit(): void {
  }

}
