import { NavLink } from "react-router-dom";

import cardCircleImage from "../assets/card-cyrcles.svg";
import "../pages/home.scss";

export default function Home({ cards }) {
  return (
    <div className="home">
      <nav>
        <NavLink to="add-new-card" className="hoverable-button">
          add new card
        </NavLink>
      </nav>
      <main>
        {cards.map((card, index) => (
          <div className="full-card" key={index}>
            <div className="front-card">
              <div className="card-content">
                <img src={cardCircleImage} />
                <p className="number">{card.number}</p>
                <div className="row">
                  <p className="user-name">{card.holder}</p>
                  <p className="validation-time">
                    {card.month} / {card.year}
                  </p>
                </div>
                <div className="blur-effect blur-effect__pink"></div>
                <div className="blur-effect blur-effect_orange"></div>
                <div className="blur-effect blur-effect_blue"></div>
              </div>
            </div>
            <div className="back-card">
              <div className="card-content">
                <div className="line"></div>
                <div className="cvc-number">
                  {card.cvc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
