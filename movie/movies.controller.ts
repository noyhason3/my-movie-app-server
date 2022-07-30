import { Request, Response } from 'express';
import { movieService } from "./movie.service";

export const getMovies = async (req: Request, res: Response) => {
    try {
        const movies = await movieService.getAllMovies()
        res.status(200).send(movies)
    } catch (err: any) {
        res.status(500).send(JSON.stringify(err))
    }
}

export const getMovieById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const movie = await movieService.getMovieById(id)
        res.status(200).send(movie)
    } catch (err: any) {
        res.status(400).send(JSON.stringify(err))
    }
}

export const getSearchedMovie = async (req: Request, res: Response) => {
    try {
        const value = req.params.searchedByValue
        const movie = await movieService.getSearchedMovie(value)
        res.status(200).send(movie)
    } catch (err: any) {
        res.status(400).send(JSON.stringify(err))
    }
}