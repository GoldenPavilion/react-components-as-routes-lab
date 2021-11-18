import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {
        directors.map(director => (
          <div>
            <p><strong>{director.name}</strong></p>
            <ul>
            {
              director.movies.map(movie => (
                <p>{movie}</p>
              ))
            }
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default Directors
