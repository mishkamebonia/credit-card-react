import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./aboutcard.scss";

export default function AboutCard({ cards, setCards }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const cardIndex = cards.findIndex((card) => card.id === id);
  const card = cards[cardIndex];

  const [formData, setFormData] = useState({
    id: card.id,
    holder: card.holder,
    number: card.number,
    month: card.month,
    year: card.year,
    cvc: card.cvc,
  });

  const [formErrors, setFormErrors] = useState({
    id: "",
    holder: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const validateForm = () => {
    const errors = {};

    // Validate holder
    if (!formData.holder.trim()) {
      errors.holder = "Cardholder name is required.";
    } else if (formData.holder.trim().length < 5) {
      errors.holder = "Cardholder name must be at least 5 characters.";
    } else if (formData.holder.trim().length > 25) {
      errors.holder = "Cardholder name must not exceed 25 characters.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.holder.trim())) {
      errors.holder = "Cardholder name should contain only letters and spaces.";
    }

    // Validate number
    if (!formData.number.trim()) {
      errors.number = "Card number is required.";
    } else if (!/^\d{16}$/.test(formData.number.replace(/\s/g, ""))) {
      errors.number = "Invalid card number format.";
    }

    // Validate month and year
    if (!formData.month.trim() || !formData.year.trim()) {
      errors.month = "Expiration date is required.";
    } else if (
      !/^\d{2}$/.test(formData.month) ||
      !/^\d{2}$/.test(formData.year)
    ) {
      errors.month = "Invalid expiration date format.";
    }

    // Validate cvc
    if (!formData.cvc.trim()) {
      errors.cvc = "CVC is required.";
    } else if (!/^\d{3}$/.test(formData.cvc)) {
      errors.cvc = "Invalid CVC format.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  function handleUpdate(e) {
    e.preventDefault();

    if (validateForm()) {
      const updatedCards = [...cards];
      updatedCards[cardIndex] = formData;
      setCards(updatedCards);

      localStorage.setItem("cards", JSON.stringify(updatedCards));

      navigate("/credit-card-react/");
    }
  }

  function handleDelete(e) {
    const confirmDelete = window.confirm(
      "Are you sure? you want to delete this credit card?"
    );
    const cardIndex = cards.findIndex((card) => card.id === id);

    if (cardIndex === -1) {
      console.error("Card not found");
      return;
    }

    if (confirmDelete) {
      const updatedCards = [...cards];
      updatedCards.splice(cardIndex, 1);

      setCards(updatedCards);

      localStorage.setItem("cards", JSON.stringify(updatedCards));

      navigate("/credit-card-react/");
    }
  }

  return (
    <main className="about-card">
      <div className="description">
        <div className="container">
          You have the option to update or delete your credit card information.
          To make changes, simply update the necessary details and click
          'Update.' If you wish to remove a credit card from your account,
          select 'Remove credit card.' Please note that deleting a card is
          irreversible, and you won't be able to use it for future transactions.
        </div>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="card-form">
          <p>cardholder name</p>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            value={formData.holder}
            onChange={(e) =>
              setFormData({ ...formData, holder: e.target.value })
            }
          />
          <span className="input-error">{formErrors.holder}</span>
        </div>
        <div className="card-form">
          <p>card number</p>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            value={formData.number
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
            onChange={(e) => {
              setFormData({ ...formData, number: e.target.value });
            }}
          />
          <span className="input-error">{formErrors.number}</span>
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
            <span className="input-error">{formErrors.month}</span>
          </div>
          <div className="card-form">
            <p>cvc</p>
            <input
              type="text"
              placeholder="e.g. 123"
              value={formData.cvc}
              onChange={(e) =>
                setFormData({ ...formData, cvc: e.target.value })
              }
            />
            <span className="input-error">{formErrors.cvc}</span>
          </div>
        </div>
        <button type="submit" className="button">
          Update
        </button>
        <button className="button-remove" onClick={handleDelete}>
          Remove credit card
        </button>
      </form>
    </main>
  );
}
