import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Theme} from '../../models/theme.model';
import {Question} from '../../models/question.model';
import {ThemeService} from '../../services/theme.service';
import {QuestionService} from '../../services/question-service.service';

@Component({
  selector: 'app-theme-editor-dialog',
  templateUrl: './theme-editor-dialog.component.html',
  styleUrls: ['./theme-editor-dialog.component.css']
})
export class ThemeEditorDialogComponent implements OnInit {
  plusIcon = faPlus;
  questionTypes;
  questionsValid = false;

  constructor(public dialogRef: MatDialogRef<ThemeEditorDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private questionService: QuestionService) {}

  ngOnInit(): void {
    this.loadQuestionTypes();
    this.data.theme.questions = this.data.theme?.questions ? this.data.theme.questions : [];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  newThemeQuestion(): void {
    this.data.theme.questions.push(new Question(this.data.theme.questions.length + 1));
  }

  loadQuestionTypes(): void {
    this.questionService.getQuestionsTypes().subscribe(
      data => {
        this.questionTypes = data;
      }
    );
  }

  onQuestionValid($event) {
    this.questionsValid = $event;
  }

  onQuestionDelete($event): void {
    if ($event !== -1) {
      this.data.theme.questions.splice($event - 1, 1);
    }
  }
}
