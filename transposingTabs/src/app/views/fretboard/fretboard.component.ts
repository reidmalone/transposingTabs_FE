import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fretboard",
  templateUrl: "./fretboard.component.html",
  styleUrls: ["./fretboard.component.scss"]
})
export class FretboardComponent implements OnInit {
  tabs = [
    {
      "string": 5,
      "tab": 22
    },
    {
      "string": 1,
      "tab": 3
    },
    {
      "string": 2,
      "tab": 18
    },
    {
      "string": 5,
      "tab": 15
    },
    {
      "string": 4,
      "tab": 24
    },
    {
      "string": 1,
      "tab": 24
    },
    {
      "string": 2,
      "tab": 12
    },
    {
      "string": 1,
      "tab": 4
    },
    {
      "string": 1,
      "tab": 17
    },
    {
      "string": 5,
      "tab": 7
    },
    {
      "string": 5,
      "tab": 2
    },
    {
      "string": 3,
      "tab": 7
    },
    {
      "string": 5,
      "tab": 24
    },
    {
      "string": 2,
      "tab": 4
    },
    {
      "string": 4,
      "tab": 15
    },
    {
      "string": 3,
      "tab": 16
    },
    {
      "string": 0,
      "tab": 25
    },
    {
      "string": 1,
      "tab": 20
    },
    {
      "string": 1,
      "tab": 8
    },
    {
      "string": 0,
      "tab": 8
    },
    {
      "string": 0,
      "tab": 10
    },
    {
      "string": 5,
      "tab": 11
    },
    {
      "string": 4,
      "tab": 16
    },
    {
      "string": 3,
      "tab": 0
    },
    {
      "string": 4,
      "tab": 10
    },
    {
      "string": 1,
      "tab": 13
    },
    {
      "string": 3,
      "tab": 22
    },
    {
      "string": 5,
      "tab": 12
    },
    {
      "string": 4,
      "tab": 21
    },
    {
      "string": 3,
      "tab": 10
    },
    {
      "string": 3,
      "tab": 10
    },
    {
      "string": 4,
      "tab": 21
    },
    {
      "string": 3,
      "tab": 10
    },
    {
      "string": 3,
      "tab": 10
    }
  ];

  constructor() {}

  ngOnInit() {
    let testChange: string = 'eb|--------------15----14-----|--------------15----14-----|<br>Bb|-----15--------------------|-----15--------------------|<br>Gb|--------14-12----14----14--|--------14-12----14----14--|<br>Db|--12-----------------------|--12-----------------------|<br>Ab|---------------------------|---------------------------|<br>Eb|---------------------------|---------------------------|';

    setTimeout( () => {
      this.changeTabsView(testChange);
    },2000);
  }

  changeTabsView(newHtml: string)
  {
    document.getElementById("tabsView").innerHTML = newHtml;
  }

}
