import "../styles/App.scss";
import logo from "../images/minithunder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import coverpic from "../images/pexels-brotherkehn-4486396.jpg";
import { useState } from "react";
import data from "./Data/data.json";
import focusjeans from "../images/focusjeans.jpg";
import onejean from "../images/onejean.jpg";

function App() {
  const [jeans, setJeans] = useState(data);

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
      <section>
        <div>
          <img src={coverpic} alt="coverpic" className="coverimage" />
        </div>
      </section>
      <section className="subhero">
        <div className="herodiv">
          <img src={focusjeans} alt="focus jeans" className="herojeans" />
        </div>
        <div className="herodiv">
          <img src={onejean} alt="one jean" className="herojeans" />
        </div>
      </section>

      <main className="mainbox">
        <ul className="ul_box">
          {data.map((jeansItem) => (
            <li className="li_box">
              <img
                src={jeansItem.url}
                alt={jeansItem.name}
                className="images"
              />
              <p>{jeansItem.name} </p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
