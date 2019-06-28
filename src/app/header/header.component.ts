import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
    <h1>Rich Boys</h1>
  </header>
  `,
  styles: [`
  header {
    background-color: #17191d;
  }
  
  h1 {
    color: white;
  }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
