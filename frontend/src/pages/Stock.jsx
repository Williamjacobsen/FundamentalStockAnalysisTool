import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const StockPage = () => {
  const { ticker } = useParams();

  /*
    figiData {
      compositeFIGI: "BBG000B9XRY4"
      exchCode: "US"
      figi: "BBG000B9XRY4"
      marketSector: "Equity"
      name: "APPLE INC"
      securityDescription: "AAPL"
      securityType: "Common Stock"
      securityType2: "Common Stock"
      shareClassFIGI: "BBG001S5N8V8"
      ticker: "AAPL"
      uniqueID: null
      uniqueIDFutOpt: null
    }
  */
  const [figiData, setFigiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/figi`,
        [{ idType: "TICKER", idValue: ticker }],
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      response.data[0].data.forEach((el) => {
        if (el.exchCode == "US") {
          setFigiData(el);
        }
      });
    };

    fetchData();
  }, [ticker]);

  return (
    <div>
      <h1>{ticker}</h1>
      <h1>{figiData?.ticker}</h1>
    </div>
  );
};

export default StockPage;
