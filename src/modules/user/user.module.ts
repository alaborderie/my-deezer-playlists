import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {PlaylistModule} from "../playlist/playlist.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    PlaylistModule
  ]
})
export class UserModule { }
