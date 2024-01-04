import React from 'react'
import { increment } from '../store/slices/CounterSlice';
import { useDispatch } from 'react-redux';

const Increment = () => {

    const dispatch=useDispatch();

    const plus=()=>{
        dispatch(increment());
  }
  return (
    <div className='increment' onClick={plus}>
         +
    </div>
  )
}

export default Increment
