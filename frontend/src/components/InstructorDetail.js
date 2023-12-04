import { Link } from "react-router-dom";

function InstructorDetail(){
    return(
        <div className="container mt-3">
    <div className="row">
        <div className="col-4">
            <img src="/logo512.png" className="img-thumbnail" alt="Instructor Image" />
        </div>
        <div className="card bg-secondary text-white col-8">
            <div className="card-header">John Doe</div>
            <div className="card-body">
                <p className="card-text">
                    
                    <p>
                    It seems like you are trying to set the background color of the text inside the card to a primary color, but the class name "text-bg-primary" is not a standard Bootstrap class for setting the background color. If you want to set the background color of the entire card, you should use the "bg-primary" class directly on the card.
                    </p>
                </p>
                <p className="card-text fw-bold">
                    Skills: <Link to="/category/php">Php</Link>,<Link to="/category/php">Python</Link>,<Link to="/category/php">Java</Link>
                </p>
                <p className="card-text fw-bold">
                    Recent Course: <Link to="/category/php">React Js</Link>
                </p>
                
                <p className="card-text fw-bold">
                Rating: 4/5 </p>

            </div>
        </div>
        </div>
        {/*course videos */}
        <div className="card mt-4 col-12">
        
            <h5 className="card-header">
              Course List
            </h5>
                <div className="list-group list-group-flush">
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Php Course 1</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Php Course 2</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Php Course 3</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 1</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Java Course 1</Link>
                </div>
        
        </div>   
    </div>
    );
}
export default InstructorDetail;