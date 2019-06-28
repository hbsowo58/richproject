import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <p>KRW (Upbit) <> BTC (Binance)</p>
    <a>고/저가</a>
    <a>채팅</a>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
