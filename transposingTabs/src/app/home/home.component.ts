import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  constructor() { }

  ngOnInit() {
  }

 

}
class DropdownMenuButton {
  dropdownMenuButton: HTMLSelectElement;
  options2: HTMLOptionsCollection;

  constructor(dropdown: HTMLSelectElement) {
      this.dropdownMenuButton = dropdown;
      this.options2 = dropdown.options;
      }


  OnClick() {
      alert(this.options2[this.options2.selectedIndex].value);
      //if (this.options2.selectedIndex >= 1)
          //document.location.href = this.options2[this.options2.selectedIndex].value;
  } 

}


window.onload = () => {
  let select2: HTMLSelectElement = <HTMLSelectElement>document.getElementById("keyChoice");
  let btngo: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Transpose!");
  let ddm2: DropdownMenuButton = new DropdownMenuButton(select2);
  btngo.onclick = () => {
      ddm2.OnClick(); 
  }  

}
