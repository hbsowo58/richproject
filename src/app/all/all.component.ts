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
    <app-binance></app-binance>
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
  items: Item[] 





  constructor() { }

  ngOnInit() {
  }

}
