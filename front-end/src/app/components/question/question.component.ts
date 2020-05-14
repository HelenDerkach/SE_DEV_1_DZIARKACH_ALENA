import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionChoice } from '../../models/question-choice.model';
import { FormGroup, FormControl, FormBuilder, FormArray, FormGroupDirective, NgForm, Validators, AbstractControl} from '@angular/forms';
import { QuestionService } from '../../services/question-service.service';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import {QuestionType} from '../../models/question-type.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit  {
  closeIcon = faTimes;
  @Input()
	_question: Question;
  @Input()
  questionTypes: QuestionType[];
  @Input()
  _isEditable: boolean;
  @Input()
  _isThemed: boolean;
  @Input()
  _isThemeFirst: boolean;

  @Output()
  valid = new EventEmitter<boolean>();
  @Output()
  delete = new EventEmitter<number>();

	_questionForm: FormGroup;
  optionsArray: FormArray = new FormArray([]);

  constructor(private fb: FormBuilder, private questionService: QuestionService) { }

  ngOnInit(): void {
    if (!this._question?.questionChoices) {
      this._question.questionChoices = [];
    }
    this.valid.emit(false);
    this._questionForm = new FormGroup({
      text: new FormControl(this._question?.text ? this._question.text : '', [Validators.required, Validators.minLength(5)]),
      type: new FormControl(this._question?.type ? this._question.type.id : '', [Validators.required]),
      required: new FormControl(this._question?.is_required ? this._question.is_required : false, [Validators.required]),
      choices: this.addOptionArray()
    });
    this.onChanges();
    this.onFormValidation();
  }

  onChanges(): void {
    this._questionForm.statusChanges.subscribe(val => {
      this.onFormValidation();
    });
  }

  deleteQuestion(): void {
    this.delete.emit(this._question.position);
  }

  deleteTheme(): void {
    // this.delete.emit(this._question.position);
  }

  addOption() {
    this.optionsArray.push(this.getOption(new QuestionChoice('')));
  }

  deleteOption(i: number): void {
    if (i !== -1) {
      this.optionsArray.removeAt(i);
    }
  }

  addOptionArray(): FormArray {
    if (this._question?.questionChoices) {
      this._question.questionChoices.forEach((option) => {
        this.optionsArray.push(this.getOption(option));
      });
    } else {
      this.optionsArray.push(this.getOption(new QuestionChoice('')));
    }
    return this.optionsArray;
  }

  getOption(option: QuestionChoice): FormGroup {
    return this.fb.group({
      val: [option.text, [Validators.required]]
    }, { updateOn: 'blur' });
  }

  onFormValidation(): void {
    if ((this._questionForm.valid) || (!this._questionForm.controls.choices.valid && this._questionForm.value.type === 'text')) {
      this.valid.emit(true);
      this._question.text = this._questionForm.get('text').value;
      this._question.type = this.questionTypes.find((type) => type.id == this._questionForm.get('type').value);
      this._question.is_required = this._questionForm.get('required').value;

      this.optionsArray.value.forEach((value) => {
        this._question.questionChoices.push(new QuestionChoice(value.val));
      });
    } else {
      this.valid.emit(false);
    }
  }
}
