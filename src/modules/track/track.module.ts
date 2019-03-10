import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackListComponent } from './components/track-list/track-list.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";

@NgModule({
  declarations: [TrackListComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ],
  exports: [
    TrackListComponent
  ]
})
export class TrackModule { }
