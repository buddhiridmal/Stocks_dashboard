import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [
    TopNavBarComponent,
    BreadcrumbComponent,
    NewsComponent
  ],
    exports: [TopNavBarComponent, BreadcrumbComponent, NewsComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
