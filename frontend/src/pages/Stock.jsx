import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const StockPage = (props) => {
  const { ticker } = useParams();

  useEffect(() => {
    const fetchData = async () => {};

    fetchData();
  }, [ticker]);

  return <div>{ticker}</div>;
};

export default StockPage;
