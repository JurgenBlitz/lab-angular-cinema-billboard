import { Injectable } from '@angular/core';
import movies from './sample-movies';

@Injectable()
export class MoviesService {
  movieList: Array<Object> = [
    {
      id: Number,
      title: String,
      poster: String,
      synopsis: String,
      genres: [String],
      year: Number,
      director: String,
      actors: [String],
      hours: [String],
      room: Number
    }
  ];
  constructor() {}

  getMovies() {
    console.log("this is our list of movies");
    return this.movieList;
  }
  getMovie(id) {
    return this.movieList.filter(movie => {
      if (movie["id"] === id) {
        return movie;
      }
    });
  }
}
