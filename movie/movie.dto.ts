export interface IMovieResponse {
    imdbID: string,
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string
    BoxOffice: string,
    DVD: string,
    Metascore: string,
    Production: string,
    Ratings: { Source: string, Value: string }[],
    Response: string
    Type: string,
    Website: string,
    imdbRating: string,
    imdbVotes: string
}

export class Movie {
    id: string;
    title: string;
    img: string;
    description: string;
    imdbRating: number;
    type: string;
    released: string;
    language: string;
    constructor(movie: IMovieResponse) {
        this.id = movie.imdbID;
        this.title = movie.Title;
        this.description = movie.Plot;
        this.imdbRating = +movie.imdbRating;
        this.img = movie.Poster;
        this.type = movie.Type;
        this.released = movie.Released;
        this.language = movie.Language;
    }
}
