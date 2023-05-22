class Movie {
constructor (title, studio, rating)
{
this.title = title;
this.studio = studio;
this.rating = rating || "PG";
}
 getPG(movies) {
				return movies.filter(Movie => Movie.rating === "PG" || Movie.rating === null) .map(movie => ({ ...movie, rating: "PG" }));
  }
}

let movies = [ { title: "Jailer", studio: "Sun Pictures", rating: "PG" },
  { title: "Kabali", studio: "V Creations", rating: "PG-13" },
  { title: "Kochadaiyaan", studio: "EROS", rating: null },
  { title: "2.o", studio: "Lyca", rating: "R" },
  { title: "Sivaji", studio: "AVM", rating: "PG" },
  { title: "Baasha", studio: "Satya Jothy", rating: "R" },
  { title: "Casino Royale", studio: "Eon Productions", rating: "PG-13" }];
let movieins = new Movie();
let pgMovie = movieins.getPG(movies);
console.log(pgMovie);


// Output Link: https://jsfiddle.net/3ru2zm7n/4/
