import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film, FILMS } from '../models/film';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FilmService } from '../servies/film.service';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  filmId?: number;
  films: Film[] = FILMS;
  film?: Film;
  safeTrailerUrl!: SafeResourceUrl;
  showModal = false;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private filmsService: FilmService
  ) {}

  ngOnInit() {
    console.log('In ngOnInit');
    this.route.paramMap.subscribe(params => {
      this.filmId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      console.log('Film ID: ', this.filmId);
      this.film = this.filmsService.getFilmById(this.filmId);
      console.log('Film: ', this.film);
    });
  }

  openModal() {
    if (this.film && this.film.trailerUrl) {
      const embedUrl = this.film.trailerUrl.replace('watch?v=', 'embed/');
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
