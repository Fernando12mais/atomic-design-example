import { useState } from "react";
import { CardsTemplateProps } from "../components/templates/cards-template";

export function useCardTemplate(cards: CardsTemplateProps["cards"]) {
  const [template, setTemplate] = useState(cards);

  function deleteAllCards() {
    setTemplate([]);
  }

  return { deleteAllCards, data: template };
}
