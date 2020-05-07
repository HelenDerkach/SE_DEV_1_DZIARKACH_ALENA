import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionChoice } from '../../models/question-choice.model';
import { FormGroup, FormControl, FormBuilder, FormArray, FormGroupDirective, NgForm, Validators, AbstractControl} from '@angular/forms';
import { QuestionService } from '../../services/question-service.service';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

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
  _isEditable: boolean;
  @Output()
  valid = new EventEmitter<boolean>();
  @Output()
  delete = new EventEmitter<number>();

  questionChoices: QuestionChoice[];

	_questionForm: FormGroup;
  optionsArray: FormArray = new FormArray([]);

  constructor(private fb: FormBuilder, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.valid.emit(false);
    if (this._question !== null) {
      this.questionChoices = this.questionService.getOptions(this._question.id);
      this._questionForm = this.fb.group({
        text: [this._question.text, Validators.required],
        type: [this._question.type, Validators.required],
        required: [this._question.required, Validators.required],
        choices: this.addOptionArray()
      });

      if (!this.questionChoices) {
        this.optionsArray.push(this.getOption(new QuestionChoice()));
      }
    } else {
      this._questionForm = this.fb.group({
        text: [this._question.text, Validators.required],
        type: [this._question.type, Validators.required],
        required: [this._question.required, Validators.required],
        choices: this.addOptionArray()
      });
    }
    this._questionForm.get('required').setValue(false);
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

  addOption() {
    this.optionsArray.push(this.getOption(new QuestionChoice()));
  }

  deleteOption(): void {
    // this.optionsArray.split()
  }

  addOptionArray(): FormArray {
    if (this.questionChoices.length !== 0) {
      this.questionChoices.forEach((option) => {
        this.optionsArray.push(this.getOption(option));
      });
    } else {
      this.optionsArray.push(this.getOption(new QuestionChoice()));
    }
    return this.optionsArray;
  }

  getOption(option: QuestionChoice): FormGroup {
    return this.fb.group({
      val: [option.text, [Validators.required]]
    });
  }

  onFormValidation(): void {
    if ((this._questionForm.valid) || (!this._questionForm.controls.choices.valid && this._questionForm.value.type === 'text')) {
      this.valid.emit(true);
      this._question.text = this._questionForm.get('text').value;
      this._question.type = this._questionForm.get('type').value;
      this._question.required = this._questionForm.get('required').value;
    } else {
      this.valid.emit(false);
    }
  }
}
