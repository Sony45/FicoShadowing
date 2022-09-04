import './checkoutAd.scss';
import { useStateValue } from './StateProvider';

const CheckoutAd = () => {
  const { myReducer } = useStateValue();
  const [ data ] = myReducer;

  const getTotalAmount = () => {
    let total = 0;
    data.cartList.map(item =>{
      return total = Number(total) + Number(item.price);
    })
    return total;
  }

  const getTotalItem = () => {
    return data.cartList.length
  }

  return(
    <div className="checkoutAd">
      <div className='leftSide'>
        <img src="https://firebasestorage.googleapis.com/v0/b/ficoshadowing.appspot.com/o/buy.jpg?alt=media&token=0ad12cb4-f429-48a8-9148-106e67540294" alt=""/>
      </div>
      <div className="rightSide">
        <div className="subtotal">
          <p>({getTotalItem()} Platillos) </p><br/> 
          <p>Total a pagar: <strong>Q{getTotalAmount()}</strong></p>
          <button> <strong>Finalizar compra</strong></button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutAd;