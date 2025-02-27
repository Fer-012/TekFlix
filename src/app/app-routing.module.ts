import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path : '',redirectTo : 'home',pathMatch : 'full'},
  {path : 'home',component : HomeComponent},
  {path : 'movie-list',component : MovieListComponent},
  {path : 'movie-details/:id',component: MovieDetailComponent},
  {path : '**',component: NotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
