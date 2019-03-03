import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackListComponent } from './components/track-list/track-list.component';

@NgModule({
  declarations: [TrackListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TrackListComponent
  ]
})
export class TrackModule { }
