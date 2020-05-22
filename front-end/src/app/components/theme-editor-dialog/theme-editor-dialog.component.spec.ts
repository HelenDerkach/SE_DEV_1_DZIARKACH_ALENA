import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeEditorDialogComponent } from './theme-editor-dialog.component';

describe('ThemeEditorDialogComponent', () => {
  let component: ThemeEditorDialogComponent;
  let fixture: ComponentFixture<ThemeEditorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeEditorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
