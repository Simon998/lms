import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import CourseDetail from "./CourseDetail";
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import { Route, Routes as Switch } from 'react-router-dom';




function Main() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" element={ <Home/>}/>
          <Route path="/about" element={ <About/>}/>
          <Route path="/detail/:course_id" element={ <CourseDetail/>}/>
          <Route path="/user-login" element={ <Login/>}/>
          <Route path="/user-register" element={ <Register/>}/>
          <Route path="/user-dashboard" element={ <Dashboard/>}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default Main;