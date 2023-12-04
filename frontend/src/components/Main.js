import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import CourseDetail from "./CourseDetail";
import InstructorDetail from './InstructorDetail';

//user
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';
//instructors
import InstructorLogin from './Instructor/InstructorLogin';
import InstructorRegister from './Instructor/InstructorRegister';
import InstructorDashboard from './Instructor/InstructorDashboard';
import InstructorCourses from './Instructor/InstructorCourses';
import InstructorProfileSetting from './Instructor/InstructorProfileSetting';
import InstructorChangePassword from './Instructor/InstructorChangePassword';
import AddCourse from './Instructor/AddCourse';
import UserList from './Instructor/UserList';

//list pages
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularInstructors from './PopularInstructors';
import CategoryCourses from './CategoryCourses';

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
          <Route path="/my-courses" element={ <MyCourses/>}/>
          <Route path="/favorite-courses" element={ <FavoriteCourses/>}/>
          <Route path="/recommended-courses" element={ <RecommendedCourses/>}/>
          <Route path="/profile-setting" element={ <ProfileSetting/>}/>
          <Route path="/change-password" element={ <ChangePassword/>}/>
          <Route path="/instructor-login" element={ <InstructorLogin/>}/>
          <Route path="/instructor-register" element={ <InstructorRegister/>}/>
          <Route path="/instructor-dashboard" element={ <InstructorDashboard/>}/>
          <Route path="/instructor-courses" element={ <InstructorCourses/>}/>
          <Route path="/instructor-profile-setting" element={ <InstructorProfileSetting/>}/>
          <Route path="/instructor-change-password" element={ <InstructorChangePassword/>}/>
          <Route path="/add-course" element={ <AddCourse/>}/>
          <Route path="/instructor-users" element={ <UserList/>}/>
          <Route path="/instructor-detail/:instructor_id" element={ <InstructorDetail/>}/>
          <Route path="/all-courses" element={ <AllCourses/>}/>
          <Route path="/popular-courses" element={ <PopularCourses/>}/>
          <Route path="/popular-instructors" element={ <PopularInstructors/>}/>
          <Route path="/category/:category_slug" element={ <CategoryCourses/>}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default Main;