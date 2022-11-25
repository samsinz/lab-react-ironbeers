import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Nav from "./components/Nav";

import React from "react";
import SingleBeer from "./components/SingleBeer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beers"
          element={
            <div>
              <Nav />
              <AllBeers />
            </div>
          }
        />
        <Route
          path="/random-beer"
          element={
            <div>
              <Nav />
              <RandomBeer />
            </div>
          }
        />
        <Route
          path="/new-beer"
          element={
            <div>
              <Nav />
              <NewBeer />
            </div>
          }
        />
        <Route
          path={`/beers/:id`}
          element={
            <div>
              <Nav />
              <SingleBeer />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
