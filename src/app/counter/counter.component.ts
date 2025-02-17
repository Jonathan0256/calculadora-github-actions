import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = 0;

  increase() {
    this.count++;
    if (this.count % 10 == 0) {
      alert(`Felicitats! Has arribat a ${this.count} 🎉`);
    }
  }

  decrease(){
    if (this.count > 0) {
      this.count = this.count - 1; 
    }
  }

  reset() {
    this.count = 0;
  }

  

}
