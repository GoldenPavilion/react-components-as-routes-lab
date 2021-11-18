import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map(actor => (
          <div>
            <p><strong>{actor.name}</strong></p>
            <ul>
              {
                actor.movies.map(movie => (
                  <p>{movie}</p>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default Actors;
