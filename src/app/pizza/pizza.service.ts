import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Pizza, Topping } from "app/pizza/pizza.interface";

export interface State {
  pizzas: Pizza[],
  toppings: Topping[]
}

const state: State = {
  pizzas: [
    { name: 'New Yorker', toppings: ['Bacon', 'Pepperoni', 'Ham', 'Mushrooms'] },
    { name: 'Hot & Spicy', toppings: ['Jalapenos', 'Herbs', 'Pepperoni', 'Chicken'] },
    { name: 'Hawaiian', toppings: ['Ham', 'Pineapple', 'Sweetcorn'] }
  ],
  toppings: [
    'Bacon', 'Pepperoni', 'Mushrooms', 'Herbs',
    'Chicken', 'Pineapple', 'Ham', 'Jalapenos'
  ]
};

@Injectable()
export class PizzaService {
  private subject = new BehaviorSubject<State>(state);
  store = this.subject.asObservable().distinctUntilChanged();
  constructor() {

  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  addPizza(pizza: Pizza) {
    const value = this.subject.value;
    this.subject.next({...value, pizzas:[...value.pizzas, pizza]});
  }
}
