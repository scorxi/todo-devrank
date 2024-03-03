import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from '@angular/material/dialog';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { ModalNewListComponent } from './components/modal-new-list/modal-new-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { AlertFailedComponent } from './components/alert-failed/alert-failed.component';
import { PillDropdownComponent } from './components/pill-dropdown/pill-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    NewActivityComponent,
    ModalNewListComponent,
    SpinnerComponent,
    AlertDialogComponent,
    AlertSuccessComponent,
    AlertFailedComponent,
    PillDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
