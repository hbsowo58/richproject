import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-wrapper></app-wrapper>
  <app-binance></app-binance>
  `,
  styles: []
})
export class AppComponent {
  title = 'rich';
}
