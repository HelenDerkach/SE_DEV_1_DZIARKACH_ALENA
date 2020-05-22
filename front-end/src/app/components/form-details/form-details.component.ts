import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { Question } from '../../models/question.model';
import {Theme} from '../../models/theme.model';


@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  @Input()
	currentForm: Poll;

  constructor() {
   }

  ngOnInit(): void {
    this.currentForm.themes.forEach((th) => {
      th.questions[0].themeId = th.id;
      this.currentForm.questions.splice(th.questions[0].position - 1, 0, th.questions[0]);
      this.updatePositions();
    });
  }

  getTheme(id: number): Theme {
    return this.currentForm.themes.find((th) => th.id == id);
  }

  updatePositions(): void {
    for (let i = 0; i < this.currentForm.questions.length; i++) {
      this.currentForm.questions[i].position = i + 1;
    }
  }

}
