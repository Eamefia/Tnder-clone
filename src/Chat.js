import React, { useEffect, useState} from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import axios from "./axios"

function Chat({ id, name, message, profilePic, timestamp, profile }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function getChats(){
      //const usersRes = await axios.get(`http://localhost:9000/messages/${id}`);
       const usersRes = await axios.get(`/messages/${id}`);
      setMessages(usersRes.data);
    }
    getChats();
  }, [id])

    return (
      <Link to={`/chat/${id}/${name}/${profile}`}>
        <div className="chat">
          <Avatar className="chat__image" src={profilePic} />
          <div className="chat__details">
            <h2>{name}</h2>
            <p maxLength={10}>{messages[0]?.message}</p>
          </div>
          <p className="chat__timestamp">{timestamp}</p>
        </div>
      </Link>
        
    );
}

export default Chat;