import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
window.onscroll = function() {scrollFunction(); };

function scrollFunction() {
 if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   document.getElementById('navbar').style.top = '0';
 } else {
   document.getElementById('navbar').style.top = '-600px';
 }
}

window.scroll({
  top: 1000,
  behavior: 'smooth'
});
