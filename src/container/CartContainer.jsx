import ProductContainer from './ProductContainer';
import ProductPresenter from '../presenter/ProductPresenter';

const CartContainer = () => {
    const storedCart = localStorage.getItem("cart") || '[]';
    const cart=JSON.parse(storedCart)
    console.log(cart)
  return (
    <div>
        
         <ProductPresenter products={cart}/>
    </div>
  )
}

export default CartContainer