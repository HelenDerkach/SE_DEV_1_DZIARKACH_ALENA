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

@Component({
  selector: 'app-survey-passing',
  templateUrl: './survey-passing.component.html',
  styleUrls: ['./survey-passing.component.css']
})
export class SurveyPassingComponent implements OnInit {
  loading = true;
  Form: Poll;
  pollResponse: PollResponse;
  questionResponses: Response[];

  constructor(@Inject(LOCALE_ID) private locale: string, private activateRoute: ActivatedRoute, private pollService: PollService,
              private dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadPoll();
  }

  loadPoll(): void {
    this.loading = true;
    this.pollService.getPollByUrl(this.activateRoute.snapshot.params.url).subscribe(
      data => {
        this.Form = data;
        this.pollResponse = new PollResponse();
        this.pollResponse.poll = this.Form;
        this.pollResponse.started_at = this.transformDate(new Date());
        this.pollResponse.responses = [];
        this.Form.questions.forEach((question) => {
          const response: Response = { question, pollResponse: this.pollResponse};
          this.pollResponse.responses.push(response);
        });
        console.log(data);
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }

  transformDate(date) {
    return formatDate(date, 'yyyy-MM-dd HH:mm:ss', this.locale);
  }

  findTheme(id: number): Theme {
    return this.Form.themes.find((theme) => theme.id === id);
  }

  sendPollResponse(): void {
    this.pollResponse.completed_at = this.transformDate(new Date());
    console.log(this.pollResponse);
  }

}
