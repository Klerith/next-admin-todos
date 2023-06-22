// 'use client'
/*
cookie: cart
{
  'uui-123-1': 4,
  'uui-123-2': 1,
  'uui-123-3': 2,
}
*/
import { getCookie, hasCookie, setCookie } from "cookies-next";


export const getCookieCart = ():{ [id: string]:number } => {

  if ( hasCookie('cart') ) {
    const cookieCart = JSON.parse( getCookie('cart') as string ?? '{}' );
    return cookieCart;
  }

  return {};
}

export const addProductToCart = ( id: string ) => {

  const cookieCart = getCookieCart();

  if ( cookieCart[id] ) {
    cookieCart[id] = cookieCart[id] + 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie('cart', JSON.stringify(cookieCart));
}

export const removeProductFromCart = ( id:string ) =>{
  const cookieCart = getCookieCart();
  delete cookieCart[id];
  setCookie('cart', JSON.stringify(cookieCart));
}

export const removeSingleItemFromCart = ( id: string ) => {
  
  const cookieCart = getCookieCart();
  if ( !cookieCart[id] ) return;

  const itemsInCart = cookieCart[id] - 1;

  if ( itemsInCart <= 0 ) {
    delete cookieCart[id];
  } else {
    cookieCart[id] = itemsInCart;
  }

  setCookie('cart', JSON.stringify(cookieCart));
}

