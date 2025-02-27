import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  films : Film[] = FILMS;
  constructor(private router: Router) {}

  goToMovieList() {
    this.router.navigate(['/movie-list']);
  }


}
