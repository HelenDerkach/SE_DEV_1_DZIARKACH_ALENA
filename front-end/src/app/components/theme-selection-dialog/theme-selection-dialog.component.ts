import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Theme} from '../../models/theme.model';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-theme-selection-dialog',
  templateUrl: './theme-selection-dialog.component.html',
  styleUrls: ['./theme-selection-dialog.component.css']
})
export class ThemeSelectionDialogComponent implements OnInit {
  plusIcon = faPlus;
  themes;
  themesPages;
  loading = true;
  selectedTheme;

  constructor(public dialogRef: MatDialogRef<ThemeSelectionDialogComponent>,
              private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themes = [];
    this.getThemes(0);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getThemes(page: number): void {
    this.themeService.getAllPublicThemesPages(page).subscribe(
      data => {
        this.themes = data.data;
        this.themesPages = data.meta.total;
        this.loading = false;
      },
      error => {
        this.loading = false;
        console.log(error);
      });
  }

  themesPageLoad(event): void {
    this.loading = true;
    this.themeService.getAllPublicThemesPages(event.pageIndex).subscribe(
      data => {
        this.themes = [];
        this.themes = data.data;
        this.loading = false;
      },
      error => {
        console.log(error);
      });
  }

  addTheme(event): void {
    this.selectedTheme = this.themes.find((th) => th.id == event);
  }

  addEmptyTheme(): void {
    this.selectedTheme = new Theme();
  }

}
