import { Component } from '@angular/core';
import { Song } from './song';
import { DataService } from './data.service';
import { RouterOutlet } from '@angular/router';
import {slider, slider2} from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider2
  ]
})
export class AppComponent {
  title = 'app';

  post: Song[]
  constructor(
    private dataService: DataService
  ) {}

    prepareRoute(outlet: RouterOutlet){
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

}
