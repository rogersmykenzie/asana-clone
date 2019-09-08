import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() { 
    window.addEventListener("scroll", (function(event) {
      if(window.scrollY < 5) {
        document.getElementsByClassName("nav-container")[0].classList.remove("not-at-top");
      } else {
        document.getElementsByClassName("nav-container")[0].classList.add("not-at-top");
      }
    }).bind(this))
  }

  ngOnInit() {
    
  }

}
