import React from "react";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";

const Movies = ({ movies }) => {



  return (
    <div className="layout">
      <div>
        {movies.map((movie) => {
          return (
            <Row className="movieTile">
              <Link to={`movies/${movie.id}` }>
                <h2 className="movieTitle"> {movie.title} </h2>
              </Link>

              <button className="favoriteButton"> Favorite </button>
              <p> {movie.description} </p>
            </Row>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
