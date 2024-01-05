import React from 'react'
import { useSelector } from 'react-redux';
import { remove } from '../store/slice/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {

    const cartitems =useSelector((state)=>{
            return state.users;
            
    })
    const  dispatch=useDispatch()
    const handleRemove =(id)=>{
      console.log('id +',id);
        dispatch(remove(id));
    }
     

    
  return (
       <>
         
            {/* { console.log("cart items",cartitems)} */}
            <div className='select-cart-content'>
             {
              cartitems.map((item)=>
              {
                return(
                  <>
                  {console.log("cart item",item)}
                     <div className="select-cart">
                    <img src={item.image} alt='img' />
                    <h5>{item.title}</h5>
                    <h5> {item.price}</h5>
                    <button className="btn" onClick={()=>{handleRemove(item.id)}}>remove</button>
                    </div>
                  </>
                )
              }
              )
             }     
           </div>
      </>
  )
}

export default Cart
