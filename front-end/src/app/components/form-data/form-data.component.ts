import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { Question } from '../../models/question.model';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import {SurveyPassingService} from '../../services/survey-passing.service';
import {QuestionData} from '../../models/question-data.model';
import {StatisticsService} from '../../services/statistics.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
	@Input()
	_currentForm: Poll;
	responses: number;
	averageTime: number;
  questions: Question[];
  questionsData: QuestionData[];
  chartDataLoad = false;
  textAnswersLoading;
  textAnswersPages;

  constructor(private statisticsService: StatisticsService) {
   }

  ngOnInit(): void {
    this.questions = [];
    this.questionsData = [];
    this.getResponses();
    this.getAverageTime();
    this._currentForm.themes.forEach((th) => {
      th.questions.forEach((q) => {
        this.questions.push(q);
      });
    });
    this.getQuestionData();
    console.log(this.questionsData);
  }

  getResponses(): void {
    this.statisticsService.getSurveyPassingCount(this._currentForm.id).subscribe(
      data => this.responses = data
    );
  }

  getAverageTime(): void {
    this.statisticsService.getSurveyPassingAverageTime(this._currentForm.id).subscribe(
      data => this.averageTime = data
    );
  }

  getQuestionData() {
    this.questions.forEach((q) => {
      let questionDataItem = new QuestionData();
      questionDataItem.questionId = q.id;
      if (q.typeId === 1) {
        this.getTextStatistics(questionDataItem, 0);
      } else {
        this.statisticsService.getResultsPie(q.id).subscribe(
          data => {
            console.log(data);
            questionDataItem.pieChartData = [];
            questionDataItem.pieChartLabels = [];
            for (let i = 0; i < data.length; i++) {
              questionDataItem.pieChartData.push(data[i].count);
              questionDataItem.pieChartLabels.push(data[i].answer);
            }
            this.chartDataLoad = true;
          }
        );
      }
      this.questionsData.push(questionDataItem);
    });
  }

  getTextStatistics(questionDataItem: QuestionData, page: number): void {
    questionDataItem.loading = true;
    questionDataItem.textData = [];
    this.statisticsService.getResultsText(questionDataItem.questionId, page).subscribe(
      data => {
        for (let i = 0; i < data.data.length; i++) {
          questionDataItem.textData.push(data.data[i].answer);
        }
        questionDataItem.textDataPages = data.meta.total;
        questionDataItem.loading = false;
      },
      error => {
        questionDataItem.loading = false;
      });
  }

  questionsDataLoadPage(questionDataItem: QuestionData, event): void {
    questionDataItem.loading = true;
    this.statisticsService.getResultsText(questionDataItem.questionId, event.pageIndex).subscribe(
      data => {
        questionDataItem.textData = data.data;
        questionDataItem.textDataPages = data.meta.total;
        questionDataItem.loading = false;
      },
      error => {
        questionDataItem.loading = false;
      });
  }

  getChartStatistics(): void {

  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];


}
