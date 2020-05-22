import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSelectionDialogComponent } from './theme-selection-dialog.component';

describe('ThemeSelectionDialogComponent', () => {
  let component: ThemeSelectionDialogComponent;
  let fixture: ComponentFixture<ThemeSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
