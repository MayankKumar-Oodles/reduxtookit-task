import React from 'react'
import DeleteAllUser from './DeleteAllUser'
import { fakeUserData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slices/UserSlice' 
import DisplayUser from './DisplayUser'
const UserDetails = () => {
    
    const dispatch=useDispatch();  

    const addNewUser=(payload)=>{
      //     console.log(payload);
          dispatch(addUser(payload));
    }

  return (
    <>
          <div className="content">
                <div className="admin-table">
                    <div className="admin-subtitle">List of User Details</div>
                    <button className="btn add-btn"onClick={()=>{addNewUser(fakeUserData())}}>Add User</button>
                </div>
                <ul className="data-list">
                     <DisplayUser/>
                </ul>
                <hr/>
                <DeleteAllUser/>
          </div>
    </>
  )
}

export default UserDetails;     
