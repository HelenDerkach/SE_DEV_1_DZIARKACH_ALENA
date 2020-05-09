import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { Question } from '../../models/question.model';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

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

  constructor() {
   }

  ngOnInit(): void {
    this.responses = 15;
    this.averageTime = 8;
    // this.questions = Questions.filter((question)=>question.formId == this._currentForm.id);
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
  public pieChartData: number[] = [300, 500, 100, 20];

  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];


}
