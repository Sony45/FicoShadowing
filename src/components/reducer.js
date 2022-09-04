export const initialState = {
  cartList:[],
  cartList_fav:[],
  productList:[{
    title: 'Tamales',
    description: 'Es la comida preferida en las fiestas. Junto a un pan francés y café, buenísimos.',    
    price: '8.00',
    rating: '5',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/ficoshadowing.appspot.com/o/tamales.jpg?alt=media&token=0c0e3da4-e11d-42ff-9b97-3d724cf175b4'
  },
  {
    title: 'Pepian',
    description: 'Uno de los recados tradicionales del país, es un manjar exquisito.',  
    price: '25.00',
    rating: '4',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/ficoshadowing.appspot.com/o/pepian.jpg?alt=media&token=331ec604-b461-4435-9a7c-3d94b020a73b'
  },
  {
    title: 'Fiambre',
    description: 'El fiambre es un platillo muy representativo de la época de fin, especíalmente el 1 de noviembre.',  
    price: '35.00',
    rating: '5',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/ficoshadowing.appspot.com/o/fiambre.jpg?alt=media&token=dd9afec0-3e30-484d-999e-4a2ae064dc5f'
  },
  {
    title: 'Desayuno típico',
    description: 'El desayuno tradicional tiene huevos estrellados, frijoles, plátanos, queso ​​y tortillas.',  
    price: '22.00',
    rating: '4',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/ficoshadowing.appspot.com/o/desayuno%20tipico.jpg?alt=media&token=24e9bc44-bcf0-47a6-b31b-326b07c7aef3'
  },
  {
    title: 'Chocolate',
    description: 'Una bebida típica a la cual los mayas la consideraban "el alimento de los dioses".', 
    price: '10.00',
    rating: '5',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/ficoshadowing.appspot.com/o/chocolate.jpg?alt=media&token=4750e6f6-1f6e-4751-a64e-f7ff6f5541ee'
  },
  {
    title: 'Dobladas',
    description: 'Son crujientes y se rellenan de carne de res o pollo, papa, queso y loroco.', 
    price: '6.00',
    rating: '4',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/ficoshadowing.appspot.com/o/dobladas.jpg?alt=media&token=af52ff47-c0a5-4db0-80f7-0b9af0baefd4'
  },
  {
    title: 'Hilachas',
    description: 'Su ingrediente principal es la carne de res, esta se desmenuza y se cocina en salsa de tomate.', 
    price: '22.00',
    rating: '4',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/ficoshadowing.appspot.com/o/hilachas.jpg?alt=media&token=403f8cd6-bcab-4c78-bac6-385603241c8e'
  },
  {
    title: 'Rellenitos',
    description: 'Son plátanos cocidos que se hacen puré, tradicionalmente rellenos de frijol.', 
    price: '5.00',
    rating: '3',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/ficoshadowing.appspot.com/o/rellenitos.jpg?alt=media&token=f202ab0f-989e-4299-95c1-479e28bf81e4'
  },
  {
    title: 'Kak ik',
    description: 'Un platillo propio de la región q´eqchi, este caldo es uno de los favoritos por su carne de “chunto”', 
    price: '27.00',
    rating: '5',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/ficoshadowing.appspot.com/o/kakik.jpg?alt=media&token=3314f24e-9b6c-46da-a3e1-2b641b6c9d8f'
  }]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cartList:[...state.cartList, action.payload]
      };
      case 'ADD_TO_Fav':
        return { 
          ...state, 
          cartList_fav:[...state.cartList_fav, action.payload]
        };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cartList: state.cartList.filter(item => item.id !== action.payload)
      };
      case 'REMOVE_FROM_CART_FAV':
      return { 
        ...state, 
        cartList_fav: state.cartList_fav.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}