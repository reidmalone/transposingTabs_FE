import { Injectable } from "@angular/core";
import { Song } from "./song";
import { Observable, Subject } from "rxjs";
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Tab } from "./tab";

@Injectable({
  providedIn: "root"
})
export class DataService {
  searchOption = [];
  public songsData: Song[];
  postUrl: string = "http://localhost:3000/songsDBRoutes";

  constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAllSongs(): Observable<Song[]> {
    var routeEnding: string = "/getAll";

    return this.http.get<Song[]>(this.postUrl + routeEnding);
  }

  getTabsForSong(
    song_name: string,
    artist: string,
    album: string,
    songKey: string
  ): Observable<Tab> {
    var routeEnding: string =
      "/tab" + "/" + song_name + "/" + artist + "/" + album + "/" + songKey;
    return this.http.get<Tab>(this.postUrl + routeEnding);
  }

  deleteSong(song_name,album,artist)
  {
    //songInfo.artist, songInfo.album, songInfo.songName

    var routeEnding: string = "/delete";
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers: headers };

    let body = { "songName" : song_name, "artist" : artist, "album" : album};
    console.log(body);
    return this.http.post<Response>(this.postUrl + routeEnding, body, options);
  }

  saveSong(
    song_name: string,
    artist: string,
    album: string,
    songKey: string,
    tabText:string,
  ): Observable<Response> {
    var routeEnding: string = "/save";
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    let options = { headers: headers };

    //{"songName":"Stairway To Heaven","artist":"Led Zeppelin","album":"No Idea","default_key":"Ab","Tab":"E|-------5-7-----7-|-8-----8-2-----2-|-0---------0-----|-----------------| B|-----5-----5-----|---5-------3-----|---1---1-----1---|-0-1-1-----------|G|---5---------5---|-----5-------2---|-----2---------2-|-0-2-2-----------|D|-7-------6-------|-5-------4-------|-3---------------|-----------------|A|-----------------|-----------------|-----------------|-2-0-0---0--/8-7-|E|-----------------|-----------------|-----------------|-----------------|"}
    let body = { "songName" : song_name, "artist" : artist, "album" : album, "default_key":songKey,"Tab": tabText };
    return this.http.post<Response>(this.postUrl + routeEnding, body, options)
    .pipe(tap(() => {
      this._refreshNeeded$.next();
    })
    );
  }

  filteredListOptions() {
    const songs = this.songsData;
    const filteredSongsList = [];
    for (const song of songs) {
      for (const options of this.searchOption) {
        if (options.song_name === song.song_name) {
          filteredSongsList.push(song);
        }
      }
    }
    console.log(filteredSongsList);
    return filteredSongsList;
  }
}
