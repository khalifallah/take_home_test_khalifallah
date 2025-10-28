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
    const flipped = dominoes.map((d) => [d[1], d[0]] as [number, number]);
    setDominoes(flipped);
  };

  const removeDup = () => {
    const normalize = (d: [number, number]) => {
      return [Math.min(d[0], d[1]), Math.max(d[0], d[1])].join(",");
    };

    const counts = dominoes.reduce((acc, d) => {
      const key = normalize(d);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const filtered = dominoes.filter((d) => {
      const key = normalize(d);
      return counts[key] === 1;
    });

    setDominoes(filtered);
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
