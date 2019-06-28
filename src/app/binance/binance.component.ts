import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketList } from '../market-list.interface';

@Component({
  selector: 'app-binance',
  template: `
  `,
  styles: []
})
export class BinanceComponent implements OnInit {
  @Output() binanceData = new EventEmitter();
  count = 0;
  data: MarketList[][] = [[
    { name: 'BTC', price: 13500000 },
    { name: 'XRP', price: 476 },
    { name: 'ETH', price: 349000 },
    { name: 'BCH', price: 480470 },
    { name: 'EOS', price: 6800 },
    { name: 'ADA', price: 100 },
    { name: 'XLM', price: 130 },
    { name: 'QTUM', price: 5100 },
    { name: 'LTC', price: 134200 },
    { name: 'TRX', price: 37.9 },
    { name: 'BTT', price: 1.3 },
    { name: 'ETC', price: 9060 },
    { name: 'NPXS', price: 1.05 },
    { name: 'ZEC', price: 127910 },
    { name: 'XEM', price: 100 },
    { name: 'NEO', price: 20400 },
    { name: 'REP', price: 19200 },
    { name: 'MTL', price: 600 },
    { name: 'SNT', price: 32 },
    { name: 'POLY', price: 93 },
    { name: 'OMG', price: 2770 },
  ],
  [
    { name: 'BTC', price: 13513570 },
    { name: 'XRP', price: 470 },
    { name: 'ETH', price: 349120 },
    { name: 'BCH', price: 480470 },
    { name: 'EOS', price: 6800 },
    { name: 'ADA', price: 100 },
    { name: 'XLM', price: 130 },
    { name: 'QTUM', price: 5100 },
    { name: 'LTC', price: 134200 },
    { name: 'TRX', price: 37.9 },
    { name: 'BTT', price: 1.3 },
    { name: 'ETC', price: 9102 },
    { name: 'NPXS', price: 1.05 },
    { name: 'ZEC', price: 127923 },
    { name: 'XEM', price: 100 },
    { name: 'NEO', price: 20400 },
    { name: 'REP', price: 19230 },
    { name: 'MTL', price: 600 },
    { name: 'SNT', price: 32 },
    { name: 'POLY', price: 93 },
    { name: 'OMG', price: 2770 },
  ],[
    { name: 'BTC', price: 13590190 },
    { name: 'XRP', price: 471 },
    { name: 'ETH', price: 349021 },
    { name: 'BCH', price: 480479 },
    { name: 'EOS', price: 6812 },
    { name: 'ADA', price: 100 },
    { name: 'XLM', price: 130 },
    { name: 'QTUM', price: 5103 },
    { name: 'LTC', price: 134201 },
    { name: 'TRX', price: 37.9 },
    { name: 'BTT', price: 1.3 },
    { name: 'ETC', price: 9060 },
    { name: 'NPXS', price: 1.05 },
    { name: 'ZEC', price: 127910 },
    { name: 'XEM', price: 100 },
    { name: 'NEO', price: 20400 },
    { name: 'REP', price: 19200 },
    { name: 'MTL', price: 600 },
    { name: 'SNT', price: 32 },
    { name: 'POLY', price: 93 },
    { name: 'OMG', price: 2770 },
  ]];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.binanceData.emit(this.data[0]);
    setInterval(() => {
    this.binanceData.emit(this.data[this.count])
    if (this.count === 2) {
      this.count = 0;
      return;
    }
    this.count++;
  } , 3000);
  }

}
