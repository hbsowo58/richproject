import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
interface marketList {
  name: string
}

interface marketPrice {
  name: string;
  price: number;
}
@Component({
  selector: 'app-upbit',
  template: `
  `,
  styles: []
})

export class UpbitComponent implements OnInit {

  @Output() upbitData = new EventEmitter();

  marketList;
  marketPrice:marketList[];
  newMarketPrice;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    // this.marketCoinList();
    this.marketCoin('KRW','BTC');

    setInterval(this.marketCoin.bind(this) , 30000);

  }

  // marketCoinList(){
  //   const request = new XMLHttpRequest();
  //   const url = 'https://api.upbit.com/v1/market/all';
  
  //   request.open("GET", url, false);
  //   request.send();
  //   this.marketList = JSON.parse(request.responseText);
  //   this.marketList = this.marketList.find()

  //  }

   marketCoin(market:string ,coin:string){
    
    const url = 'https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-XRP,KRW-ETH,KRW-BCH,KRW-ADA,KRW-EOS,KRW-XLM,KRW-LTC,KRW-QTUM,KRW-TRX,KRW-BTT,KRW-ETC,KRW-NPXS,KRW-ZEC,KRW-NEO,KRW-REP,KRW-ZIL,KRW-SNT,KRW-MTL,KRW-OMG';
    this.http.get(url).subscribe(data => {
      this.newMarketPrice = data;
     this.marketPrice = this.newMarketPrice.map(item => this.newMarketPrice = { "name": item.market, "price": item.trade_price })
      this.upbitData.emit(this.marketPrice);
    });
   }

   

}
