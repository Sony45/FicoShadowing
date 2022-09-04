import './FavoritesBaskes.scss';
import { useStateValue } from './StateProvider';

const FavoritesBaskes = (item) => {
  const { myReducer } = useStateValue();
  const [ data, dispatch ] = myReducer;

  const removeFromCart = (id) => {
    dispatch({
      type:'REMOVE_FROM_CART_FAV',
      payload:id
    })
  }
    const addToCard = (selectedValue) => {
    let timeStamp =  new Date().getTime();
    selectedValue = {...selectedValue, id:timeStamp};
    dispatch({
      type:'ADD_TO_CART',
      payload: selectedValue
    });

  }

  return(
    <div className="shoppingBasket">
      <h2>Tus platillos favoritos</h2>
      <hr/>
      <ul className='list'>
        {
          data.cartList_fav.map(item=>(<li key={item.id}>
            <div className='imageHolder'>
              <img src={item.imageURL} alt="" />
            </div>
            <div className='itemDeatils'>
              <div>{item.title}</div>
              <p><strong>Q{item.price}</strong></p>
              <button className='buy' onClick={()=>addToCard(item)}>Comprar hoy</button>
              <br/>
              <button className='delete' onClick={()=>removeFromCart(item.id)}>Eliminar</button>
            </div>
          </li>))
        }
      </ul>
    </div>
  )
}

export default FavoritesBaskes;