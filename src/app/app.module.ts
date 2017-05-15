import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PizzaCreatorComponent } from './pizza/pizza-creator/pizza-creator.component';
import { PizzaFormComponent } from './pizza/pizza-form/pizza-form.component';
import { ToppingSelectorComponent } from './pizza/topping-selector/topping-selector.component';
import { PizzaNameComponent } from './pizza/pizza-name/pizza-name.component';
import { PizzaSelectedComponent } from './pizza/pizza-selected/pizza-selected.component';
import { PizzaButtonComponent } from './pizza/pizza-button/pizza-button.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaCreatorComponent,
    PizzaFormComponent,
    ToppingSelectorComponent,
    PizzaNameComponent,
    PizzaSelectedComponent,
    PizzaButtonComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
