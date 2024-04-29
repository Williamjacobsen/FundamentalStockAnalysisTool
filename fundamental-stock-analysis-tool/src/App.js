import { useState } from "react";

import "./App.css";

import tickers from "./stockTickers.json";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="app-container">
      <div className="search-container">
        <div>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="search-input-field"
          />
        </div>
        <div className="search-dropdown-container">
          {tickers
            .filter((item) => {
              if (search !== "") {
                return (
                  item.ticker.toLowerCase().includes(search.toLowerCase()) ||
                  item.name.toLowerCase().includes(search.toLowerCase())
                );
              }
            })
            .map((item) => (
              <div key={item.id}>
                {item.name} <br />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
