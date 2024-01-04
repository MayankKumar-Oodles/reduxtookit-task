import React from 'react'
import { useDispatch } from 'react-redux'
 import { clearAllUsers } from '../store/actions';
const DeleteAllUser = () => {
  const dispatch=useDispatch();
  const deleteAllUser=()=>{
      dispatch(clearAllUsers());
  }
  return (
     <>
     <button className="btn clear-btn"onClick={()=>{deleteAllUser()}}>Clear All Users</button>
     </>
  )
}

export default DeleteAllUser
