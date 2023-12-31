export let  cart = JSON.parse(localStorage.getItem("data")) ||[];

function saveToStorage(){
localStorage.setItem("data", JSON.stringify(cart));
}

export function increment(productId){
  // If we can't find anything in the cart let's push to cart;
    let searchItem = cart.find((cartItem)=>
      cartItem.productId === productId
    );
  if(searchItem === undefined){
      cart.push({
      productId:productId,
      quantity:1
      });
    }else{
      searchItem.quantity += 1 ;
    }
    saveToStorage()
}

export function decrement(productId){
    let searchItem = cart.find((cartItem)=> cartItem.productId === productId);
  if(searchItem === undefined)return;
    else if(searchItem.quantity === 0)return;
    else{
    searchItem.quantity -= 1 
    }
  
  cart = cart.filter((cartItem)=> cartItem.quantity !== 0);
  saveToStorage();
}

/* pushing items to newCart while excluding items that don't match this
'productId' we get when clicking the remove button.
 */
export function removeFromCart(productId){
  // const newCart = [];
  // cart.forEach((cartItem)=>{
  //   cartItem.productId

  //   if(cartItem.productId !== productId){
  //      newCart.push(cartItem);
  //   }
  //    cart = newCart;
  // })
  cart = cart.filter((cartItem)=> cartItem.productId !== productId )
  saveToStorage()
}




