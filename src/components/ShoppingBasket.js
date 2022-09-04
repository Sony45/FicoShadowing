import './shoppingBasket.scss';
import { useStateValue } from './StateProvider';

const ShoppingBasket = () => {
  const { myReducer } = useStateValue();
  const [ data, dispatch ] = myReducer;

  const removeFromCart = (id) => {
    dispatch({
      type:'REMOVE_FROM_CART',
      payload:id
    })
  }
  
  return(
    <div className="shoppingBasket">
      <h2>Tu carrito de compras</h2>
      <hr/>
      <ul className='list'>
        {
          data.cartList.map(item=>(<li key={item.id}>
            <div className='imageHolder'>
              <img src={item.imageURL} alt="" />
            </div>
            <div className='itemDeatils'>
              <div>{item.title}</div>
              <p><strong>Q{item.price}</strong></p>
              <button onClick={()=>removeFromCart(item.id)}>Eliminar del carrito</button>
            </div>
          </li>))
        }
      </ul>
    </div>
  )
}

export default ShoppingBasket;