import { useState } from "react";

// Definisikan data awal di sini
export const SOURCE_DATA: [number, number][] = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
];

export function useDominoes() {
  const [dominoes, setDominoes] = useState(SOURCE_DATA);
  const [removeNumber, setRemoveNumber] = useState("");

  const doubleCount = dominoes.filter((d) => d[0] === d[1]).length;

  const sortAsc = () => {
    console.log("Mengurutkan ASC...");
    const sorted = [...dominoes].sort((a, b) => {
      const totalA = a[0] + a[1];
      const totalB = b[0] + b[1];

      if (totalA !== totalB) {
        return totalA - totalB;
      }

      return a[0] - b[0];
    });
    setDominoes(sorted);
  };

  const sortDesc = () => {
    console.log("Mengurutkan DESC...");
    const sorted = [...dominoes].sort((a, b) => {
      const totalA = a[0] + a[1];
      const totalB = b[0] + b[1];

      if (totalA !== totalB) {
        return totalB - totalA;
      }

      return b[0] - a[0];
    });
    setDominoes(sorted);
  };

  const flip = () => {
    console.log("Tombol Flip diklik. Logika belum dibuat.");
  };

  const removeDup = () => {
    console.log("Tombol Remove Dup diklik. Logika belum dibuat.");
  };

  const reset = () => {
    console.log("Tombol Reset diklik.");
    setDominoes(SOURCE_DATA);
  };

  const removeByTotal = () => {
    console.log(`Tombol Remove ${removeNumber} diklik. Logika belum dibuat.`);
  };

  return {
    dominoes,
    doubleCount,
    removeNumber,
    setRemoveNumber,
    SOURCE_DATA,

    sortAsc,
    sortDesc,
    flip,
    removeDup,
    reset,
    removeByTotal,
  };
}
