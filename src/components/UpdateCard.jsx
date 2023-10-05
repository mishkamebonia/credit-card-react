import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./cardForm.scss";

function UpdateCard({ cards, setCards }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const cardIndex = cards.findIndex((card) => card.id === id);

  if (cardIndex === -1) {
    return <p>Card not found</p>;
  }

  const card = cards[cardIndex];

  const [formData, setFormData] = useState({
    id: card.id,
    holder: card.holder,
    number: card.number,
    month: card.month,
    year: card.year,
    cvc: card.cvc,
  });

  function handleUpdate(e) {
    e.preventDefault();

    const updatedCards = [...cards];
    updatedCards[cardIndex] = formData;
    setCards(updatedCards);

    localStorage.setItem("cards", JSON.stringify(updatedCards));

    navigate("/credit-card-react/");
  }

  return (
    <form onSubmit={handleUpdate}>
      <div className="card-form">
        <p>cardholder name</p>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={formData.holder}
          onChange={(e) => setFormData({ ...formData, holder: e.target.value })}
        />
      </div>
      <div className="card-form">
        <p>card number</p>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          value={formData.number}
          onChange={(e) => {
            setFormData({ ...formData, number: e.target.value });
          }}
        />
      </div>
      <div className="row">
        <div className="card-form">
          <p>exp. date (mm/yy)</p>
          <div className="row">
            <input
              className="small"
              type="text"
              placeholder="MM"
              value={formData.month}
              onChange={(e) =>
                setFormData({ ...formData, month: e.target.value })
              }
            />
            <input
              className="small"
              type="text"
              placeholder="YY"
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
            />
          </div>
        </div>
        <div className="card-form">
          <p>cvc</p>
          <input
            type="text"
            placeholder="e.g. 123"
            value={formData.cvc}
            onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
          />
        </div>
      </div>
      <button type="submit" className="button">
        Update
      </button>
    </form>
  );
}

export default UpdateCard;
