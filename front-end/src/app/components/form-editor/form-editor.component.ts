import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { Theme } from '../../models/theme.model';
import { Question } from '../../models/question.model';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from '../../services/question-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {PollService} from '../../services/poll.service';
import {QuestionType} from '../../models/question-type.model';
import {UserService} from '../../services/user-service.service';

@Component({
  selector: 'form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {
  plusIcon = faPlus;
  arrowIcon = faArrowLeft;
// TODO change theme model, add lists and drag n drop
  newForm: Poll;
  questions: Question[];
  questionTypes: QuestionType[];
  questionsValid: boolean;
  _formData: FormGroup;
  loading = true;
  errorMessage;

  constructor(private activateRoute: ActivatedRoute, private userService: UserService, private pollService: PollService, private questionService: QuestionService,
              private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.questionsValid = false;
    this.loadQuestionTypes();
    if (this.activateRoute.snapshot.params.id === 'new') {
      this.newEmptyPoll();
    } else {
      this.loadPoll();
    }
  }

  newEmptyPoll(): void {
    this.loading = false;
    this.newForm = new Poll();
    this.newForm.questions = [];
    this.newForm.themes = [];
    this._formData = new FormGroup({
      formName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl('', [Validators.required, Validators.minLength(2)]),
      time_limited: new FormControl(false, ),
      startsAt: new FormControl(new Date(), [Validators.required]),
      endsAt: new FormControl(new Date(), [Validators.required]),
    });
  }

  loadPoll(): void {
    this.loading = true;
    this.pollService.getPollById(this.activateRoute.snapshot.params.id).subscribe(
      data => {
        this.newForm = data;
        this._formData = new FormGroup({
          formName: new FormControl(this.newForm?.title ? this.newForm.title : '', [Validators.required, Validators.minLength(2)]),
          description: new FormControl(this.newForm?.description ? this.newForm.description : '', [Validators.required, Validators.minLength(2)]),
          time_limited: new FormControl(false, ),
          startsAt: new FormControl(this.newForm?.starts_at ? this.newForm.starts_at : new Date(), [Validators.required]),
          endsAt: new FormControl(this.newForm?.ends_at ? this.newForm.ends_at : new Date(), [Validators.required]),
        });
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }

  loadQuestionTypes(): void {
    this.questionService.getQuestionsTypes().subscribe(
      data => {
        this.questionTypes = data;
        }
    );
  }

  newQuestion(): void {
    this.newForm.questions.push(new Question(this.newForm.questions.length + 1));
  }

  onQuestionValid($event) {
    this.questionsValid = $event;
  }

  onQuestionDelete($event): void {
    if ($event !== -1) {
      this.newForm.questions.splice($event - 1, 1);
    }
    this.updatePositions();
  }

  newTheme(): void {
    // let theme = new Theme();
    // let questions = new Array();
    // theme.questions = questions;
    // this.themes.push(theme);
  }

  onSubmit(isPublished: boolean): void {
    this.newForm.title = this._formData.value.formName;
    this.newForm.description = this._formData.value.description;
    this.newForm.starts_at = this._formData.value.startsAt[0];
    this.newForm.ends_at = this._formData.value.startsAt[1];
    this.newForm.user = this.userService.currentUserValue;
    this.newForm.is_published = isPublished;
    console.log(this.newForm);
    this.pollService.savePoll(this.newForm).subscribe(
      data => {
        console.log(data);
      },
      error => {
        this.errorMessage = error.error.message;
      });
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
    for (let i = 0; i < this.newForm.questions.length; i++) {
      this.newForm.questions[i].position = i + 1;
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
