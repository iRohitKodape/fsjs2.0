import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { toast } from "react-toastify";
import BuyPage from "./Components/BuyPage";
// https://jsonkeeper.com/b/AVQ6
const App = () => {
  const [cartItem, setCartItem] = React.useState([]);

  const addToCart = (item) => {
    const alreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (alreadyAdded !== -1) {
      toast("already added in cart"),
        {
          type: "error",
        };
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);

    toast("purchase complete"),
      {
        type: 'Success',
      };
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <div>
      <BuyPage addToCart={addToCart} />
    </div>
  );
};
export default App;
