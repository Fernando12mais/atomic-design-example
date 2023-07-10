import { ReactNode } from "react";
import Button from "../../atoms/button/button";

export type CardProps = {
  name: string;
  description: string;
  icon?: ReactNode;
  secondaryButton?: ReactNode;
};

// Esse componente é uma molécula pq ele
//é maior e ele contém um átomo dentro dele, que é o botão de ver detalhes
// só pra n perder a possibilidade de add icon no botão
export default function Card({
  description,
  name,
  icon,
  secondaryButton,
}: CardProps) {
  return (
    <div
      style={{
        background: "#55c8e8",
        borderRadius: "1rem",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "#c7c7c7",
        }}
      ></div>

      <p>{name}</p>

      <p style={{ maxWidth: "300px" }}>{description}</p>

      <Button icon={icon}>Ver mais detalhes</Button>
      {secondaryButton}
    </div>
  );
}
