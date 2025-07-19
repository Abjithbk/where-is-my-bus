import Login from "./components/Login";
import Signup from "./components/Signup";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserHome from "./components/UserHome";
import TicketBook from "./components/TicketBook";
import UserProfile from "./components/UserProfile";
import StaffDashboard from "./components/StaffDashboard";
import UserBookings from "./components/UserBookings";

function App() {
  return (
    <>
    <Router basename="/">
      <Routes>
        <Route path="/" element={ <UserHome />} />


        <Route path="/Signup" element={ <Signup />} />
        <Route path="/Login" element={ <Login />} />
        <Route path="/TicketBooking" element={ <TicketBook />}/>
        <Route path="/Profile" element={ <UserProfile />}/>
        <Route path="/Staff" element={ <StaffDashboard />}/>
        <Route path="/Bookings" element={ <UserBookings />}/>
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
