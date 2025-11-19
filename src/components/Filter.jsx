import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";

const Filter = ({minPrice, setMinPrice,maxPrice, setMaxPrice,categoryId,setCategoryId}) => {
  
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <FilterByCategory categoryId={categoryId} setCategoryId={setCategoryId} />
      <FilterByPrice
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
    </div>
  );
};

export default Filter;
