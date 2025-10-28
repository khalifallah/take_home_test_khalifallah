import React from "react";
import "./domino.card.css";

interface DominoCardProps {
  numbers: [number, number];
}

export const DominoCard: React.FC<DominoCardProps> = ({ numbers }) => {
  const [top, bottom] = numbers;

  return (
    <div className="domino-card">
      <span className="number">{top}</span>
      <span className="divider"></span>
      <span className="number">{bottom}</span>
    </div>
  );
};
