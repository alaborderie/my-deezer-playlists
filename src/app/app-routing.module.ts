import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "../modules/user/pages/home-page/home-page.component";
import {PlaylistPageComponent} from "../modules/playlist/pages/playlist-page/playlist-page.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'playlist/:playlistId', component: PlaylistPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
