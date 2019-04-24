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

import { FretboardComponent } from './widgets/fretboard/fretboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TextAreaComponent } from './widgets/text-area/text-area.component';
import { TabsComponent } from './views/tabs/tabs.component';
import { ChordsComponent } from './views/chords/chords.component';
import { InputComponent } from './views/input/input.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
<<<<<<< Updated upstream
import { MatSnackBarModule } from '@angular/material/snack-bar';
=======
import { SongInfoComponent } from './views/song-info/song-info.component';
>>>>>>> Stashed changes

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
    LoadingSpinnerComponent,
    SongInfoComponent,
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
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
