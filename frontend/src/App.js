// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import SearchPage from "./pages/Search.jsx";
import StockPage from "./pages/Stock.jsx";

function App() {
  return (
    <Routes>
      <Route path="/stock/:ticker" element={<StockPage />} exact />
      <Route path="*" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
