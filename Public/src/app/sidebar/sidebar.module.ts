import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule],
  providers: [SidebarService],
  exports: [SidebarComponent],
})
export class SidebarModule {}
