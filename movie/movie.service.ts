import { API_KEY, moviesTitles } from "../const"
import axios from 'axios'
import { Movie } from "./movie.dto"

export const getAllMovies = async (): Promise<Movie[]> => {
    const movies = await Promise.all(
        moviesTitles.map(async m => (await axios.get(`http://www.omdbapi.com/?t=${m}&apikey=${API_KEY}`)).data)
    )
    return movies.map(movie => new Movie(movie))
}

export const getMovieById = async (id: string): Promise<Movie> => {
    const movie = (await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)).data

    if (movie.Error) throw new Error(movie.Error)
    return new Movie(movie);
}

export const getSearchedMovie = async (value: string): Promise<Movie> => {
    const movie = (await axios.get(`http://www.omdbapi.com/?t=${value}&apikey=${API_KEY}`)).data

    if (movie.Error) throw new Error(movie.Error)
    return new Movie(movie);
}

export const movieService = {
    getAllMovies,
    getMovieById,
    getSearchedMovie
}