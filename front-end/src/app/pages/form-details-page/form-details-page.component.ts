import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Poll } from '../../models/poll.model';
import { ActivatedRoute} from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import {PollService} from '../../services/poll.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-details-page',
  templateUrl: './form-details-page.component.html',
  styleUrls: ['./form-details-page.component.css']
})
export class FormDetailsPageComponent implements OnInit {
	currentForm: Poll;
  arrowIcon = faArrowLeft;
  shareIcon = faShareSquare;
  loading = true;

  constructor(private activateRoute: ActivatedRoute, private location: Location, /*private clipboard: Clipboard,*/
              private pollService: PollService, private snackbar: MatSnackBar) {

  }

	ngOnInit() {
    this.getCurrentForm();
	}

	getCurrentForm(): void {
    this.pollService.getPollById(this.activateRoute.snapshot.params.id).subscribe(
      data => {
        this.loading = false;
        this.currentForm = data;
      }
    );
  }

  shareUrl(): void {
    this.snackbar.open(`localhost:4200/survey/${this.currentForm.url}`, 'Copy', {
      duration: 8000
    });
    this.snackbar._openedSnackBarRef.onAction().subscribe(
      next => {
        // this.clipboard.writeText(`localhost:4200/survey/${this.currentForm.url}`);
        }
      );
  }

  back() {
    this.location.back();
  }
}
