import { Component, OnInit, Input } from '@angular/core';
import { merge } from 'rxjs';
import { MarketList } from '../market-list.interface';

interface total {
  name: string;
  upbit_price: string;
  binance_price: string;
  diff: number;
}

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
  total:total[] = [{name:'btc', upbit_price:"", binance_price:"", diff: 0},
  {name:'XRP', upbit_price:"", binance_price:"", diff: 0},
  {name:'ETH', upbit_price:"", binance_price:"", diff: 0},
  {name:'BCH', upbit_price:"", binance_price:"", diff: 0},
  {name:'ADA', upbit_price:"", binance_price:"", diff: 0},
  {name:'EOS', upbit_price:"", binance_price:"", diff: 0},
  {name:'XLM', upbit_price:"", binance_price:"", diff: 0},
  {name:'LTC', upbit_price:"", binance_price:"", diff: 0},
  {name:'QTUM', upbit_price:"", binance_price:"", diff: 0},
  {name:'TRX', upbit_price:"", binance_price:"", diff: 0},
  {name:'BTT', upbit_price:"", binance_price:"", diff: 0},
  {name:'ETC', upbit_price:"", binance_price:"", diff: 0},
  {name:'NPXS', upbit_price:"", binance_price:"", diff: 0},
  {name:'ZEC', upbit_price:"", binance_price:"", diff: 0},
  {name:'NEO', upbit_price:"", binance_price:"", diff: 0},
  {name:'REP', upbit_price:"", binance_price:"", diff: 0},
  {name:'ZIL', upbit_price:"", binance_price:"", diff: 0},
  {name:'SNT', upbit_price:"", binance_price:"", diff: 0},
  {name:'MTL', upbit_price:"", binance_price:"", diff: 0},
  {name:'OMG', upbit_price:"", binance_price:"", diff: 0}
  ]

  foreign: MarketList[];
  list: MarketList[];
  total = []
  @Input() upbitData;
  constructor() { }

  ngOnInit() {
  }
  binanceData(data) {
    this.foreign = data;
    this.total = this.total.map((item, i) => {
      item.upbit_price = this.list[i].price;
      item.binance_price= this.foreign[i].price;
      item.diff = (+item.upbit_price - (+item.binance_price)) / +item.upbit_price * 100
      return item;
    })
  }
    
  }
  binanceData(data) {
    this.foreign = data;
  }

  welcome(list) {
    console.log('hello')
    this.list = list;
    
  }
}
