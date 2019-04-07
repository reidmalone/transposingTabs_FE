import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Song } from '../song';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  songList: Song[];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllSongs();
  }

  getAllSongs()
  {
    this.dataService.getAllSongs().subscribe(songs => {
      this.songList = songs
      this.dataService.songsData = songs
    });
  }


onSelectedOption(e) {
  this.getFilteredExpenseList();
}

getFilteredExpenseList() {
  if (this.dataService.searchOption.length > 0)
    this.songList = this.dataService.filteredListOptions();
  else {
    this.songList = this.dataService.songsData;
  }

}

gotoTabs(songName:string,songArtist:string,songAlbum:string,songKey:string) {
  this.router.navigate(['/tabsview', { "songName": songName, "songArtist": songArtist,"songAlbum":songAlbum,"songKey":songKey}]);
}

gotoChords(songName:string,songArtist:string,songAlbum:string,songKey:string) {
  this.router.navigate(['/chordsview', { "songName": songName, "songArtist": songArtist,"songAlbum":songAlbum,"songKey":songKey}]);
}

}
