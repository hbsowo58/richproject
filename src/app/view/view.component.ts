import { Component, OnInit, Input } from '@angular/core';
import { merge } from 'rxjs';
import { MarketList } from '../market-list.interface';

@Component({
  selector: 'app-view',
  template: `
  <app-bookmark></app-bookmark>
  <app-binance (binanceData)="binanceData($event)" ></app-binance>
  <app-upbit (upbitData)="welcome($event)"></app-upbit>
  <div class="view">
     <div>
           <ul class="active">
               <li>
                   <button>이름</button>
                   <button>현재가(원)</button>
                   <button>김치프리미엄</button>
                   <button>전일대비</button>
               </li>
             </ul>

             <ul>
               <li class="all-contents" *ngFor="let item of total">
                 <div class="item name">{{item.name}}</div>
                 <div class="item price">{{item.upbit_price}}</div>
                 <div class="item price">{{item.binance_price}}</div>
                 <div class="item pre">0.2%</div>
               </li>
             </ul>
     </div>
     <div>
           <ul class="#">
               <li>
                   <button>이름</button>
                   <button>현재가(원)</button>
                   <button>김치프리미엄</button>
                   <button>전일대비</button>
               </li>
             </ul>

             <ul>
               <li class="book-mark" *ngFor="let item of total">
                 <div class="item name">{{item.name}}</div>
                 <div class="item price">{{item.upbit_price}}</div>
                 <div class="item kimchi">{{item.binance_price}}%</div>
                 <div class="item pre">0.2%</div>
               </li>
             </ul>

     </div>
  </div>


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
}
