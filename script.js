let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?" , "");
let personalMovieDB = {
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  private:false  
};
const a = prompt("Один из последних просмотренный фильмов?", ""),
      c = prompt("На сколько оцените его?",""),
      b = prompt("Один из последних просмотренный фильмов?", ""),
      d = prompt("На сколько оцените его?","");
personalMovieDB.movies[a] = c ;
personalMovieDB.movies[b] = d ;
console.log(personalMovieDB);
