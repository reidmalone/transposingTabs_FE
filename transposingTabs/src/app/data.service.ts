import { Injectable } from "@angular/core";
import { Song } from "./song";
import { Observable } from "rxjs";
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
