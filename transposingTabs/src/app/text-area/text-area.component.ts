import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']

})
export class TextAreaComponent {

  textValue = 'paste tabs here';

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
//   let select2: HTMLSelectElement = <HTMLSelectElement>document.getElementById("currentKey");
//   let btngo: HTMLButtonElement = <HTMLButtonElement>document.getElementById("selectKey");
//   let ddm2: DropdownMenuButton = new DropdownMenuButton(select2);
//   btngo.onclick = () => {
//       ddm2.OnClick();
//   }

// }
