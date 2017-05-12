import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topping } from "app/pizza/pizza.interface";

@Component({
  selector: 'topping-selector',
  templateUrl: './topping-selector.component.html',
  styleUrls: ['./topping-selector.component.css']
})
export class ToppingSelectorComponent implements OnInit {
  touched=  false;

  @Input()
  parent :FormGroup;
  
  @Input()
  selected:Topping[];

  @Input()
  toppings:Topping[];

  @Output()
  select = new EventEmitter<Topping>();
  
  get invalid() {
    return (this.parent.hasError('noToppings')&&this.touched);
  }
  exists(topping:Topping) {
    return !!~this.selected.indexOf(topping);
  }

  isActive(topping:Topping) {
    return this.exists(topping);
  }

  onSelect(topping:Topping) {
    this.touched = true;
    this.select.emit(topping);
  }
  constructor() { }

  ngOnInit() {
  }

}
