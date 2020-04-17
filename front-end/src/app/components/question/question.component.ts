import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question.model';
import { FormGroup, FormControl, FormBuilder, FormArray, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit  {
	@Input()
	_question: Question;
  @Input()
  _isEditable: boolean;

	_questionForm: FormGroup;
  _choices: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this._questionForm = this.fb.group({
      text: ['', Validators.required],
      type: ['', Validators.required],
      choices: this.fb.array([
        this.fb.control('')
      ], {validators: Validators.required, updateOn: 'blur'})
    });

    if(!this._isEditable){
      this._questionForm = this.fb.group({
        text: [this._question.text, Validators.required],
        type: [this._question.type, Validators.required],
        choices: this.fb.array([
          this.fb.control('')
        ], {validators: Validators.required, updateOn: 'blur'})
      });
      this._choices = this._questionForm.get('choices') as FormArray;
      this._choices.clear();

      for (var i = 0; i < this._question.options.length; ++i) {
        this._choices.insert(i, new FormControl());
      }

      this._choices.setValue(this._question.options);
    }

    this.onChanges();
  }

  onChanges(): void {
    this._questionForm.statusChanges.subscribe(val => {
      if(this._questionForm.valid){
        this._question.text = this._questionForm.get('text').value;
        this._question.type = this._questionForm.get('type').value;
        this._question.options = this.choices.value;
      }
    });
  }

  get choices() {
    return this._questionForm.get('choices') as FormArray;
  }

  addOption() {
    this.choices.push(this.fb.control(''));
  }

}
