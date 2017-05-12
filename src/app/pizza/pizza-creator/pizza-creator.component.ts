import { PizzaService } from '../pizza.service';
import { Component, OnInit } from '@angular/core';
import { Pizza, Topping } from "app/pizza/pizza.interface";

@Component({
  selector: 'pizza-creator',
  templateUrl: './pizza-creator.component.html',
  styleUrls: ['./pizza-creator.component.css']
})
export class PizzaCreatorComponent implements OnInit {
  pizzas$ = this.pizzaService.select<Pizza[]>('pizzas');
  toppings$ = this.pizzaService.select<Topping[]>('toppings');

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {

  }

  addPizza(event: any) {
    this.pizzaService.addPizza(event);
  }

}
