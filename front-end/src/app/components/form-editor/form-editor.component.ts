import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import { formatDate } from '@angular/common';
import { Poll } from '../../models/poll.model';
import { Theme } from '../../models/theme.model';
import { Question } from '../../models/question.model';
import {FormControl, FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from '../../services/question-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {PollService} from '../../services/poll.service';
import {QuestionType} from '../../models/question-type.model';
import {UserService} from '../../services/user-service.service';
import {QuestionChoice} from '../../models/question-choice.model';
import {ThemeEditorDialogComponent} from '../theme-editor-dialog/theme-editor-dialog.component';
import {ThemeSelectionDialogComponent} from '../theme-selection-dialog/theme-selection-dialog.component';

@Component({
  selector: 'form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.css']
})
export class FormEditorComponent implements OnInit {
  plusIcon = faPlus;
  arrowIcon = faArrowLeft;
  newForm: Poll;
  questionsNumber: number;
  questionTypes: QuestionType[];
  themesArray: FormArray = new FormArray([]);
  questionsValid = false;
  formData: FormGroup;
  loading = true;
  errorMessage;

  constructor(@Inject(LOCALE_ID) private locale: string, private activateRoute: ActivatedRoute, private userService: UserService,
              private pollService: PollService, private questionService: QuestionService,
              private router: Router, private dialog: MatDialog, private fb: FormBuilder) {
  }

  ngOnInit(): void {
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
    this.formData = new FormGroup({
      formName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl('', [Validators.required, Validators.minLength(2)]),
      time_limited: new FormControl(false, ),
      startsAt: new FormControl(new Date(), [Validators.required]),
      endsAt: new FormControl(new Date(), [Validators.required]),
      themes: this.addThemeArray(),
    });
  }

  loadPoll(): void {
    this.loading = true;
    this.pollService.getPollById(this.activateRoute.snapshot.params.id).subscribe(
      data => {
        this.newForm = data;
        this.questionsNumber = this.newForm.questions.length;
        console.log(data);
        this.formData = new FormGroup({
          formName: new FormControl(this.newForm?.title ? this.newForm.title : '', [Validators.required, Validators.minLength(2)]),
          description: new FormControl(this.newForm?.description ? this.newForm.description : '', [Validators.required, Validators.minLength(2)]),
          time_limited: new FormControl(this.newForm?.startsAt || this.newForm?.endsAt ? true : false, ),
          startsAt: new FormControl(this.newForm?.startsAt ? new Date(this.newForm.startsAt) : new Date(), [Validators.required]),
          endsAt: new FormControl(this.newForm?.endsAt ? new Date(this.newForm.endsAt) : new Date(), [Validators.required]),
          themes: this.addThemeArray(),
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

  newTheme(newTheme: Theme): void {
    newTheme.id = Math.floor(Math.random() * 10);
    newTheme.questions = [];
    const newQuestion = new Question(this.newForm.questions.length + 1);
    newQuestion.themeId = newTheme.id;
    newTheme.questions.push(newQuestion);
    this.themesArray.push(this.getThemeForm(newTheme));
    this.newForm.questions.push(newQuestion);
    this.newForm.themes.push(newTheme);
  }

  addTheme(): void {
    const dialogRef = this.dialog.open(ThemeSelectionDialogComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
      if (Object.keys(data).length === 0) {
        this.newTheme(data);
      } else {
        this.newForm.themes.push(data);
        this.themesArray.push(this.getThemeForm(data));
      }
    }, error => {
      console.log(error);
    });
  }

  addThemeArray(): FormArray {
    if (this.newForm?.themes) {
      this.newForm.themes.forEach((theme) => {
        this.themesArray.push(this.getThemeForm(theme));
      });
    }
    return this.themesArray;
  }

  getThemeForm(theme: Theme): FormGroup {
    theme.questions[0].themeId = theme.id;
    this.newForm.questions.splice(theme.questions[0].position - 1, 0, theme.questions[0]);
    this.updatePositions();
    return new FormGroup({
      name: new FormControl(theme?.title ? theme.title : '', [Validators.required])
    });
  }

  getThemeFormGroup(i: number): FormGroup {
    return this.themesArray.controls[i] as FormGroup;
  }

  getTheme(id: number): Theme {
    return this.newForm.themes.find((theme) => theme.id === id);
  }

  newThemeQuestion(themeId: number): void {
    let theme = this.getTheme(themeId);
    let newQuestion = new Question(this.newForm.questions.length + 1);
    newQuestion.themeId = themeId;
    theme.questions.push(newQuestion);
  }

  onSubmit(isPublished: boolean): void {
    this.newForm.title = this.formData.value.formName;
    this.newForm.description = this.formData.value.description;
    if (this.formData.value.time_limited) {
      this.newForm.startsAt = this.transformDate(this.formData.value.startsAt[0]);
      this.newForm.endsAt = this.transformDate(this.formData.value.startsAt[1]);
    }
    this.newForm.userId = this.userService.currentUserValue.id;
    this.newForm.isPublished = isPublished;

    if (this.newForm?.themes) {
      for (let i = 0; i < this.themesArray.length; i++) {
        this.newForm.themes[i].title = this.themesArray.value[i].name;
        this.newForm.themes[i].isPrivate = true;
        this.newForm.themes[i].id = null;
      }

      for (let i = 0; i < this.newForm.themes.length; i++) {
        this.newForm.themes[i].questions.forEach((themeQuestion) => {
          const qstn = this.newForm.questions.find((formQuestion) => formQuestion.themeId === themeQuestion.themeId);
          if (qstn) {
            this.newForm.questions.splice(qstn.position - 1, 1);
          }
          themeQuestion.id = null;
          themeQuestion.themeId = null;
        });
      }
    }

    this.pollService.savePoll(this.newForm).subscribe(
      data => {
        if (data.isPublished) {
          alert(data.url);
        }
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
      });
  }


  transformDate(date) {
    return formatDate(date, 'yyyy-MM-dd HH:mm:ss', this.locale);
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
