import express from 'express'
import { getMovieById, getMovies, getSearchedMovie } from './movies.controller'

const router = express.Router()

router.get('/', getMovies)
router.get('/:id', getMovieById)
router.get('/search/:searchedByValue', getSearchedMovie)

module.exports = router
