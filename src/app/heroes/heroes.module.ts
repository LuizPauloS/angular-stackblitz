import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from './heroes.service';
import { NewComponent } from './new/new.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewComponent, DetailComponent, ListComponent],
  providers: [HeroesService]
})
export class HeroesModule { }