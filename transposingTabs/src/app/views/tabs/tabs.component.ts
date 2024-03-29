import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  newTabs: any;
  currentSong:string;
  currentAlbum:string;
  currentArtist:string;
  currentKey:string;

  constructor(private _Activatedroute:ActivatedRoute,private dataService: DataService) { }

  ngOnInit() {
    //songName": songName, "songArtist": songArtist,"songAlbum":songAlbum,"songKey":songKey
    this.getSongTabs(this._Activatedroute.snapshot.params['songName'],
    this._Activatedroute.snapshot.params['songArtist'],
    this._Activatedroute.snapshot.params['songAlbum']
    ,this._Activatedroute.snapshot.params['songKey'])
    
    this.currentKey = this._Activatedroute.snapshot.params['songKey'];
  }

  getSongTabs(songName:string,songArtist:string,songAlbum:string,songKey:string){
    this.dataService.getTabsForSong(songName,songArtist,songAlbum,songKey).subscribe( (value) => {
      this.newTabs = value.Tab;
      this.currentSong = songName;
      this.currentAlbum = songAlbum;
      this.currentArtist = songArtist;
      this.currentKey=songKey;
    });
  }

}
