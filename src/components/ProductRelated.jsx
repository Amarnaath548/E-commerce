import React from "react";
import useFetch from "../CustomHook/UseFetch";
//import usePaginationFetch from '../CustomHook/usePaginationFetch';
import ProductPresenter from "../presenter/ProductPresenter";

const ProductRelated = ({ id }) => {
  const url = ` https://api.escuelajs.co/api/v1/products/${id}/related`;
  const { data: products, loading, error } = useFetch(url);

  if (error) return <ErrorComponent error={error} />;
  return (
    <div className="border-t mt-3 mx-auto">
      <h2 className="text-xl font-medium m-3">RELATED PRODUCTS</h2>
      <ProductPresenter products={products} loading={loading} />
    </div>
  );
};

export default ProductRelated;
