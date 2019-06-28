import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  template: `
  <app-nav></app-nav>
  <app-view></app-view>
  <app-aside></app-aside>
  <app-upbit></app-upbit>
  `,
  styles: [`
  `]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
