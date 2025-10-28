import "./App.css"; // Kita akan buat file CSS ini
import { DominoCard } from "./components/domino.card";
import { useDominoes } from "./hooks/useDomino";

function App() {
  // Ambil semua state dan fungsi dari hook kita
  const {
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
  } = useDominoes();

  return (
    <div className="app-container">
      <h1>Dominoes</h1>

      <div className="info-box">
        <label>Source</label>
        <pre>{JSON.stringify(SOURCE_DATA)}</pre>
      </div>

      <div className="info-box">
        <label>Double Numbers</label>
        <p>{doubleCount}</p>
      </div>

      <div className="domino-list">
        {dominoes.map((domino, index) => (
          <DominoCard
            key={`${domino[0]}-${domino[1]}-${index}`}
            numbers={domino}
          />
        ))}
      </div>

      <div className="controls">
        <button onClick={sortAsc}>Sort (ASC)</button>
        <button onClick={sortDesc}>Sort (DESC)</button>
        <button onClick={flip}>Flip</button>
        <button onClick={removeDup}>Remove Dup</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="remove-section">
        <input
          type="text"
          value={removeNumber}
          onChange={(e) => setRemoveNumber(e.target.value)}
          placeholder="Input Number"
        />
        <button onClick={removeByTotal}>Remove</button>
      </div>
    </div>
  );
}

export default App;
