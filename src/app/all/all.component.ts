import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  price: number;
}

@Component({
  selector: 'app-all',
  template: `
  <ul class="active">
  <li>
      <button>이름</button>
      <button>현재가(원)</button>
      <button>김치프리미엄</button>
      <button>전일대비</button>
  </li>
</ul>

<ul>
<li *ngFor="let item of items" class="todo-item">
    <!-- <div class="item name">ETHBTC</div>
    <div class="item price">39000</div>
    <div class="item kimchi">12%</div>
    <div class="item pre">0.2%</div> -->
    {{item.name}} {{item.price}}
  </li>
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
export class AllComponent implements OnInit {
  items: Item[] = [
    {
      name: 'KRW-BTC',
      price: 13945000
    },
    {
      name: 'KRW-XRP',
      price: 505
    },
    {
      name: 'KRW-ETH',
      price: 370350
    },
    {
      name: 'KRW-BCH',
      price: 509000
    },
    {
      name: 'KRW-ADA',
      price: 107
    },
    {
      name: 'KRW-EOS',
      price: 7260
    },
    {
      name: 'KRW-XLM',
      price: 136
    },
    {
      name: 'KRW-LTC',
      price: 143600
    },
    {
      name: 'KRW-QTUM',
      price: 5545
    },
    {
      name: 'KRW-TRX',
      price: 40.2
    },
    {
      name: 'KRW-BTT',
      price: 1.48
    },
    {
      name: 'KRW-ETC',
      price: 9595
    },
    {
      name: 'KRW-NPXS',
      price: 1.03
    },
    {
      name: 'KRW-ZEC',
      price: 139950
    },
    {
      name: 'KRW-NEO',
      price: 21420
    },
    {
      name: 'KRW-REP',
      price: 20390
    },
    {
      name: 'KRW-ZIL',
      price: 20.7
    },
    {
      name: 'KRW-SNT',
      price: 34.1
    },
    {
      name: 'KRW-MTL',
      price: 643
    },
    {
      name: 'KRW-OMG',
      price: 2990
    }
   ];



  constructor() { }

  ngOnInit() {
  }

}
