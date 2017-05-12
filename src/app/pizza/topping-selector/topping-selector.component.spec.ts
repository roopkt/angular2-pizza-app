import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingSelectorComponent } from './topping-selector.component';

describe('ToppingSelectorComponent', () => {
  let component: ToppingSelectorComponent;
  let fixture: ComponentFixture<ToppingSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppingSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
