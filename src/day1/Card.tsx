import "../components/styles.css";
import React, { PropsWithChildren, ReactNode } from "react";

type CardProps = {
  header?: ReactNode;
} & PropsWithChildren;

export function Card({ header, children }: CardProps) {
  return (
    <div className="card-container">
      <div className="text-black font-extrabold">{header}</div>
      <div className="p-4 pt-8">{children}</div>
    </div>
  );
}
