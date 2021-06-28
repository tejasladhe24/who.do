import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  chats = [
    {
      name: 'Abbie W',
      last_msg: 'Lorem',
    },
    { name: 'Tan W', last_msg: 'Lorem' },
    { name: 'Sudanka B', last_msg: 'Lorem' },
    { name: 'Gasper A', last_msg: 'Lorem' },
  ];
}
