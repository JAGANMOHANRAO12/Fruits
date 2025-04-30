import "./index.css";
const FruitsItem = ({ fr, changeCount }) => {
  const { id, name, imgurl, count, price } = fr;
  const decrement = () => changeCount(id, -1, count);
  const increment = () => changeCount(id, +1, count);

  return (
    <>
      <div>
        <img src={imgurl} alt="imgs" className="imgss" />

        <p>{name}</p>

        <div className="counts">
          <div>
            <button onClick={decrement}>-</button>
          </div>
          <div>
            <button>{count}</button>
          </div>
          <div>
            <button onClick={increment}>+</button>
          </div>
        </div>

        <p>₹{price}</p>
      </div>
    </>
  );
};
export default FruitsItem;
