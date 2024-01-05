import React from 'react'
import { useState ,useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/slice/cartSlice';
const Home = () => {

    const[product ,setProduct]=useState([]);
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchProduct= async ()=>{
    
        const res= await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
         
        setProduct(data);
        console.log(product)
        
        }

        fetchProduct();
    },[])
    const handleClick=(product)=>{
               dispatch(add(product));
    }
  return (
    <div className='cart-content'> 

         {/* {
             product.map((product)=>{
                {console.log(product)}
                <div className="card" key={product.id}>
                    <img src={product.image} alt='img'/>
                    <h2>{product.title}fff</h2>
                     <h1>{product.price}</h1>
                      <button className="btn">Add to card</button>
                </div>
             })
         } */}
         {
            product.map((e)=>{
                return(
                     <div className="card" key={e.id}>
                     <img src={e.image} alt='img'/>
                     <h2>{e.title}</h2>
                     <h1>{e.price}</h1>
                     <button className="btn" onClick={()=>{handleClick(e)}}>Add to card</button>
                </div>
                )
            })
         }
          
    </div>
  ) 
}

export default Home
