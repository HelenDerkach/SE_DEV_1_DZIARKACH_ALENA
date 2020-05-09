import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Poll } from '../../models/poll.model';
import { ActivatedRoute} from '@angular/router';
// import { Forms } from '../../mock-forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-details-page',
  templateUrl: './form-details-page.component.html',
  styleUrls: ['./form-details-page.component.css']
})
export class FormDetailsPageComponent implements OnInit {
	currentForm: Poll;
  arrowIcon = faArrowLeft;

	ngOnInit() {
    // this.currentForm = Forms.find((form) => form.id == this.activateRoute.snapshot.params.id);
	}

  constructor(private activateRoute: ActivatedRoute, private location: Location) {

  }

  back() {
    this.location.back();
  }
}
