import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';
import { PlaylistPageComponent } from './pages/playlist-page/playlist-page.component';

@NgModule({
  declarations: [PlaylistListComponent, PlaylistDetailComponent, PlaylistPageComponent],
  imports: [
    CommonModule
  ],
  exports: [PlaylistListComponent]
})
export class PlaylistModule { }
