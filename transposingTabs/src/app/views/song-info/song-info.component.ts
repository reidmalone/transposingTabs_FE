import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.scss']
})
export class SongInfoComponent implements OnInit {

  currentSong:string;
  currentAlbum:string;
  currentArtist:string;

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    //songName": songName, "songArtist": songArtist,"songAlbum":songAlbum,"songKey":songKey
    this.currentSong = this._Activatedroute.snapshot.params['songArtist'];
    this.currentAlbum = this._Activatedroute.snapshot.params['songAlbum'];
    this.currentArtist = this._Activatedroute.snapshot.params['songKey'];
  }

}
