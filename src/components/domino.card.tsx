import React from "react";
import "./DominoCard.css";

// Tentukan 'props' yang akan diterima komponen ini
interface DominoCardProps {
  numbers: [number, number]; // Menerima array berisi dua angka
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
