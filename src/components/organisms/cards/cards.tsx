import useCard from "../../../hooks/use-card";
import Button from "../../atoms/button/button";
import Card, { CardProps } from "../../molecules/card/card";
import cards from "./cards.module.css";

export type CardsProps = {
  cards: CardProps[];
  actions?: boolean;
};

// Esse componente tá em organismo não pq o código dele é grande, mas sim pq
// Ele incorpora várias moléculas e é responsável por definir a estrutura
// das moléculas quando elas estão em grupo
// obs: as vezes teu organismo tem menos código que teu átomo
// alguma dúvida?
// Tu tbm pode add mais funcionalidades no teu organismo

export function Cards(props: CardsProps) {
  const { deleteCard, data } = useCard(props.cards);
  return (
    <div className={data.length ? cards.cards : ""}>
      {data.map((card) => (
        <div key={card.name}>
          <Card
            secondaryButton={
              props.actions ? (
                <Button variant="delete" onClick={() => deleteCard(card.name)}>
                  Deletar card
                </Button>
              ) : null
            }
            {...card}
          />
        </div>
      ))}
      {!data.length && <h1>Sem cards, tente adicionar um</h1>}
    </div>
  );
}
