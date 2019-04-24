import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../data.service';
import { Song } from '../../song';
import {Router} from '@angular/router';


//new below here
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})



export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['song_name','album','artist','default_key','actions'];
  h1Style: boolean = false;
  songList: Song[];
/* commenting out dummy code
  songList: Song[] = [
    {id: 1, song_name: "hodors song", album: "hodor", artist: "yeet", default_key: "G#"},
    {id: 2, song_name: "doo doo", album: "yes", artist: "mario", default_key: "C#"}
  ];
  */
  dataSource = new MatTableDataSource<Song>(this.songList);
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.getAllSongs();
  }

  getAllSongs()
  {

    this.dataSource = new MatTableDataSource<Song>(this.songList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

gotoSongInfo(songName:string,songArtist:string,songAlbum:string,songKey:string) {
  this.router.navigate(['/songinfo', { "songName": songName, "songArtist": songArtist,"songAlbum":songAlbum,"songKey":songKey}]);
}

}
