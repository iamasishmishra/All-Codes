import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHomePage from "./Components/AdminHomePage";
import AdminLogin from "./Components/AdminLogin";
import AdminSignup from "./Components/AdminSignup";
import ErrorPageHome from "./Components/ErrorPageHome";
import Home from "./Components/Home";
import UserLogin from "./Components/UserLogin";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/*" element={<ErrorPageHome/>}/>
          <Route path="/admin" element={<AdminLogin/>}/>
          <Route path="/user" element={<UserLogin/>}/>
          <Route path="/adminsignup" element={<AdminSignup/>}/>
          <Route path="/adminhomepage/*" element={<AdminHomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
