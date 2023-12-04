import { Link } from "react-router-dom";
import Sidebar from "./InstructorSidebar";

function AddCourse(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <div className="col-9">
                <div className="card">
                    <h5 className="card-header">Add Course</h5>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input type="text" id="title" className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description</label>
                                <textarea id="description" className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="video" className="form-label">Course Video</label>
                                <input type="file" id="video" className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label for="vtechnologies" className="form-label">Technologies</label>
                                <textarea id="technologies" className="form-control"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                  
                </div>
            </div>
        </div>
    );
}

export default AddCourse;