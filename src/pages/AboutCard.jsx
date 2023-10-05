import UpdateForm from "../components/UpdateForm"

export default function AboutCard({cards, setCards}) {

  return (
    <UpdateForm cards={cards} setCards={setCards} />
  )
}