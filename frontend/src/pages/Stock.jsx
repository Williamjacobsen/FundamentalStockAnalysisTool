import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetFigiData from "../utils/GetFigiData";
import CheckForNull from "../utils/CheckForNull";

const StockPage = () => {
  const { ticker } = useParams();

  const figiData = GetFigiData(ticker);

  if (CheckForNull(figiData)) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{figiData?.ticker}</h1>
    </div>
  );
};

export default StockPage;
