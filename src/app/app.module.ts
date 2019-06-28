import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ViewComponent } from './view/view.component';
import { AsideComponent } from './aside/aside.component';
import { AllComponent } from './all/all.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { UpbitComponent } from './upbit/upbit.component';
import { BinanceComponent } from './binance/binance.component';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavComponent,
    ViewComponent,
    AsideComponent,
    AllComponent,
    BookmarkComponent,
    UpbitComponent,
    BinanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
