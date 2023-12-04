import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';

function  PopularInstructors(){

    const [instructor,setInstructor]=useState(null);
    useEffect(()=>{
        axios.get(baseUrl+'/instructor/').then((response)=>{
            console.log(response.data);
        });
    },[]);

    return(
        <div className="container mt-3">
            {/* latest/new courses */}
            <h3 className="pb-1 mb-4">Popular Instructors </h3>
            <div className="row mb-4">
                <div className=" col-md-3 mb-4">
                    <div className="card">
                    <Link to="/detail/1"><img src="person.jpg" className="card-img-top" alt="..."/></Link>
                    <div className="card-body">
                        <h5 className="card-title"><Link to="/instructor-detail/1">Instructor Name</Link></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" col-md-3 mb-4">
                    <div className="card">
                    <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="#">Instructor Name</a></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" col-md-3 mb-4">
                    <div className="card">
                    <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="#">Instructor Name</a></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                           
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" col-md-3 mb-4">
                    <div className="card">
                    <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="#">Instructor Name</a></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                          
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" col-md-3 mb-4">
                    <div className="card">
                    <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="#">Instructor Name</a></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" col-md-3 mb-4">
                    <div className="card">
                    <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="#">Instructor Name</a></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                       
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" col-md-3 mb-4">
                    <div className="card">
                    <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="#">Instructor Name</a></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                           
                        </div>
                    </div>
                    </div>
                </div>
                <div className=" col-md-3 mb-4">
                    <div className="card">
                    <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
                    <div className="card-body">
                        <h5 className="card-title"><a href="#">Instructor Name</a></h5>
                    </div>
                    <div className="card-footer">
                        <div className="title">
                            <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                           
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* end latest/new courses */}
            {/* pagination */}
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
          {/*pagination end */}
        </div>
    );
}

export default  PopularInstructors;