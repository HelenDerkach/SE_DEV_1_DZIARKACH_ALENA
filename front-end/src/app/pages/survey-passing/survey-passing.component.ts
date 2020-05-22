import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user-service.service';
import {PollService} from '../../services/poll.service';
import {QuestionService} from '../../services/question-service.service';
import {MatDialog} from '@angular/material/dialog';
import {Poll} from '../../models/poll.model';
import {Theme} from '../../models/theme.model';
import {PollResponse} from '../../models/pollResponse.model';
import {formatDate} from '@angular/common';
import {Response} from '../../models/response.model';
import {SurveyPassingService} from '../../services/survey-passing.service';

@Component({
  selector: 'app-survey-passing',
  templateUrl: './survey-passing.component.html',
  styleUrls: ['./survey-passing.component.css']
})
export class SurveyPassingComponent implements OnInit {
  loading = true;
  survey: Poll;
  pollResponse: PollResponse;
  valid = false;

  constructor(@Inject(LOCALE_ID) private locale: string, private activateRoute: ActivatedRoute, private pollService: PollService,
              private dialog: MatDialog, private fb: FormBuilder, private surveyPassingService: SurveyPassingService) { }

  ngOnInit(): void {
    this.loadPoll();
  }

  loadPoll(): void {
    this.loading = true;
    this.pollService.getPollByUrl(this.activateRoute.snapshot.params.url).subscribe(
      data => {
        this.survey = data;
        this.createPollResponse();
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }

  createPollResponse(): void {
    this.pollResponse = new PollResponse();
    this.pollResponse.pollId = this.survey.id;
    this.pollResponse.startedAt = this.transformDate(new Date());
    this.pollResponse.responses = [];
    this.survey.questions.forEach((question) => {
      const response: Response = { questionId: question.id };
      this.pollResponse.responses.push(response);
    });
    this.survey.themes.forEach((th) => {
      th.questions.forEach((q) => {
        const response: Response = { questionId: q.id };
        this.pollResponse.responses.push(response);
      });
    });
    this.survey.themes.forEach((th) => {
      th.questions[0].themeId = th.id;
      this.survey.questions.splice(th.questions[0].position - 1, 0, th.questions[0]);
    });
  }

  transformDate(date): string {
    return formatDate(date, 'yyyy-MM-dd HH:mm:ss', this.locale);
  }

  findTheme(id: number): Theme {
    return this.survey.themes.find((theme) => theme.id === id);
  }

  sendPollResponse(): void {
    this.pollResponse.completedAt = this.transformDate(new Date());
    this.surveyPassingService.saveSurveyPassing(this.pollResponse).subscribe(
      data => {
        alert('success');
      }
    );
  }

  onQuestionValid($event) {
    this.valid = $event;
  }
}
