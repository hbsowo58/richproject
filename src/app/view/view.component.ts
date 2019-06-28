import { Component, OnInit, Input } from '@angular/core';
import { merge } from 'rxjs';
import { MarketList } from '../market-list.interface';

interface total {
  name: string;
  upbit_price: string;
  binance_price: string;
  diff: number;
  opening: number;
  star:boolean;
}

@Component({
  selector: 'app-view',
  template: `
  <app-bookmark></app-bookmark>
  <app-binance (binanceData)="binanceData($event)" ></app-binance>
  <app-upbit (upbitData)="welcome($event)"></app-upbit>
  <ng-container *ngIf = "isShow else loading">
  <ul class="view">
     <ul>
        <ng-container>
               <li>
                   <button>이름</button>
                   <button>upbit</button>
                   <button>binace</button>
                   <button>김치프리미엄</button>
                   <button>전일대비</button>
               </li>
             
               <ul>
               <li class="all-contents" *ngFor="let item of total; index as i" [class]="i % 2 == 0 ? 'book-mark shadow' : 'book-mark black'">
               <ng-container *ngIf="item.star">
                 <div class="item name" (click)="item.star=!item.star">{{item.name}}</div>
                 <div class="item price">{{item.upbit_price}}</div>
                 <div class="item price">{{item.binance_price}}</div>
                 <div class="item kimchi">{{item.diff}}</div>
                 <div class="item pre">{{item.opening}}</div>
                 </ng-container>
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
               <li class="book-mark" *ngFor="let item of total; index as i" [class]="i % 2 == 0 ? 'book-mark shadow' : 'book-mark black'"> 
                 <div class="item name" (click)="item.star=!item.star">{{item.name}}</div>
                 <div class="item price">{{item.upbit_price}}</div>
                 <div class="item price">{{item.binance_price}}</div>
                 <div class="item kimchi"  [ngClass]="item.diff > 0 ? {up: true} : {down: true}">{{item.diff}}</div>
                 <div class="item pre up" [ngClass]="item.opening > 0 ? {up: true} : {down: true}">{{item.opening}}</div>
               </li>
             </ul>
     </div>
  </ul>
  </ng-container>
  
  <ng-template #loading>
  <app-spinner></app-spinner>
  </ng-template>
  `,
  styles: [`

  .view{

    text-align: center;
  }

  .shadow, li{
    background-color : #24282E;
  }

  .black {
    background-color : #20232A;
  }

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
  .pre {
    color: #ABB2BE;
  }

  .up {
    color : #98C379;
  }
  .down {
    color : #C7636C;
  }
  `]
})

export class ViewComponent implements OnInit {
  isShow = false;
  foreign;
  list;
  total:total[] = [
  {name:'BTC', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'XRP', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'ETH', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'BCH', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'ADA', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'EOS', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'XLM', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'LTC', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'QTUM', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'TRX', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'BTT', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'ETC', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'NPXS', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'ZEC', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'NEO', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'REP', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'ZIL', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'SNT', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'MTL', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false},
  {name:'OMG', upbit_price:"", binance_price:"", diff: 0, opening: 0, star:false}
  ]

  @Input() upbitData;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.isShow = true, 4000);
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