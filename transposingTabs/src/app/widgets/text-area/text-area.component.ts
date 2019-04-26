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
  tabTextValue: string;
  songNameTextValue: string;
  albumNameTextValue: string;
  artistNameTextValue: string;
  chordTextValue: string;
  showSpinner = false;
  @Output() songSaved = new EventEmitter<string>();

  constructor(private dataService: DataService, private router: Router, public snackbar: MatSnackBar) {}

  saveSong(
    songName: string,
    artistName: string,
    albumName: string,
    inputKey: string,
    tabText: string,
    chordTextValue, string
  ) {

    // if(!songName || !artistName || !albumName || !inputKey || !tabText || !chordTextValue)
    //   return;

    var response = this.dataService.saveSong(
      songName,
      artistName,
      albumName,
      inputKey,
      tabText,
      chordTextValue
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
