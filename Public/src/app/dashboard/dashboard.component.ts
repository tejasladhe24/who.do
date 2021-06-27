import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  content: any = [
    {
      name: 'Abbie W',
      img: '',
      story: {
        read: false,
        img: '',
      },
      posts: [
        {
          type: 0,
          img: '../../assets/img/posts/img (1).jpg',
          date: new Date().setDate(new Date().getDate() - 100),
        },
        {
          type: 0,
          img: '../../assets/img/posts/img (2).jpg',
          date: new Date().setDate(new Date().getDate() - 200),
        },
        {
          type: 0,
          img: '../../assets/img/posts/img (3).jpg',
          date: new Date().setDate(new Date().getDate() - 300),
        },
      ],
    },
    {
      name: 'Tan W',
      img: '',
      story: {
        read: false,
        img: '',
      },
      posts: [
        {
          type: 0,
          img: '../../assets/img/posts/img (4).jpg',
          date: new Date().setDate(new Date().getDate() - 400),
        },
        {
          type: 0,
          img: '../../assets/img/posts/img (5).jpg',
          date: new Date().setDate(new Date().getDate() - 500),
        },
        {
          type: 0,
          img: '../../assets/img/posts/img (6).jpg',
          date: new Date().setDate(new Date().getDate() - 600),
        },
      ],
    },
    {
      name: 'Sudanka B',
      img: '',
      story: {
        read: false,
        img: '',
      },
      posts: [
        {
          type: 0,
          img: '../../assets/img/posts/img (7).jpg',
          date: new Date().setDate(new Date().getDate() - 700),
        },
        {
          type: 0,
          img: '../../assets/img/posts/img (8).jpg',
          date: new Date().setDate(new Date().getDate() - 800),
        },
        {
          type: 0,
          img: '../../assets/img/posts/img (9).jpg',
          date: new Date().setDate(new Date().getDate() - 900),
        },
      ],
    },
    {
      name: 'Gasper A',
      img: '',
      story: {
        read: true,
        img: '',
      },
      posts: [
        {
          type: 0,
          img: '../../assets/img/posts/img (10).jpg',
          date: new Date().setDate(new Date().getDate() - 1000),
        },
        {
          type: 0,
          img: '../../assets/img/posts/img (11).jpg',
          date: new Date().setDate(new Date().getDate() - 1100),
        },
        {
          type: 0,
          img: '../../assets/img/posts/img (12).jpg',
          date: new Date().setDate(new Date().getDate() - 1200),
        },
      ],
    },
    {
      name: 'Gasper A',
      img: '',
      story: {
        read: true,
        img: '',
      },
      posts: [
        {
          type: 1,
          heading: 'Lorem Ipsum',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum aliquid nam assumenda quidem nobis! Veritatis labore eaque quae hic ab.',
          date: new Date().setDate(new Date().getDate() - 1300),
        },
        {
          type: 1,
          heading: 'Lorem Ipsum',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum aliquid nam assumenda quidem nobis! Veritatis labore eaque quae hic ab.',
          date: new Date().setDate(new Date().getDate() - 1400),
        },
        {
          type: 1,
          heading: 'Lorem Ipsum',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum aliquid nam assumenda quidem nobis! Veritatis labore eaque quae hic ab.',
          date: new Date().setDate(new Date().getDate() - 1500),
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
