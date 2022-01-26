import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import "./ChatScreen.css";
import { useParams } from "react-router-dom";
import axios from "./axios";

function ChatScreen() {
  const [input, setInput] = useState("")
  const { userId } = useParams();
  const { username } = useParams();
  const { profile } = useParams();
  const [chatMessages, setChatMessages] = useState([]);
  const senderId = localStorage.getItem("user_id");

  useEffect(() => {
    const pusher = new Pusher('d954810e751705611020', {
      cluster: 'eu',
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setChatMessages([...chatMessages, newMessage])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [chatMessages]);
  
  useEffect(() => {
    async function getChats(){
       await axios.get(`/messages/${senderId}/${userId}`).then((response) =>{
          const chats = response.data;
          setChatMessages(chats)
        });
    }
    getChats();
  }, [userId, senderId])


    const handleSend = async (e) => {
      e.preventDefault();
      await axios.post("/messages/new", {
        message: input,
        receiverId: userId,
        senderId: senderId,
        username: username,
        profile: profile
      });
       setInput("");

    };
    
    return (
      <div className="ChatScreen">
        <p className="chatScreen__timestamp">YOU MATCHED WITH NANA ON 11/06/21</p>
        {chatMessages.map(message => (
          message.senderId === senderId ?(
            <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
          ):(
            <div className="chatScreen__message">
            <p className="chatScreen__text">{message.message}</p>
          </div>
          )
        ))}
          <form className="chatScreen__input">
            <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="type a message" />
            <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
          </form>
      </div>
    );
}

export default ChatScreen;