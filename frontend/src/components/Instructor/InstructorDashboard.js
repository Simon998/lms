import { Link } from "react-router-dom";
import InstructorSidebar from "./InstructorSidebar";


function InstructorDashboard(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <InstructorSidebar/>
                </aside>
                <section className="col-md-9">
                   Dashboard
                </section>
            </div>
        </div>
    );
}

export default InstructorDashboard;