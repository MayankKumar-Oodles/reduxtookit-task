import React from 'react'
import { decrement } from '../store/slices/CounterSlice'
import { useDispatch } from 'react-redux'
const Decrement = () => {
     
    const dispatch=useDispatch();
    const minus=()=>{
           dispatch(decrement());
    }
  return (
    <div className='decrement' onClick={minus}>
     -
    </div>
  )
}

export default Decrement
