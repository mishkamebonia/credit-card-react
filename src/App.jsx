import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import AddCard from "./pages/AddCard.jsx";
import Home from "./pages/Home.jsx";

function App() {
  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cards"));

    if (storedCards) {
      setCards(storedCards);
    }
  }, []);

  const [cards, setCards] = useState([]);

  const [formData, setFormData] = useState({
    holder: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  function addNewCard() {
    const newCard = [formData, ...cards];

    setCards(newCard);

    localStorage.setItem("cards", JSON.stringify(newCard));
  }

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<Home cards={cards} />} />
          <Route
            path="add-new-card"
            element={
              <AddCard
                formData={formData}
                setFormData={setFormData}
                addNewCard={addNewCard}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
