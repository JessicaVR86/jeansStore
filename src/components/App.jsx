import "../styles/App.scss";
import logo from "../images/minithunder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import coverpic from "../images/pexels-brotherkehn-4486396.jpg";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} className="logoimg" />
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faBasketShopping} />
        </div>
      </nav>
      <section >
        <div >
             <img src={coverpic} alt="coverpic"  className="coverimage"/>
        </div>
     
      </section>
    </>
  );
}

export default App;
