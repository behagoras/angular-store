import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent  {
  title = 'platzi-store';
  input = '';
  array = ['🍎', '🍏', '🍇', '🍌', '🍑'];
  power = 10;
  addItem() {
    this.array.push(this.title)
  }
  deleteItem(index:number) {
    this.array.splice(index, 1)
  }
}
