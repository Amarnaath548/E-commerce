import ProductPresenter from "../presenter/ProductPresenter";
import ErrorComponent from "../components/ErrorComponent";
import usePaginationFetch from "../CustomHook/usePaginationFetch";

const ProductContainer = () => {
  const url = `https://api.escuelajs.co/api/v1/products?`;

  const {
    products,
    loading,
    error,
    hasMore,
    handlePrePage,
    handleNextPage,
    currentPage,
    offset,
  } = usePaginationFetch(url);

  if (error) return <ErrorComponent error={error} />;

  return (
    <ProductPresenter
      products={products}
      handleNextPage={handleNextPage}
      handlePrePage={handlePrePage}
      hasMore={hasMore}
      offset={offset}
      loading={loading}
      currentPage={currentPage}
    />
  );
};

export default ProductContainer;
