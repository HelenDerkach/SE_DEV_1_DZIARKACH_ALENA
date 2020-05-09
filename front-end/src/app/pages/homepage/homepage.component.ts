import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { UserService } from '../../services/user-service.service';
import {PollService} from '../../services/poll.service';
import { first } from 'rxjs/operators';
import { Poll } from '../../models/poll.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  plusIcon = faPlus;
  currentUser;
  Forms;
  publishedForms;
  drafts;
  errorMessage;
  loading = false;

  constructor(private _router: Router, private userService: UserService, private pollService: PollService) {
    this.currentUser = userService.currentUserValue;
  }

  ngOnInit(): void {
    this.getForms();
  }

  createForm() {
    this._router.navigate(['createForm', 'new']);
  }

  showFormDetails(event) {
    this._router.navigate(['form', event]);
  }

  editForm(event) {
    this._router.navigate(['createForm', event]);
  }

  getForms(): void {
    this.loading = true;
    this.pollService.getUserPolls().subscribe(
      data => {
        this.Forms = data;
        console.log(data);
        this.publishedForms = this.Forms.filter((form) => form.is_published === true);
        this.drafts = this.Forms.filter((form) => form.is_published === false);
        console.log(this.publishedForms);
        this.loading = false;
        },
      error => {
        this.loading = false;
        this.errorMessage = error.error.message;
      });
  }
}
