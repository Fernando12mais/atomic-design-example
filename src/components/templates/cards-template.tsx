import { useCardTemplate } from "../../hooks/use-card-template";
import Button from "../atoms/button/button";
import { Cards, CardsProps } from "../organisms/cards/cards";
import style from "./cards-template.module.css";

export type CardsTemplateProps = {
  cards: CardsProps[];
};
// Esse componente é um template pois ele agrupa vários organismos
// Ele também pode conter ações que envolvem todos os valores dos organismos
// tipo essa de deletar tudo
export default function CardsTemplate({ cards }: CardsTemplateProps) {
  const { data, deleteAllCards } = useCardTemplate(cards);
  return (
    <div className={style.template}>
      {data.length ? (
        <>
          <Button onClick={deleteAllCards} variant="delete">
            Deletar todos os cards
          </Button>
          {data.map((card) => (
            <Cards cards={card.cards} actions={card.actions} />
          ))}
        </>
      ) : (
        <h1 style={{ color: "white" }}>Sem cards no momento</h1>
      )}
    </div>
  );
}
