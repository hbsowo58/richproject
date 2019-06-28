import { Component, OnInit, Input } from '@angular/core';
import { merge } from 'rxjs';

@Component({
  selector: 'app-view',
  template: `
  <app-bookmark></app-bookmark>
  <app-all></app-all>
  <app-binance (binanceData)="binanceData($event)" ></app-binance>
  <app-upbit (upbitData)="welcome($event)"></app-upbit>
  <pre>{{total| json}}</pre>
  `,
  styles: []
})
export class ViewComponent implements OnInit {
  foreign;
  list;
  total = [{name:'btc', upbit_price:"", binance_price:""},
  {name:'XRP', upbit_price:"", binance_price:""},
  {name:'ETH', upbit_price:"", binance_price:""},
  {name:'BCH', upbit_price:"", binance_price:""},
  {name:'ADA', upbit_price:"", binance_price:""},
  {name:'EOS', upbit_price:"", binance_price:""},
  {name:'XLM', upbit_price:"", binance_price:""},
  {name:'LTC', upbit_price:"", binance_price:""},
  {name:'QTUM', upbit_price:"", binance_price:""},
  {name:'TRX', upbit_price:"", binance_price:""},
  {name:'BTT', upbit_price:"", binance_price:""},
  {name:'ETC', upbit_price:"", binance_price:""},
  {name:'NPXS', upbit_price:"", binance_price:""},
  {name:'ZEC', upbit_price:"", binance_price:""},
  {name:'NEO', upbit_price:"", binance_price:""},
  {name:'REP', upbit_price:"", binance_price:""},
  {name:'ZIL', upbit_price:"", binance_price:""},
  {name:'SNT', upbit_price:"", binance_price:""},
  {name:'MTL', upbit_price:"", binance_price:""},
  {name:'OMG', upbit_price:"", binance_price:""}
  ]
  @Input() upbitData;
  constructor() { }

  ngOnInit() {
    // this.merge();
  }
  binanceData(data) {
    this.foreign = data;
    this.total = this.total.map((item, i) => {
      item.upbit_price = this.list[i].price;
      item.binance_price= this.foreign[i].price;
      return item;
    })
  }

  welcome(list) {
    console.log('hello')
    this.list = list;
    
  }

  // merge() {
  //   this.total = [this.list, this.foreign]
  // }

}
