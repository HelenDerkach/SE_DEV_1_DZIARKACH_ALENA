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
  publishedForms;
  drafts;
  errorMessage;
  loading = true;
  publishedPages;
  draftsPages;
  publishedLoading = false;
  draftsLoading = false;

  constructor(private _router: Router, private userService: UserService, private pollService: PollService) {
    this.currentUser = userService.currentUserValue;
  }

  ngOnInit(): void {
    this.publishedForms = [];
    this.drafts = [];
    this.getPublished(0);
    this.getDrafts(0);
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

  getPublished(page: number): void {
    this.pollService.getUserPublishedPages(page).subscribe(
      data => {
        this.publishedForms = data.data;
        this.publishedPages = data.meta.total;
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.errorMessage = error.error.message;
      });
  }

  getDrafts(page: number): void {
    this.pollService.getUserDraftsPages(page).subscribe(
    data => {
        this.drafts = data.data;
        this.draftsPages = data.meta.total;
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.errorMessage = error.error.message;
      });
  }

  publishedPageLoad(event): void {
    this.publishedLoading = true;
    this.pollService.getUserPublishedPages(event.pageIndex).subscribe(
      data => {
        this.publishedForms = [];
        this.publishedForms = data.data;
        this.publishedLoading = false;
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  draftsPageLoad(event): void {
    this.draftsLoading = true;
    this.pollService.getUserDraftsPages(event.pageIndex).subscribe(
      data => {
        this.drafts = [];
        this.drafts = data.data;
        this.draftsLoading = false;
      },
      error => {
        this.errorMessage = error.error.message;
    });
  }
}
