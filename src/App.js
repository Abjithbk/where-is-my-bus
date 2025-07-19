import Login from "./components/Login";
import Signup from "./components/Signup";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserHome from "./components/UserHome";

function App() {
  return (
    <>
    <Router basename="/">
      <Routes>
        <Route path="/Signup" element={ <Signup />} />
        <Route path="/Login" element={ <Login />} />
        <Route path="/Home" element={ <UserHome />} />
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
