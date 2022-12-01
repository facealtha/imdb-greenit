import React, { useState, useEffect } from "react";


function MovieDetails() {
  const [movie, setCurrentMovie] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api${window.location.pathname}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token f9495af07ab6d632dea6d9fca131636816553b2b",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCurrentMovie(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="details">
      <h1> {movie.title} </h1>
      <p> {movie.description} </p>
    </div>
  );
}

export default MovieDetails;
