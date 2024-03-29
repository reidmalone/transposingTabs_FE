import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.scss']
})
export class ChordsComponent implements OnInit {

  newChords: any;
  currentSong:string;
  currentAlbum:string;
  currentArtist:string;
  currentKey:string;

  constructor(private _Activatedroute:ActivatedRoute,private dataService: DataService) { }

  ngOnInit() {
    //songName": songName, "songArtist": songArtist,"songAlbum":songAlbum,"songKey":songKey
    this.getSongChords(this._Activatedroute.snapshot.params['songName'],
    this._Activatedroute.snapshot.params['songArtist'],
    this._Activatedroute.snapshot.params['songAlbum']
    ,this._Activatedroute.snapshot.params['songKey'])

        
    this.currentKey = this._Activatedroute.snapshot.params['songKey'];
  }

  getSongChords(songName:string,songArtist:string,songAlbum:string,songKey:string){
    this.dataService.getChordsForSong(songName,songArtist,songAlbum,songKey).subscribe( (value) => {
      this.newChords = this.removeUnderscores(value.chords);
      this.currentSong = songName;
      this.currentAlbum = songAlbum;
      this.currentArtist = songArtist;
    });
  }

  removeUnderscores(newChords:string) :string {
    return newChords.replace(/_/g,"&nbsp;")
  }

}
