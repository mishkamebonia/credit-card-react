import { NavLink } from "react-router-dom";
import correctImage from "../assets/correct.svg";
import "./correctResult.scss";

function CorrectResult({ setFormData }) {
  function restartFormData() {
    setFormData({
      holder: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
  }

  return (
    <div className="correct-result">
      <img src={correctImage} />
      <h2>thank you!</h2>
      <p>We’ve added your card details</p>
      <NavLink to="/credit-card-react/" onClick={restartFormData} className="button">
        Continue
      </NavLink>
    </div>
  );
}

export default CorrectResult;
