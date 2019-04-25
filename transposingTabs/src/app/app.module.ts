import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {

  MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule,
  MatProgressSpinnerModule


} from '@angular/material';

import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './widgets/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SearchBarComponent } from './widgets/search-bar/search-bar.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material';
import { FretboardComponent } from './widgets/fretboard/fretboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TextAreaComponent } from './widgets/text-area/text-area.component';
import { TabsComponent } from './views/tabs/tabs.component';
import { ChordsComponent } from './views/chords/chords.component';
import { InputComponent } from './views/input/input.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    SearchBarComponent,
    FretboardComponent,
    TextAreaComponent,
    TabsComponent,
    ChordsComponent,
    InputComponent,
    LoadingSpinnerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSnackBarModule 
 
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
