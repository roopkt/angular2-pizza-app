import { Component, Input } from '@angular/core';
import { Pizza } from "app/pizza/pizza.interface";

@Component({
  selector: 'pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent {

   @Input()
   pizzas: Pizza[];

}
