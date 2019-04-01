import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Song } from '../song';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  songList: Song[];
  newTabs: any;
  currentSong:string;
  currentAlbum:string;
  currentArtist:string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
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

getSongTabs(songName:string,songArtist:string,songAlbum:string,songKey:string){
  this.dataService.getTabsForSong(songName,songArtist,songAlbum,songKey).subscribe( (value) => {
    this.newTabs = value.Tab;
    this.currentSong = songName;
    this.currentAlbum = songAlbum;
    this.currentArtist = songArtist;
    console.log(songName);
  });
}

}

// class DropdownMenuButton {
//   dropdownMenuButton: HTMLSelectElement;
//   options2: HTMLOptionsCollection;

//   constructor(dropdown: HTMLSelectElement) {
//       this.dropdownMenuButton = dropdown;
//       this.options2 = dropdown.options;
//       }


//   OnClick() {
//       alert(this.options2[this.options2.selectedIndex].value);
//       //if (this.options2.selectedIndex >= 1)
//           //document.location.href = this.options2[this.options2.selectedIndex].value;
//   }

// }


// window.onload = () => {
//   let select2: HTMLSelectElement = <HTMLSelectElement>document.getElementById("keyChoice");
//   let btngo: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Transpose!");
//   let ddm2: DropdownMenuButton = new DropdownMenuButton(select2);
//   btngo.onclick = () => {
//       ddm2.OnClick();
//   }

// }
