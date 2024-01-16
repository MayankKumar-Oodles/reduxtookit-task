import React, { useEffect, useState } from "react";
import { db } from "./firebase/firebase-config";
import { addDoc, collection, getDocs ,updateDoc ,doc, deleteDoc} from "firebase/firestore";
const App = () => {
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, "crud");
  const [newName , setNewName]=useState("");
  const [newAge , setNewAge]=useState(0);
  
  const createUser = async ()=>{
     await addDoc(userCollectionRef , {name:newName , age: Number(newAge)})
  }
  const updateUser = async (id , age)=>{
     const userdoc = doc(db,"crud" ,id);
     const newField = {age:age+1};
     await updateDoc(userdoc , newField);
  }
  const deleteUser = async (id)=>{
     const userDoc=doc(db ,"crud" ,id);
     await deleteDoc(userDoc);
  }
  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUser();
  }, []);

  return (
    <div  > 
        <div  >
        <input type="text" placeholder="name"  onChange={(e)=>{setNewName(e.target.value)}} /> <br/>
       <input type="number" placeholder="age" onChange={(e)=>{setNewAge(e.target.value)}}/> <br/>
        <button onClick={createUser} className="border-2 border-red-500">create user</button>
        </div>
      <div className="bg-cyan-500">
        {user.map((user) => {
          return (
            <div key={user.id}>
              <h1>Name :{user.name}</h1>
              <h1>Age :{user.age}</h1>
              <button onClick={()=>{updateUser(user.id , user.age)}} className="border-2 border-red-500">Update user</button>
              <button onClick={()=>{deleteUser(user.id)}} className="border-2 border-green-600">delete user</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
