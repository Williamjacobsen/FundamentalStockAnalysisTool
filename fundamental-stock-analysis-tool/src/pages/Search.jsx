import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Search.css";

import tickers from "./../stockTickers.json";

const SearchPage = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const openStockPage = (ticker) => navigate(`/stock/${ticker}`);

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <div className="title">
        <h1>Fundamental Stock Analysis Tool</h1>
      </div>
      <div className="center-div-global">
        <div className="center-div-children">
          <div className="search-container">
            <div>
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="search-input"
                placeholder="Company or stock symbol..."
              />
            </div>
            <div className="search-result-container">
              {tickers
                .filter((item) => {
                  if (search !== "") {
                    return (
                      item.ticker
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.name.toLowerCase().includes(search.toLowerCase())
                    );
                  }
                  return "";
                })
                .map((item) => (
                  <div
                    key={item.id}
                    className="search-result-individual"
                    onClick={() => openStockPage(item.ticker)}
                  >
                    <div>{item.name}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
