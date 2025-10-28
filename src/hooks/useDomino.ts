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
  // State untuk daftar domino yang sedang ditampilkan
  const [dominoes, setDominoes] = useState(SOURCE_DATA);

  // State untuk input "Remove Number"
  const [removeNumber, setRemoveNumber] = useState("");

  // --- Logika yang Sudah Jadi ---

  // Hitung angka ganda (derived state)
  const doubleCount = dominoes.filter((d) => d[0] === d[1]).length;

  // --- Logika Tombol (Placeholder) ---
  // Kita akan isi ini nanti

  const sortAsc = () => {
    console.log("Tombol Sort (ASC) diklik. Logika belum dibuat.");
    // TODO: Implementasi logika sort ASC
  };

  const sortDesc = () => {
    console.log("Tombol Sort (DESC) diklik. Logika belum dibuat.");
    // TODO: Implementasi logika sort DESC
  };

  const flip = () => {
    console.log("Tombol Flip diklik. Logika belum dibuat.");
    // TODO: Implementasi logika flip
  };

  const removeDup = () => {
    console.log("Tombol Remove Dup diklik. Logika belum dibuat.");
    // TODO: Implementasi logika remove duplicates
  };

  const reset = () => {
    console.log("Tombol Reset diklik.");
    setDominoes(SOURCE_DATA); // Logika reset bisa langsung diisi
  };

  const removeByTotal = () => {
    console.log(`Tombol Remove ${removeNumber} diklik. Logika belum dibuat.`);
    // TODO: Implementasi logika remove by total
  };

  // Kembalikan semua yang dibutuhkan oleh UI
  return {
    dominoes,
    doubleCount,
    removeNumber,
    setRemoveNumber,
    SOURCE_DATA, // Kita ekspor juga agar bisa ditampilkan di box "Source"

    // Fungsi-fungsi
    sortAsc,
    sortDesc,
    flip,
    removeDup,
    reset,
    removeByTotal,
  };
}
