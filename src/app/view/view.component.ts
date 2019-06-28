import { Component, OnInit, Input } from '@angular/core';
import { merge } from 'rxjs';
import { MarketList } from '../market-list.interface';

interface total {
  name: string;
  upbit_price: string;
  binance_price: string;
  diff: number;
  opening: number;
}

@Component({
  selector: 'app-view',
  template: `
  <app-bookmark></app-bookmark>
  <app-binance (binanceData)="binanceData($event)" ></app-binance>
  <app-upbit (upbitData)="welcome($event)"></app-upbit>
  <ul class="view">
     <ul>
        <ng-container *ngIf="isShow">
               <li>
                   <button>이름</button>
                   <button>upbit</button>
                   <button>binace</button>
                   <button>김치프리미엄</button>
                   <button>전일대비</button>
               </li>
             
             <ul>
               <li class="all-contents" *ngFor="let item of total">
                 <div class="item name">{{item.name}}</div>
                 <div class="item price">{{item.upbit_price}}</div>
                 <div class="item price">{{item.binance_price}}</div>
                 <div class="item kimchi">{{item.diff}}</div>
                 <div class="item pre">{{item.opening}}</div>
               </li>
             </ul>
             </ng-container>
     </ul>
     <div>
           <ul class="#">
               <li>
                   <button>이름</button>
                   <button>upbit</button>
                   <button>binace</button>
                   <button>김치프리미엄</button>
                   <button>전일대비</button>
               </li>
             </ul>
             <ul>
               <li class="book-mark" *ngFor="let item of total">
                 <div class="item name" (click)="isShow=!isShow">{{item.name}}</div>
                 <div class="item price">{{item.upbit_price}}</div>
                 <div class="item price">{{item.binance_price}}</div>
                 <div class="item kimchi">{{item.diff}}</div>
                 <div class="item pre" >{{item.opening}}</div>
               </li>
             </ul>
     </div>
  </ul>
  `,
  styles: [`
  button {
    margin: 0px 5px;
    width: 120px;
    border: 0;
    outline : 0;
    text-decoration: underline;
    background: none;
    color: #949ba7;
  }
  button:hover {
    cursor: pointer;
  }
  .item {
    margin: 5px 5px;
    width: 120px;
    display: inline-block;
    text-decoration: underline;
  }
  .name {
    color: #d19a66;
  }
  .price {
    color: #56b6c2;
  }
  .kimchi {
    color: #98c379;
  }
  `]
})
export class ViewComponent implements OnInit {
  isShow = false;
  foreign;
  list;
  total:total[] = [
  {name:'BTC', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'XRP', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'ETH', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'BCH', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'ADA', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'EOS', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'XLM', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'LTC', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'QTUM', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'TRX', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'BTT', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'ETC', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'NPXS', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'ZEC', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'NEO', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'REP', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'ZIL', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'SNT', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'MTL', upbit_price:"", binance_price:"", diff: 0, opening: 0},
  {name:'OMG', upbit_price:"", binance_price:"", diff: 0, opening: 0}
  ]

  @Input() upbitData;
  constructor() { }

  ngOnInit() {
  }
  binanceData(data) {
    this.foreign = data;
    this.total = this.total.map((item, i) => {
      item.upbit_price = this.list[i].price;
      item.binance_price= this.foreign[i].price;
      item.opening = this.list[i].opening;
      item.diff = +((+item.upbit_price - (+item.binance_price)) / +item.upbit_price * 100).toFixed(2);
      item.opening = +((item.opening - (+item.upbit_price)) / +item.upbit_price * 100).toFixed(2);
      return item;
    })
  }
  

  welcome(list) {
    console.log(list);
    this.list = list;
  }
}