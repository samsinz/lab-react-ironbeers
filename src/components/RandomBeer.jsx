import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./css/RandomBeer.css";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        setRandomBeer(data[Math.ceil(Math.random() * data.length)]);
      })
      .catch((error) => console.error(error));
  }, []);


  if (!randomBeer) {
    return <div>Loading Random Beer!!</div>
  }

  navigate(`/beers/${randomBeer._id}`)
}

export default RandomBeer;
