import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterActionsComponentComponent } from './counter-actions-component.component';

describe('CounterActionsComponentComponent', () => {
  let component: CounterActionsComponentComponent;
  let fixture: ComponentFixture<CounterActionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterActionsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterActionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
