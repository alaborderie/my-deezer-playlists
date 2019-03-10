import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {RouterModule} from "@angular/router";
import {TrackModule} from "../track/track.module";
import {UtilsModule} from "../utils/utils.module";

@NgModule({
  declarations: [PlaylistListComponent, PlaylistDetailComponent, PlaylistPageComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule,
    TrackModule,
    UtilsModule
  ],
  exports: [PlaylistListComponent]
})
export class PlaylistModule { }
