import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "./axios";
import "./People.css";

function People() {

  const [users, setUsers] = useState([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    async function getUsers(){
      await axios.get(`/users/${userId}`).then((response) =>{
    
        const usersRes = response.data;
      setUsers(usersRes);
      });
    }
    getUsers();
}, [userId]);
    return (
        <div className="container">
           <div className="container-fluid">
            <div className="items-wrapper">
              <div className="item-p py-2 bg-white">
                <div className="product font-rale">
                {users.map((user) => {
                  return(
                    <Link to={`/chat/${user.unique_id}/${user.fname}/${user.profileImg}`}>
                        <img src={`/uploads/${user.profileImg}`} alt="product1" class="img-fluid" />
                        <div className="text-center">
                        <h6>{user.fname}</h6>
                        </div>
                    </Link>
                )})}
                    
                </div>
              </div>
            </div>
           </div>
          </div>
    )
}

export default People
