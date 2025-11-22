import { useParams } from "react-router-dom";
import useFetch from "../CustomHook/UseFetch";
import SingleProductPresenter from "../presenter/SingleProductPresenter";
import ErrorComponent from "../components/ErrorComponent";
import { useEffect } from "react";

const SingleProductContainer = () => {
  const { id } = useParams();
  const url = `https://api.escuelajs.co/api/v1/products/${id}`;
  const { data: product, loading, error } = useFetch(url);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const addToCart = (productData) => {
    const storedCart = localStorage.getItem("cart");
    
    const cart = storedCart ? JSON.parse(storedCart) : [];
    
    if (cart.find((pro) => pro.id === productData.id)) {
      alert("Already added to the cart");
      return;
    }

    const prod={...productData,quantity:1}
    cart.push(prod);
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log(JSON.parse(localStorage.getItem("cart")));
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (error) <ErrorComponent error={error} />;
  return (
    <div>
      <SingleProductPresenter
        product={product}
        loading={loading}
        id={id}
        addToCart={handleAddToCart}
      />
    </div>
  );
};

export default SingleProductContainer;
