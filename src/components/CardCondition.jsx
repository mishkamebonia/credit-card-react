import { useState } from "react";
import CorrectResult from "./CorrectResult";
import CardForm from "./CardForm";

function CardCondition({ formData, setFormData, addNewCard }) {
  const [formErrors, setFormErrors] = useState({
    holder: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      addNewCard()
    }
  };

  return (
    <div>
      {!submitted ? (
        <CardForm
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          handleSubmit={handleSubmit}
        />
      ) : (
        <CorrectResult
          setFormData={setFormData}
        />
      )}
    </div>
  );
}

export default CardCondition;