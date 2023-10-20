import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./cardForm.scss";

function CardForm({ handleSubmit, formData, setFormData, formErrors }) {
  useEffect(() => {
    setFormData({
      id: uuidv4(),
      holder: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-form">
        <p>cardholder name</p>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={formData.holder}
          onChange={(e) => setFormData({ ...formData, holder: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
          />
          <span className="input-error">{formErrors.cvc}</span>
        </div>
      </div>
      <button className="button">Confirm</button>
    </form>
  );
}

export default CardForm;
