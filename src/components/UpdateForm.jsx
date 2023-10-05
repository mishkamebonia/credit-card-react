import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./cardForm.scss";

function UpdateForm({ cards, setCards }) {
  const { id } = useParams();
  const card = cards.find((card) => card.id === id);

  const [formData, setFormData] = useState({
    id: card.id,
    holder: card.holder,
    number: card.number,
    month: card.month,
    year: card.year,
    cvc: card.cvc,
  });

  useEffect(() => {
    document.title = `Edit Card - ${formData.holder}`;
  }, [formData.holder]);

  function handleUpdate(e) {
    e.preventDefault();
    // Handle the update logic here, e.g., submit the form data to an API

    // Update the cards state with the updated card
    const updatedCards = cards.map((c) =>
      c.id === formData.id ? formData : c
    );
    setCards(updatedCards);
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
        {/* <span className="input-error">{formErrors.holder}</span> */}
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
        {/* <span className="input-error">{formErrors.number}</span> */}
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
          {/* <span className="input-error">{formErrors.month}</span> */}
        </div>
        <div className="card-form">
          <p>cvc</p>
          <input
            type="text"
            placeholder="e.g. 123"
            value={formData.cvc}
            onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
          />
          {/* <span className="input-error">{formErrors.cvc}</span> */}
        </div>
      </div>
      <button type="submit" className="button">
        Update
      </button>
    </form>
  );
}

export default UpdateForm;
