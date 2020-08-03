import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit{
  calculate() {
    switch (this.operator) {
      case '+': this.output = this.first + this.second;
        break;
      case '-': this.output = this.first - this.second;
        break;
      case '*': this.output = this.first * this.second;
        break;
      case '/': this.output = this.first / this.second;
        break;
    }
  }
  output: number;
  first: number;
  second: number;
  operator = '+';

  onFirstChange(value) {
    this.first = Number(value);
  }

  onSecondChange(value) {
    this.second = Number(value);
  }

  onSelectChange(value) {
    this.operator = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
