
import Sidebar from "./Sidebar";


function ChangePassword(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                    <section className="col-md-9">
                        <div className="card">
                            <h5 className="card-header">Change Password</h5>
                            <div className="card-body">
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">New Password</label>
                                <div className="col-sm-10">
                                <input type="text" readonly className="form-control" id="staticEmail"/>
                                </div>
                            </div>
                            <hr/>
                            <button className="btn btn-primary">Update</button>
                        </div>
                     </div>
                    </section>
            </div>
        </div>
    );
}

export default ChangePassword;