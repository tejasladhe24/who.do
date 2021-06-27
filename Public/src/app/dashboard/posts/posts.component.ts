import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private dashBoardComponent: DashboardComponent) {}

  ngOnInit(): void {
    this.collectPosts();
  }

  content = this.dashBoardComponent.content;

  posts: any = [];

  collectPosts() {
    for (let i = 0; i < this.content.length; i++) {
      const user = this.content[i];
      const story = user.story;

      for (let j = 0; j < user.posts.length; j++) {
        const post = user.posts[j];
        if (post.type == 0) {
          this.posts.push({
            type: post.type,
            name: user.name,
            img: post.img,
            date: post.date,
            story_read: story.read,
          });
        } else if (post.type == 1) {
          this.posts.push({
            type: post.type,
            name: user.name,
            heading: post.heading,
            text: post.text,
            date: post.date,
            story_read: story.read,
          });
        }
      }
    }
    console.log(this.posts);
  }
}
