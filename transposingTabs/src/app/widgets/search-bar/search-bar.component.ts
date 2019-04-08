import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
import { Song } from '../../song';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    myControl = new FormControl();
    filteredOptions: Observable<string[]>;
    allSongs: Song[];
    autoCompleteList: any[]

    @ViewChild('autocompleteInput') autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getAllSongs().subscribe(songs => {
      this.allSongs = songs
      console.log(songs);
    });

    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })
  }

  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val) {
    var categoryList = []
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allSongs.filter(s => s.song_name.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allSongs;
  }

  displayFn(song: Song) {
    let k = song ? song.song_name : song;
    return k;
  }

  filterPostList(event) {
    var songs= event.source.value;
        if(!songs) {
          this.dataService.searchOption=[]
        }
        else {
          console.log("not")

            this.dataService.searchOption.push(songs);
            this.onSelectedOption.emit(this.dataService.searchOption)
        }

        this.focusOnPlaceInput();



  }


  removeOption(option) {

    let index = this.dataService.searchOption.indexOf(option);
    if (index >= 0)
        this.dataService.searchOption.splice(index, 1);
        this.focusOnPlaceInput();

        this.onSelectedOption.emit(this.dataService.searchOption)
}

focusOnPlaceInput() {
  this.autocompleteInput.nativeElement.focus();
  this.autocompleteInput.nativeElement.value = '';
}


}
