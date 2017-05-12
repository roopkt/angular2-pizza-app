import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pizza-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pizza-name.component.html',
  styleUrls: ['./pizza-name.component.css']
})
export class PizzaNameComponent   {
  @Input()
  parent:FormGroup;
  
  get invalid() {
    return (
      this.parent.get('name').hasError('required') &&
      this.parent.get('name').touched
    );
  }

}
