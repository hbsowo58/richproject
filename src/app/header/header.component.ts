import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
  <div class="cover"></div>
  <app-nav></app-nav>
  </header>
  `,
  styles: [`
  header {
    background-color : #20232A;
    text-align: center;
  }
  
  h1 {
    color: white;
    font-size: 35px;
  }

  .cover {
    background-image: url("../../assets/richboys.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-height: 300px;
  }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
