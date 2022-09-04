import { useStateValue } from './StateProvider';
import Rating from './Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = (props) => {
  const { title, price, description, rating, imageURL } = props;
  const { myReducer } = useStateValue();
  const [ , dispatch] = myReducer;

  const addToCard = (selectedValue) => {
    let timeStamp =  new Date().getTime();
    selectedValue = {...selectedValue, id:timeStamp};
    dispatch({
      type:'ADD_TO_CART',
      payload: selectedValue
    });

  }

  const addToFav = (selectedValue) => {
    let timeStamp =  new Date().getTime();
    selectedValue = {...selectedValue, id:timeStamp};
    dispatch({
      type:'ADD_TO_Fav',
      payload: selectedValue
    });

  }
  
  return(
    <div className='card'>
    <center><h3 className='title'>{ title }</h3> </center>
      <p className='description'>{ description }</p>
      <h4 className='price'>Q{ price }</h4>
      <p className='starRating'>{ <Rating rate={rating} /> }</p>
   
      <div className='imageHolder'>
        <img src={imageURL} alt=''/>
        <br/>
        <br/>

        <button className='button_fav' onClick={()=>addToFav(props)}>
        <FavoriteIcon 
        color="secondary"
        sx={{ fontSize: 13 }}/> 
              favorito</button>

        <button className='button_buy' onClick={()=>addToCard(props)}>Comprar</button>
      </div>
    </div>
  )
}

export default Card;