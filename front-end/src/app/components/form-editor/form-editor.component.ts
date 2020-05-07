import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Form } from '../../models/form.model';
import { Theme } from '../../models/theme.model';
import { Question } from '../../models/question.model';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from '../../services/question-service.service';
import { Forms } from '../../mock-forms';
import { ActivatedRoute, Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {
  plusIcon = faPlus;
  arrowIcon = faArrowLeft;
// TODO change theme model, add lists and drag n drop
  newForm: Form;
  questions: Question[];
  questionsValid: boolean;
  themes: Theme[];
  themeQuestions: Question[];
  _formData: FormGroup;

  constructor(private activateRoute: ActivatedRoute, private toastr: ToastrService, private questionService: QuestionService,
              private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.questions = new Array();
    this.themes = new Array();
    this.questionsValid = false;
    if (this.activateRoute.snapshot.params.id === 'new') {
      this.newForm = new Form();
      this._formData = new FormGroup({
        formName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        description: new FormControl('', [Validators.required, Validators.minLength(2)]),
      });
    } else {
      this.newForm = Forms.find((form) => form.id == this.activateRoute.snapshot.params.id);
      this.questions = this.questionService.getQuestions(this.activateRoute.snapshot.params.id);
      this._formData = new FormGroup({
        formName: new FormControl(this.newForm.name, [Validators.required, Validators.minLength(2)]),
        description: new FormControl(this.newForm.description, [Validators.required, Validators.minLength(2)]),
      });
    }
  }

  newQuestion(): void {
    this.questions.push(new Question(this.questions.length + 1));
  }

  onQuestionValid($event) {
    this.questionsValid = $event;
  }

  onQuestionDelete($event): void {
    if ($event !== -1) {
      this.questions.splice($event - 1, 1);
    }
    this.updatePositions();
  }

  newTheme(): void {
    let theme = new Theme();
    let questions = new Array();
    theme.questions = questions;
    this.themes.push(theme);
  }

  onSubmit(): void {
    console.log(this.questions);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.updatePositions();
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  updatePositions(): void {
    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i].position = i + 1;
    }
  }

  back() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['home']);
      }
    });
  }
}
