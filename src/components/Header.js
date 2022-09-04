import React from "react"
import './header.scss';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";

const Header = () => {
  const { myReducer } = useStateValue();
  const [ data ] = myReducer;
  
  return(
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <SoupKitchenIcon fontSize="large"/>&nbsp;
          <span className="header__logoName">GuateFood</span>
        </Link>
      </div>

      <div className="header__search">
        <input placeholder="Encuentra tu platillo favorito aquí..."/>
        <SearchIcon fontSize="small" className="header__searchIcon"/>
      </div>

      <div className="header__nav">
        <Link to="/favorites">
        <div className="header__nav__user">
          <span className="header__nav__lineOne">Mis platillos</span>
          <span className="header__nav__lineTwo">Favoritos</span>
        </div>
        </Link> 

        <div className="header__nav__itemBasket">
          <Link to="/checkout">
            <ShoppingCartIcon fontSize="small"/>Comprar&nbsp;{data.cartList?.length}&nbsp;
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;