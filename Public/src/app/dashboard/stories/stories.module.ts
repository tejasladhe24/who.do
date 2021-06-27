import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories.component';
import { StoriesService } from './stories.service';

@NgModule({
  declarations: [StoriesComponent],
  imports: [CommonModule],
  providers: [StoriesService],
  exports: [StoriesComponent],
})
export class StoriesModule {}
