import Login from "./components/Login";
import Signup from "./components/Signup";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserHome from "./components/UserHome";
import TicketBook from "./components/TicketBook";

function App() {
  return (
    <>
    <Router basename="/">
      <Routes>
        <Route path="/" element={ <UserHome />} />


        <Route path="/Signup" element={ <Signup />} />
        <Route path="/Login" element={ <Login />} />
        <Route path="/TicketBooking" element={ <TicketBook />} />
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
