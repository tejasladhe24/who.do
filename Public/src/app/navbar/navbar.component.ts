import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  setActive(event: any) {
    var clicked = event?.target;
    console.log(clicked.tagName);
    if (clicked.tagName == 'LI') {
      var active = document.getElementsByClassName('nav-active')[0];
      active.classList.remove('nav-active');
      clicked.classList.add('nav-active');
    }
  }
}
