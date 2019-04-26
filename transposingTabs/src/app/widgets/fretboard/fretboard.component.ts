import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-fretboard",
  templateUrl: "./fretboard.component.html",
  styleUrls: ["./fretboard.component.scss"]
})
export class FretboardComponent implements OnInit {

  @Input('view-value') viewValue: any;

  constructor() {}

  ngOnInit() {
      document.getElementById("tabsView").innerHTML = "No Song Selected";
      document.getElementById("tabsView").setAttribute('style','text-align: justify;');
  }
}
