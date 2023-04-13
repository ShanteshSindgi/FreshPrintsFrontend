import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() btnText: string = "Click";
  @Output() btnClick = new EventEmitter();

  handleClick() {
    this.btnClick.emit();
  }

}
