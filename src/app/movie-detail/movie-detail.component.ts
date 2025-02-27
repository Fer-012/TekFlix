import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  filmId?: any;
  films : Film[] = FILMS;
  film?: Film;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    console.log('In ngOnInit');
    this.route.paramMap.subscribe(params => {
      this.filmId = this.route.snapshot.paramMap.get('id');
      console.log('Film ID: ', this.filmId);
      this.film = this.films.find(f => f.id == this.filmId);
      console.log('Film: ', this.film);
    });
  }

}
