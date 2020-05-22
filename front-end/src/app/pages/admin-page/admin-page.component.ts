import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {UserService} from '../../services/user-service.service';
import {ThemeService} from '../../services/theme.service';
import {PollService} from '../../services/poll.service';
import {MatDialog} from '@angular/material/dialog';
import {ThemeEditorDialogComponent} from '../../components/theme-editor-dialog/theme-editor-dialog.component';
import {Theme} from '../../models/theme.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  plusIcon = faPlus;
  currentUser;
  publishedForms;
  themes;
  questionTypes;
  errorMessage;
  loading = true;
  publishedPages;
  themesPages;
  publishedLoading = false;
  themesLoading = false;

  constructor(private router: Router, private userService: UserService, private pollService: PollService,
              private themeService: ThemeService, private dialog: MatDialog) {
    this.currentUser = userService.currentUserValue;
  }

  ngOnInit(): void {
    this.publishedForms = [];
    this.themes = [];
    this.getForms(0);
    this.getThemes(0);
  }

  getForms(page: number): void {
    this.pollService.getAllPublishedPages(page).subscribe(
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

  getThemes(page: number): void {
    this.themeService.getAllPublicThemesPages(page).subscribe(
      data => {
        this.themes = data.data;
        this.themesPages = data.meta.total;
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.errorMessage = error.error.message;
      });
  }

  publishedPageLoad(event): void {
    this.publishedLoading = true;
    this.pollService.getAllPublishedPages(event.pageIndex).subscribe(
      data => {
        this.publishedForms = [];
        this.publishedForms = data.data;
        this.publishedLoading = false;
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  themesPageLoad(event): void {
    this.themesLoading = true;
    this.themeService.getAllPublicThemesPages(event.pageIndex).subscribe(
      data => {
        this.themes = [];
        this.themes = data.data;
        this.themesLoading = false;
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }



  showFormDetails(event): void {
    this.router.navigate(['form', event]);
  }

  showThemeDetails(event): void {
    this.openThemeDialog(this.themes.find((th) => th.id == event));
  }

  createTheme(): void {
    const newTheme = new Theme();
    newTheme.isPrivate = false;

    this.openThemeDialog(newTheme);
  }

  openThemeDialog(editedTheme: Theme): void {
    const dialogRef = this.dialog.open(ThemeEditorDialogComponent, {
      data: {theme: editedTheme},
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.themesLoading = true;
        this.themeService.saveTheme(result).subscribe(
          data => {
            this.themes.push(data);
            this.themesLoading = false;
          },
          error => {
            console.log(error);
            this.themesLoading = false;
          }
        );
      }
    });
  }
}
