import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film, FILMS } from '../models/film';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  // baseUrl = 'http://localhost:8080/films';
  films :Film[] = FILMS;
  constructor() { }
  
  // addFilm(film: Film) {
  //   return this.http.post(this.baseUrl, film);
  // }

  // getFilms() : Observable<Film[]> {
  //   return this.http.get<Film[]>(this.baseUrl);
  // }

  getAllFilms(){
    return FILMS; 
  }

  getFilmById(id: number){
    return this.films.find(f => f.id === id);
  }

  //assancronous : 
  //sancronous : 

}
