import { Link } from "react-router-dom";

function Dashboard(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <div class="card">
                        <h5 className="card-header">Dashboard</h5>
                        <div className="list-group list-group-flush">
                            <Link to="/" className="list-group-item list-group-item-action">My Courses</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Favorite Courses</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Recommended Courses</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Profile Settings</Link>
                            <Link to="/" className="list-group-item list-group-item-action">Change Password</Link>
                            <Link to="/" className="list-group-item list-group-item-action text-danger">Logout<i class="bi bi-box-arrow-in-right"></i></Link>
                        </div>
                    </div>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">My Courses</h5>
                       <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Created By:</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>Php Development</td>
                                <td><Link to="/">Mark jones</Link></td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tbody>
                        </table>
                       </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard;