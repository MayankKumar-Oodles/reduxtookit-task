import React from 'react'
import Decrement from './Decrement'
import Increment from './Increment'
import { useDispatch,useSelector } from 'react-redux'
const Counter = () => {
    const dispatch=useDispatch();
    const data=useSelector((state)=>{
        return  state.users;
    })
  return (
     <>
              <div className="content">

                        <div className="counter-content">
                                    <Decrement/>
                                    <div className="output">{data}</div>
                                    <Increment/>
                        </div>

              </div>
     </>
  )
}

export default Counter
