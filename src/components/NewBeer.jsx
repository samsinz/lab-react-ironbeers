import axios from "axios";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./css/NewBeer.css";

function NewBeer() {

  const [name, setName] = useState(null);
  const [tagline, setTagline] = useState(null);
  const [description, setDescription] = useState(null);
  const [first_brewed, setFirstBrewed] = useState(null);
  const [brewers_tips, setBrewersTips] = useState(null);
  const [attenuation_level, setAttenuationLevel] = useState(null);
  const [contributed_by, setContributedBy] = useState(null);

  const navigate = useNavigate();


  const handleSubmit = async (event) => {
		event.preventDefault()
    const body = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
    navigate('/')
  }

  return (
    <div className="NewBeer">
      <form>
        <label htmlFor="name"><p>Name</p></label>
        <input type="text" name="name" onChange={(event) => setName(event.target.value)} />
        <label htmlFor="tagline"><p>Tagline</p></label>
        <input type="text" name="tagline" onChange={(event) => setTagline(event.target.value)}/>
        <label htmlFor="description"><p>Description</p></label>
        <input type="text" name="description" onChange={(event) => setDescription(event.target.value)}/>
        <label htmlFor="first_brewed"><p>First brewed</p></label>
        <input type="text" name="first_brewed" onChange={(event) => setFirstBrewed(event.target.value)}/>
        <label htmlFor="brewers_tips"><p>Brewers tips</p></label>
        <input type="text" name="brewers_tips" onChange={(event) => setBrewersTips(event.target.value)}/>
        <label htmlFor="attenuation_level"><p>Attenuation level</p></label>
        <input type="number" name="attenuation_level" onChange={(event) => setAttenuationLevel(event.target.value)}/>
        <label htmlFor="contributed_by"><p>Contributed by</p></label>
        <input type="text" name="contributed_by" onChange={(event) => setContributedBy(event.target.value)}/>
        <button onClick={handleSubmit}>CREATE A NEW BEER</button>
      </form>
    </div>
  );
}

export default NewBeer;
