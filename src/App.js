import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Logo from "./images/movie-logo.png";

import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";

function App() {

  return (

    <div className="App">
      <header className="App-header">
      <Link to="/"> <img className="logo" src={Logo} /></Link>

        <h1> Movie Saver </h1>

        <Link to="/favorites" className="favoritesLink"> <p> My Favorites </p></Link>

      </header>

      <div className="movieDB">
        <Routes>
          <Route path="/" element={ <HomePage/> }/>
          <Route path="/movies/:id" element={ <MovieDetails/> }/>
          <Route path="/favorites" element={ <Favorites/> }/>

        </Routes>
      </div>


    </div>
  );
}

export default App;
