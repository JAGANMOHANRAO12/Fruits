import "./index.css";
import Header from "../Header";
import FruitsItem from "../FruitsItem";
import { useContext } from "react";
import { CartContext } from "../CartContext/index";

const Home = () => {
  const { items, updateCount } = useContext(CartContext);
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="row">
          {items.map((each) => (
            <div className="col-sm-6 col-md-4 col-lg-4">
              <FruitsItem key={each.id} fr={each} changeCount={updateCount} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
