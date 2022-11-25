import { useParams, Link } from "react-router-dom";
import "./css/SingleBeer.css";
import axios from "axios";
import { useState, useEffect } from "react";

function SingleBeer({ beer }) {
  const params = useParams();
  const id = params.id;
  console.log(id);

  const [singleBeer, setSingleBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then(({ data }) => {
        setSingleBeer(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!singleBeer) {
    return <div>Loading Beer!!</div>;
  }

  return (
    <div className="SingleBeer">
      {console.log(singleBeer)}
      <img src={singleBeer.image_url} alt="beer" />
      <div className="first-title">
        <h1>{singleBeer.name}</h1>
        <h1>{singleBeer.attenuation_level}</h1>
      </div>
      <div className="second-title">
        <h2>{singleBeer.tagline}</h2>
        <h2>{singleBeer.first_brewed}</h2>
      </div>
      <p>{singleBeer.description}</p>
      <h3>{singleBeer.contributed_by}</h3>
    </div>
  );
}

export default SingleBeer;
