import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from './axios';

function TinderCards() {
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
    
    const swiped = (direction, nameToDelete) =>{
      console.log("removing: " + nameToDelete);
      
    }
    const outOfFrame = (name) =>{
      console.log(name + "left the screen!");
    };


    return (
        <div>

         <div className="tinderCards_cardContainer">
          {users.map(person => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.fname)}
              onCardLeftScreen={() => outOfFrame(person.fname)}
            >
              <div
               style={{ backgroundImage: `url(/uploads/${person.profileImg})` }}
               className="card">
                <h3>{person.fname}</h3>
              </div>
            </TinderCard>
          ))}
         </div>
        
        </div>
    )
}

export default TinderCards