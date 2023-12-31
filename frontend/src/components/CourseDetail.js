import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CourseDetail() {
    let { course_id } = useParams();
    return (
    <div className="container mt-3">
    <div className="row">
        <div className="col-4">
            <img src="/logo512.png" className="img-thumbnail" alt="..." />
        </div>
        <div className="card bg-secondary text-white col-8">
            <div className="card-header">Course Title</div>
            <div className="card-body">
                <p className="card-text">
                    Course Descrption:
                    <p>
                    It seems like you are trying to set the background color of the text inside the card to a primary color, but the class name "text-bg-primary" is not a standard Bootstrap class for setting the background color. If you want to set the background color of the entire card, you should use the "bg-primary" class directly on the card.
                    </p>
                </p>
                <p className="card-text fw-bold">
                    Course By: <Link to="/instructor-detail/1">Teacher 1</Link>
                </p>
                <p className="card-text fw-bold">
                    Duration: 3 hrs
                </p>
                <p className="card-text fw-bold">
                Total Enrolled: 520 students
                </p>
                <p className="card-text fw-bold">
                Rating: 4/5 </p>

            </div>
        </div>
        </div>
        {/*course videos */}
        <div className="card mt-4 col-12">
        
            <h5 className="card-header">
              Course videos
            </h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction:
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minutes</span>
                            <button className=" btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal1" style={{ borderRadius: '5px' }}>
                            <i className="bi bi-play" ></i>
                            </button>
                        </span>
                        {/*<!-- Video Modal -->*/}
                        <div className="modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Video 1</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                    </li>
                    {/*<!--End Video Modal -->*/}
                    <li className="list-group-item">Introduction:
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minutes</span>
                            <button className=" btn-danger" style={{ borderRadius: '5px' }}>
                            <i className="bi bi-play" ></i>
                            </button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction:
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minutes</span>
                            <button className=" btn-danger" style={{ borderRadius: '5px' }}>
                            <i className="bi bi-play" ></i>
                            </button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction:
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minutes</span>
                            <button className=" btn-danger" style={{ borderRadius: '5px' }}>
                            <i className="bi bi-play" ></i>
                            </button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction:
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minutes</span>
                            <button className=" btn-danger" style={{ borderRadius: '5px' }}>
                            <i className="bi bi-play" ></i>
                            </button>
                        </span>
                    </li>
                    <li className="list-group-item">Introduction:
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minutes</span>
                            <button className=" btn-danger" style={{ borderRadius: '5px' }}>
                            <i className="bi bi-play" ></i>
                            </button>
                        </span>
                    </li>
                
                </ul>
        
        </div>
        <h3 className="pb-1 mb-4 mt-4">Related Courses</h3>
        <div className="row mb-4">
            <div className="col-md-3">
                <div className="card">
                <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card">
                <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                <h5 className="card-title"><a href="#">Course title</a></h5>
                </div>
                </div>
            </div>
        </div>
</div>

    );
}

export default  CourseDetail;