import UpdateCard from "../components/UpdateCard";
import RemoveCard from "../components/RemoveCard";

export default function AboutCard({ cards, setCards }) {
  return (
    <main>
      <UpdateCard cards={cards} setCards={setCards} />
      <RemoveCard cards={cards} setCards={setCards} />
    </main>
  );
}
