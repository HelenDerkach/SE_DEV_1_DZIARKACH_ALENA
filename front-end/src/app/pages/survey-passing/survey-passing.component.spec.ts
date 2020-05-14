import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPassingComponent } from './survey-passing.component';

describe('SurveyPassingComponent', () => {
  let component: SurveyPassingComponent;
  let fixture: ComponentFixture<SurveyPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
