import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {
          movies.map(movie => (
            <div>
              <p><strong>{movie.title}</strong></p>
              <p>{movie.time}</p>
              {
                movie.genres.map(genre => (
                  <p>{genre}</p>
                ))
              }
              <br />
            </div>
          ))
        }
    </div>
  );
};

export default Movies;
