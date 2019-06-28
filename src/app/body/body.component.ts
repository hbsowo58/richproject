import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  template: `
  <app-view></app-view>
  <app-aside></app-aside>
  `,
  styles: [`
  `]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
