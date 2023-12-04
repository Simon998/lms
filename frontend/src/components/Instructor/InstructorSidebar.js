import { Link } from "react-router-dom";

function InstructorSidebar(){
    return(
            <div class="card">
                <h5 className="card-header">Dashboard</h5>
                    <div className="list-group list-group-flush">
                        <Link to="/instructor-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                        <Link to="/instructor-courses" className="list-group-item list-group-item-action">My Courses</Link>
                        <Link to="/add-course" className="list-group-item list-group-item-action">Add Course</Link>
                        <Link to="/instructor-users" className="list-group-item list-group-item-action">My Users</Link>
                        <Link to="/instructor-profile-setting" className="list-group-item list-group-item-action">Profile Setting</Link>
                        <Link to="/instructor-change-password" className="list-group-item list-group-item-action">Change Password</Link>
                        <Link to="/instructor-login" className="list-group-item list-group-item-action text-danger">Logout<i class="bi bi-box-arrow-in-right"></i></Link>
                    </div>
            </div>

            );
}

export default  InstructorSidebar;