import { useState } from "react";
import { CardProps } from "../components/molecules/card/card";

export default function useCard(data: CardProps[]) {
  const [cards, setCards] = useState(data);

  function deleteCard(name: CardProps["name"]) {
    return setCards((prevState) =>
      prevState.filter((card) => card.name !== name)
    );
  }
  return { deleteCard, data: cards };
}
