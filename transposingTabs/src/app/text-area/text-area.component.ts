import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
        
})
export class TextAreaComponent {

  textValue = 'paste tabs here';
  log = '';

  logText(value: string): void {
    this.log += `'${value}'\n`;
  }
}
