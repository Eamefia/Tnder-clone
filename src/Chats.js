import React, { useEffect, useState } from "react";
import axios from "./axios";
import './Chats.css';
import Chat from "./Chat";

function Chats() {
   //const [ chatUsers, setChatUsers] = useState([]);
   const [ users, setUsers] = useState([]);
   //const [ chatusers, setchatusers] = useState([]);
   // const [ chats, setChats ] = useState([]);
   const userId = localStorage.getItem("user_id");
   const [userdetails, setuserdetails] = useState([])
   //const chatusers = userdetails.uniqchats;
  //useEffect(() => {
  //  async function getChats(){
  //     await axios.get(`/chatUsers/${userId}`).then((response) =>{
  //        const users = response.data;
  //        users.forEach(user => {
  //          if (user.username) {
  //            setChatUsers(users)
  //          }
  //        });
  //      });
  //  }
  //  getChats();
  //}, [userId])


  useEffect(() => {
    async function getusers(){
       await axios.get(`/users/${userId}`).then((response) =>{
          const users = response.data;
            setUsers(users)
        });
    }
    getusers();
  }, [userId])

  useEffect(() => {
     async function chatMessages(){
       await axios.get(`/chatUsers/${userId}`).then((response) =>{
         const messagechats = response.data
         setuserdetails(messagechats)
    // users.forEach(user => {
    //   messagechats.forEach(messagechat => {
    //    if (user.unique_id === messagechat.receiverId && userId === messagechat.senderId ) {
    //     const uniqchats = [...messagechats.reduce((map, obj) => map.set(obj.receiverId, obj) , new Map()).values()];
    //     setChats({...chats, reciverid: uniqchats.receiverId, senderid: uniqchats.senderId});
    //    }
    //    if (user.unique_id === messagechat.senderId && userId === messagechat.receiverId) {
    //     const uniqchats = [...messagechats.reduce((map, obj) => map.set(obj.senderId, obj) , new Map()).values()];
    //     setChats({...chats, reciverid: uniqchats.receiverId, senderid: uniqchats.senderId});
    //     console.log(uniqchats);
    //     
    //    }
    //    })
    //  })
       })
       //setchatusers(chats)
     }
     chatMessages();
  }, [userId, users]);



//   function waitForElement(){
//     if(typeof someVariable !== "undefined"){
//         //variable exists, do what you want
//     }
//     else{
//         setTimeout(waitForElement, 250);
//     }
// }

   console.log(userdetails);
   console.log(users);
   
  
  
    return (
      <div className="chats">
   
   {users.map(user => {
      return userdetails.map(details => { 
        return user.unique_id === details.receiverId || user.unique_id === details.senderId ?
           <Chat
           key={user.unique_id}
           id={user.unique_id}
           name={user.fname}
           message="Hey Nana"
           timestamps="25 minutes ago"
           profile={user.profileImg}
           profilePic={`/uploads/${user.profileImg}`}
          />
        :
        <div></div>
       }
      )
   })
  }
    </div>
    );
}

export default Chats;