import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { MdDelete } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';
const DisplayUser = () => {
    
    const dispatch=useDispatch();
    const data=useSelector((state)=>{
        return state.users;
    })

    const removeolduser=(id)=>{
         dispatch(removeUser(id));
    }

    // console.log(data)
    return <>
    {
        data.map((user ,id)=>{
            return <li key={id}>{user}
            <button className="delete-btn" onClick={()=>{removeolduser(id)}}><MdDelete className="btn delete-icon"/></button>
            </li>
        })
    }
    </>
}

export default DisplayUser
