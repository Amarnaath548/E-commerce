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
  if (error) <ErrorComponent error={error} />;
  return (
    <div>
      <SingleProductPresenter product={product} loading={loading} id={id} />
    </div>
  );
};

export default SingleProductContainer;
