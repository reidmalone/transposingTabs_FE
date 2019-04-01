import { Component } from '@angular/core';
import { Song } from './song';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  post:Song[]
  constructor(
    private dataService: DataService
  ) {

  }


}
