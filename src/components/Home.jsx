import allBeerImage from "./../assets/beers.png";
import randomBeerImage from "./../assets/random-beer.png";
import newBeerImage from "./../assets/new-beer.png";
import { useParams, Link } from "react-router-dom";
import "./css/Home.css";

function Home() {
  return (
    <div className="Home">
      <div to={"/hihi"}>
        <Link to={"/beers"}>
          <img src={allBeerImage} alt="all beer image" />
        </Link>
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quis sit eum, a eveniet est consequuntur tempore laborum quae alias accusamus ?</p>
      </div>
      <div to={"/haha"}>
        <Link to={"/random-beer"}>
          <img src={randomBeerImage} alt="random beer image" />
        </Link>
        <h1>Random Beer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quis sit eum, a eveniet est consequuntur tempore laborum quae alias accusamus ?</p>
      </div>
      <div to={"/hoho"}>
        <Link to={"/new-beer"}>
          <img src={newBeerImage} alt="new beer image" />
        </Link>
        <h1>New Beer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quis sit eum, a eveniet est consequuntur tempore laborum quae alias accusamus ?</p>
      </div>
    </div>
  );
}

export default Home;
