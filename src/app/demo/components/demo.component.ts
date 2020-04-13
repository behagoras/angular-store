import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  title = 'platzi-store';
  input = '';
  array = ['🍎', '🍏', '🍇', '🍌', '🍑'];
  power = 10;
  addItem() {
    this.array.push(this.title)
  }
  deleteItem(index: number) {
    this.array.splice(index, 1)
  }
}
