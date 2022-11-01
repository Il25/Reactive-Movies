import React, { useState } from 'react';
import './App.css';
import { getAllMovies } from './index.js';

const App = (props) => {
  const {add, addWatchedMovie, getWatchedMovies, removeWatchedMovie} = props;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");

  const getMoviesComponents = (movies) => {
    const components = [];

    movies.forEach(movie => {
      components.push(
        <div className="all">
          <div>
            <img src={movie.image} className="movieImg" alt='img' />
          </div>
          <span>
            <a className="movie-watched" href="#" onClick={() => { addWatchedMovie(movie.title, movie.comment, movie.image) }}>
              {movie.title}
            </a>
          </span>
          <br />
          <span>{movie.comment}</span>
          <br />
          <br />
        </div>
      )
    })
    return components;
  }

  const getWatchedMoviesComponents = (movies) => {
    const components = [];

    movies.forEach(movie => {
      components.push(movie && (
        <div className="watched">
          <div>
            <img src={movie.image} className="movieImg" alt='img' />
          </div>
          <span>
            <a className="movie-watched" href="#" onClick={() => { removeWatchedMovie(movie.title) }}>
              {movie.title}
            </a>
          </span>
          <br />
          <span>
            {movie.comment}
          </span>
          <br />
          <br />
        </div>
      ))
    })
    return components;
  }

  return (
    <div className="App">
      <h1 className="heading">Reactive Movies!</h1>
      <h1 className="addingTitle">Add movie!</h1>
      <div>
        <p className="forms">TITLE</p><input className="formsInputs" onChange={e => setTitle(e.target.value)} />
        <p className="forms">IMAGE</p><input className="formsInputs" onChange={e => setImage(e.target.value)} />
        <p className="forms">COMMENT</p><input className="formsInputs" onChange={e => setComment(e.target.value)} />
      </div>
      <button className="addMovieButton" onClick={() => add(title, image, comment)}>ADD MOVIE</button>
      <h1>Watchlist:</h1>
      {getMoviesComponents(getAllMovies())}
      <h1>Already watched:</h1>
      {getWatchedMoviesComponents(getWatchedMovies())}
    </div>
  );
};

export default App;
