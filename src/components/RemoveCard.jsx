import { useParams, useNavigate } from "react-router-dom";
import "../scss/variables.scss";

function RemoveCard({ cards, setCards }) {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete() {
    const cardIndex = cards.findIndex((card) => card.id === id);

    if (cardIndex === -1) {
      console.error("Card not found");
      return;
    }

    const updatedCards = [...cards];
    updatedCards.splice(cardIndex, 1);

    setCards(updatedCards);

    localStorage.setItem("cards", JSON.stringify(updatedCards));

    navigate("/credit-card-react/");
  }

  return (
    <button className="button-remove" onClick={handleDelete}>
      Remove credit card
    </button>
  );
}

export default RemoveCard;
