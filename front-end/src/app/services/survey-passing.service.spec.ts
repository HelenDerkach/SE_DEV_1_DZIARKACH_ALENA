import { TestBed } from '@angular/core/testing';

import { SurveyPassingService } from './survey-passing.service';

describe('SurveyPassingService', () => {
  let service: SurveyPassingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyPassingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
