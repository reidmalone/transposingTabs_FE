import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {

  MatIconModule, MatInputModule,
  MatAutocompleteModule, MatChipsModule,
  MatFormFieldModule


} from '@angular/material';

import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

import { FretboardComponent } from './views/fretboard/fretboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TextAreaComponent } from './text-area/text-area.component';
import { TabsViewComponent } from './views/tabs-view/tabs-view.component';
import { ChordsViewComponent } from './views/chords-view/chords-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    SearchBarComponent,
    FretboardComponent,
    TextAreaComponent,
    TabsViewComponent,
    ChordsViewComponent
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
    ScrollingModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
