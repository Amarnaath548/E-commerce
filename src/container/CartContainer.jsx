import { useEffect, useState } from "react";
import CartPresenter from "../presenter/CartPresenter";

const CartContainer = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  console.log(cart);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const removeFromcart = (id) => {
    const newCart = cart.filter((pro) => pro.id !== id);
    setCart(newCart);
  };

  const updateQuantity = (id, quantity) => {
    const newCart = cart.map(item =>
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    );
    setCart(newCart);
  };

  const total = calculateTotal();
  return (
    <div>
      <CartPresenter
        products={cart}
        handleRemove={removeFromcart}
        handleQuantityChange={updateQuantity}
        total={total}
      />
    </div>
  );
};

export default CartContainer;
