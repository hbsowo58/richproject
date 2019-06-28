import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-wrapper></app-wrapper>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'rich';
  isShow = false;

  ngOnInit() {
  }
}
