import React, { Component, ComponentProps, ReactNode } from "react";

type ButtonProps = {
  children: string;
  icon?: ReactNode;

  variant?: "delete";
} & ComponentProps<"button">;

const variants = {
  delete: {
    backgroundColor: "red",
    color: "white",
  },
  default: {
    backgroundColor: "yellow",
  },
};

// só pra aceitar todas as props nativas de um botão
// vou adicionar uma variante pra esse botão
// As vezes é melhor limitar as props pra não se perder das props customizadas que a gente passou, as vezes não kkkk
export default function Button(props: ButtonProps) {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: ".5rem 1rem",
        gap: "6px",
        ...variants[props.variant || "default"],
      }}
      {...props}
    >
      {props.icon && <span>{props.icon}</span>}

      <span>{props.children}</span>
    </button>
  );
}
