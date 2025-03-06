import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  films :Film[] = FILMS;
  categories:string[] = ['All', 'Action', 'Comedy','Adventure', 'Thriller', 'Crime', 'Anime', 'Mystery'];
  selectedCategory:string = 'All';
  filterFilms?:Film[];

  get filteredFilms():Film[] {
    return this.selectedCategory === 'All' 
    ? this.films
    : this.films.filter(
    f => f.genre === this.selectedCategory
  );
  }

  selectCategorie(category:string):void {
    this.selectedCategory = category;
    console.log("Selected Category"+this.selectedCategory);
  }
}
