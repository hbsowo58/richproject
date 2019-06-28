import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `
  <app-bookmark></app-bookmark>
  <app-all></app-all>

  <app-binance (binanceData)="binanceData($event)" ></app-binance>
  {{foreign | json}}
  `,
  styles: []
})
export class ViewComponent implements OnInit {
  foreign;

  constructor() { }

  ngOnInit() {
  }
  binanceData(data) {
    this.foreign = data;
  }
}
