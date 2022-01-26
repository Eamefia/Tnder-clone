import React, { useContext } from 'react';
import AuthContext from './AuthLoggedIn';
import { useHistory } from 'react-router-dom';
import axios from './axios';
import Avatar from "@material-ui/core/Avatar";
import "./Logout.css";

function LogOut() {
    const { getLoggedIn } = useContext(AuthContext);

    // const [profile, setProfile] = useState([]);
    //const userId = localStorage.getItem("user_id");
   // useEffect(() => {
   //   async function getUsers(){
   //     await axios.get(`/userprofile/${userId}`).then((response) =>{
   //   
   //       const usersPro = response.data;
   //       setProfile(usersPro);
   //     });
   //   }
   //   getUsers();
   //  } , [userId]);

    const history = useHistory();
    async function Logout(){
        await axios.get("/logout");
        await getLoggedIn();
        history.push("/")
    }
   // console.log(profile);
    
    return (
    <div className="profile">
           <Avatar src="" alt="Nana Yaw"className="large"  />
           <h3>Nana</h3>
           <button onClick={Logout}>
             Logout
          </button>

     </div>
    )
}

export default LogOut
