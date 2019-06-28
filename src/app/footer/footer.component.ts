import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="miidle">
   <div class="copyright"><p>&copy; 2019 Rich Boys</p></div>

   <div class="rich-boys">
     <span>
       <a href="https://github.com/hbsowo58">
         <img src="https://image.flaticon.com/icons/svg/25/25231.svg">Beom-Sung Heo
       </a>
     </span>

     <span>
       <a href="#">
         <img src="https://image.flaticon.com/icons/svg/25/25231.svg">Jae-Sun Kim
       </a>
     </span>

     <span>
       <a href="#">
         <img src="https://image.flaticon.com/icons/svg/25/25231.svg">Hyun-Jun Yoon
       </a>
     </span>

     <span>
       <a href="https://github.com/codeAmeba">
         <img src="https://image.flaticon.com/icons/svg/25/25231.svg">Soo-Young Jeong
       </a>
     </span>
   </div>

 </footer>
  `,
  styles: [`
  footer{
    text-align: center
  }
 
  .rich-boys {
    display: block;
    margin: 20px auto;
  }
 
  img {
    width: 20px;
    height: auto;
    margin-right: 5px;
  }
 
  span {
    padding-top: 15px;
    margin: 15px;
  }

  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
