import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the count by 1 when increase is called', () => {
    component.increase();
    expect(component.count).toBe(1);
  });

  it('should display an alert when count reaches a multiple of 10', () => {
    spyOn(window, 'alert'); 
    component.count = 9;
    component.increase();
    expect(window.alert).toHaveBeenCalledWith('Felicitats! Has arribat a 10 🎉');
  });

  it('should not increase count above 0 when decrease is called and count is 0', () => {
    component.decrease();
    expect(component.count).toBe(0);
  });

  it('should decrease the count by 1 when decrease is called and count is greater than 0', () => {
    component.count = 5;
    component.decrease();
    expect(component.count).toBe(4);
  });

  it('should reset the count to 0 when reset is called', () => {
    component.count = 10;
    component.reset();
    expect(component.count).toBe(12);
  });
});
