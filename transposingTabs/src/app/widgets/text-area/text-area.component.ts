import { Component, Output, EventEmitter } from "@angular/core";
import { DataService } from "../../data.service";
import { NavigationEnd, Router } from '@angular/router';
import { ShowOnDirtyErrorStateMatcher, MatSnackBar } from '@angular/material';

@Component({
  selector: "app-text-area",
  templateUrl: "./text-area.component.html",
  styleUrls: ["./text-area.component.scss"]
})
export class TextAreaComponent {
  tabTextValue = "paste tabs here";
  songNameTextValue = "please enter song name";
  albumNameTextValue = "please enter album name";
  artistNameTextValue = "please enter artist name";
  showSpinner = false;
  @Output() songSaved = new EventEmitter<string>();

  constructor(private dataService: DataService, private router: Router, public snackbar: MatSnackBar) {}

  saveSong(
    songName: string,
    artistName: string,
    albumName: string,
    inputKey: string,
    tabText: string,
    
  ) {
    var response = this.dataService.saveSong(
      songName,
      artistName,
      albumName,
      inputKey,
      tabText
    );
    response.subscribe(value => {
      console.log(value);
      this.songSaved.emit();
    });

    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;

    }, 3000);

    setTimeout(() => {
      const snackbarRef = this.snackbar.open('Song saved!', 'OK', {
        horizontalPosition: 'center',
        panelClass: ['snack-bar']
    });
      snackbarRef.onAction().subscribe(() => {
        this.router.navigate(['']);
      });
    }, 3200);
  }
}
