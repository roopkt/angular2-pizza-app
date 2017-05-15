import { FormGroup } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pizza-button',
  templateUrl: './pizza-button.component.html',
  styleUrls: ['./pizza-button.component.css']
})

export class PizzaButtonComponent {
  @Input()
  parent: FormGroup;

  @Output()
  add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }
}
