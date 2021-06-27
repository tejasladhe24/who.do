import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard.component';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
})
export class StoriesComponent implements OnInit {
  constructor(private dashBoardComponent: DashboardComponent) {}

  ngOnInit(): void {
    this.collectStories();
  }

  stories: any = [];

  content = this.dashBoardComponent.content;

  collectStories() {
    for (let i = 0; i < this.content.length; i++) {
      const user = this.content[i];
      const story = user.story;
      this.stories.push({
        name: user.name,
        img: story.img,
        read: story.read,
      });
    }
    // console.log(this.stories);
  }
}
