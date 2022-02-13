import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    TopNavBarComponent,
    BreadcrumbComponent
  ],
  exports: [TopNavBarComponent, BreadcrumbComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
