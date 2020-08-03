import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  fontSize = 14;

  onChange(value) {
    this.fontSize = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
