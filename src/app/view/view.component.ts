import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `
  <app-bookmark></app-bookmark>
  <app-all></app-all>


  <app-binance (binanceData)="binanceData($event)" ></app-binance>
  {{foreign | json}}
  <app-upbit (upbitData)="welcome($event)"></app-upbit>
  <pre>{{list | json}}</pre>
  `,
  styles: []
})
export class ViewComponent implements OnInit {
  foreign;

  list;
  @Input() upbitData;
  constructor() { }

  ngOnInit() {
  }
  binanceData(data) {
    this.foreign = data;

  welcome(list) {
    console.log('hello')
    this.list = list;
  }
}
