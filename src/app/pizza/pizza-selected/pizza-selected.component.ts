import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Topping } from "app/pizza/pizza.interface";

@Component({
  selector: 'pizza-selected',
  templateUrl: './pizza-selected.component.html',
  styleUrls: ['./pizza-selected.component.css']
})
export class PizzaSelectedComponent {

  @Input()
  parent: FormGroup;

  @Input()
  selected: Topping[];

  @Output()
  remove = new EventEmitter<number>();

  onRemove(index: number) {
    this.remove.emit(index);
  }
}
