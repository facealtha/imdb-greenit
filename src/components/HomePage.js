import React, { useState, useEffect } from "react";
import Movies from "./MovieList";
import Pagination from "./Pagination";
import {Link} from "react-router-dom";
import "../App.css";


function HomePage() {
  // Constants for pagination
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);

  // Changing page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token f9495af07ab6d632dea6d9fca131636816553b2b",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMovies(resp))
      .catch((error) => console.log(error));
  }, []);

  // Obtaining current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Drawing up the home page
  return (
    <div className="App">

      <div className="movieDB">
        <Movies movies={currentMovies} />
      </div>

      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
  
    </div>
    
  );
}

export default HomePage;
