import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import MyProfile from "./pages/MyProfile";
import Notifications from "./pages/Notifications";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    
    <Router>
      <div className="sportify">
        <h1><b>SportiFy</b></h1>
      </div>
      <nav >
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/myprofile"><h1>My_profile</h1> </Link>
        <Link to="/notications"><h1>Notifcations</h1> </Link>
        {!isAuth ? (
          <Link to="/login"><h1>Login</h1> </Link>
        ) : (
          <>
            <Link to="/createpost"> <h1>NewPost</h1> </Link>
            <button onClick={signUserOut}> <h1 id='log'>  LogOut</h1></button>
          </>
        )}

      </nav>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}
export default App;
