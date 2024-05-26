import { useParams } from "react-router-dom";

const StockPage = (props) => {
  const { ticker } = useParams();

  return <div>{ticker}</div>;
};

export default StockPage;
