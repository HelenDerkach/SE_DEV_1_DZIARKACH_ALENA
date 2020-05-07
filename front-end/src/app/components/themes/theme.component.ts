import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {Question} from '../../models/question.model';

@Component({
  selector: 'app-themes',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
	themequestions: Question[];

  constructor() { }

  ngOnInit(): void {
    this.themequestions = new Array();
  }
}
