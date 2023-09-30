import { useState } from "react";

import '../pages/addCard.scss';

import FrontCard from "../components/FrontCard";
import BackCard from "../components/BackCard";
import CardCondition from "../components/CardCondition";

export default function AddCard({formData, setFormData, addNewCard}) {

  return (
    <div className="content">
    <div className="card-field">
      <section className="theme-section">
        <BackCard 
          formData={formData} 
        />
        <FrontCard
          formData={formData}
        />
      </section>
    </div>
    <section className="form-section">
      <CardCondition
        formData={formData}
        setFormData={setFormData}
        addNewCard={addNewCard}
      />
    </section>
  </div>
  )
}