import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  template: `
  <app-bookmark></app-bookmark>
  <app-all></app-all>
  `,
  styles: []
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
