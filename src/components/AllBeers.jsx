import { useEffect, useState } from "react";
import { useParams, Link, Route, Routes, useNavigate } from "react-router-dom";
import "./css/AllBeers.css";
import axios from "axios";
import SingleBeer from "./SingleBeer";

function AllBeers() {
  const [allBeers, setAllBeers] = useState(null);
  const [search, setSearch] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        setAllBeers(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value)
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then(({data})=> {
        setAllBeers(data)
      })
      .catch((error) => console.error(error))
  }

  if (!allBeers) {
    return <div>Loading Beers!!</div>
  }

  return (
    <div className="AllBeers">
      <div id='search-bar'>
        <input type="text" placeholder="Search" onChange={handleSearch}/>
      </div>
      {allBeers.map((beer) => {
        return (
          <div key={beer._id} class="beer-card" onClick={() => navigate(`/beers/${beer._id}`)}>
            <div class="image-holder">
              <img src={beer.image_url} alt="beer" />
            </div>
            <div class="description">
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <h4>{beer.contributed_by}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
