import "./App.css";

import { CardProps } from "./components/molecules/card/card";
import { Cards } from "./components/organisms/cards/cards";
import ReactIcon from "./assets/react";
import useCard from "./hooks/use-card";
import CardsTemplate from "./components/templates/cards-template";

function App() {
  const cards: CardProps[] = [
    { name: "Fernando", description: "Um dev", icon: <ReactIcon /> },
    { name: "Maciel", description: "Outro dev" },
    { name: "teste", description: "bacana" },
    { name: "Responsivo", description: "UHUUU" },
  ];
  const cards2: CardProps[] = [
    { name: "Card1", description: "Outra fileira de cards" },
    { name: "Card2", description: "Outra fileira de cards" },
    { name: "Card3", description: "Outra fileira de cards" },
    { name: "Card4", description: "Outra fileira de cards" },
  ];

  return (
    <main>
      <CardsTemplate
        cards={[{ cards: cards, actions: true }, { cards: cards2 }]}
      />
    </main>
  );
}

export default App;
