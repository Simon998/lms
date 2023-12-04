import { Link } from "react-router-dom";
import { useEffect } from "react";
function InstructorRegister(){
    useEffect(()=>{
        document.title='Instructor Register';
    });
    return(
        <div className="container mt-4">
        <div className="row">
            <div className="col-6 offset-3">
            <div className="card">
                <h3 className="card-header">Instructor Register</h3>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Full Name </label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Qualification</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Mobile Number</label>
                        <input type="number" className="form-control" />
                        </div>
                        <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Skills</label>
                        <textarea className="form-control"></textarea>
                        <div id="emailHelp" className="formtext">Php, Data Science, Python, etc</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                        <p className="mt-4">
                            Already have an account?{' '}
                            <Link to="/user-login" className="btn btn-primary">
                                <i class="bi bi-box-arrow-in-left"></i> Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default InstructorRegister;