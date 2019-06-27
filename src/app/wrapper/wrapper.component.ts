import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  template: `
  <app-header></app-header>
  <app-body></app-body>
  <app-footer></app-footer>
  `,
  styles: []
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
