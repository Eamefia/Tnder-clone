import { React, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AuthContext from './AuthLoggedIn';
import Signupform from './Signupform';
import Login from './Login';
import Header from './Header';
import "./App.css";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import LogOut from './LogOut';
import People from './People';

function Routers() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="App">
         <Router>
            <Switch>
             {loggedIn === false &&(
               <>
               <Route path="/register">
                 <Signupform  />
               </Route>
               <Route path="/">
                 <Login />
               </Route>
               </>
             )
             }
             {loggedIn === true && (
               <>
                <Route exact path="/chat">
                   <Header backButton="/" />
                   <Chats />
                </Route>
                <Route exact path="/chat/:userId/:username/:profile">
                  <Header backButton="/chat" />
                  <ChatScreen />
                 </Route>
                 <Route exact path="/logout">
                   <Header />
                   <LogOut />
                 </Route>
                 <Route exact path="/people">
                   <Header />
                   <People />
                 </Route>
                <Route exact path="/">
                  <Header />
                    <TinderCards />
                  <SwipeButtons />
                </Route>
               </>
             )
             }
            </Switch>
         </Router>
      </div>
  );
}

export default Routers;
