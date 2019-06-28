import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `
  <app-bookmark></app-bookmark>
  <app-all></app-all>
  <app-upbit (upbitData)="welcome($event)"></app-upbit>
  <pre>{{list | json}}</pre>
  `,
  styles: []
})
export class ViewComponent implements OnInit {

  list;
  @Input() upbitData;
  constructor() { }

  ngOnInit() {
  }
  welcome(list) {
    console.log('hello')
    this.list = list;
  }
}
