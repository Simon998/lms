import { Link } from "react-router-dom";
import { useEffect } from "react";
function Home() {
  useEffect(()=>{
    document.title='LMS | Home';
  });
  return (
   <div className="container mt-4">
        {/* latest/new courses */}
        <h3 className="pb-1 mb-4">Latest Courses <Link to="all-courses" class="float-end">See all</Link></h3>
        <div className="row mb-4">
            <div className=" col-md-3 mb-4">
                <div className="card">
                <Link to="/detail/1"><img src="python.jpg" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                    <h5 className="card-title"><Link to="/detail/1">Course title</Link></h5>
                </div>
                </div>
            </div>
            <div className=" col-md-3 mb-4">
                <div className="card">
                <a href="#"><img src="python.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title"><a href="#">Course title</a></h5>
                </div>
                </div>
            </div>
            <div className=" col-md-3 mb-4">
                <div className="card">
                <a href="#"><img src="python.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title"><a href="#">Course title</a></h5>
                </div>
                </div>
            </div>
            <div className=" col-md-3 mb-4">
                <div className="card">
                <a href="#"><img src="python.jpg" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title"><a href="#">Course title</a></h5>
                </div>
                </div>
            </div>
        {/* end latest/new courses */}
      </div>
       {/* Popular courses */}
      <h3 className="pb-1 mb-4 mt-4">Popular Courses <Link to="/popular-courses" class="float-end">See all</Link></h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="python.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
          <div className="card-footer">
                  <div className="title">
                      <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                      <span className="float-end"><i class="bi bi-eye"></i>Views:500</span>
                  </div>
                </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="python.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
          <div className="card-footer">
                  <div className="title">
                      <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                      <span className="float-end"><i class="bi bi-eye"></i>Views:500</span>
                  </div>
                </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="python.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
          <div className="card-footer">
                  <div className="title">
                      <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                      <span className="float-end"><i class="bi bi-eye"></i>Views:500</span>
                  </div>
                </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="python.jpg" className="card-img-top" alt="..."/></a>
          <div className="card-body">
            <h5 className="card-title"><a href="#">Course title</a></h5>
          </div>
          <div className="card-footer">
                  <div className="title">
                      <span><i class="bi bi-star-fill"></i>Rating: 4.5/5</span>
                      <span className="float-end"><i class="bi bi-eye"></i>Views:500</span>
                  </div>
            </div>
          </div>
        </div>
      </div>
       {/* end Popular courses */}
        {/* Popular instructors */}
      <h3 className="pb-1 mb-4 mt-4">Featured Instructors <Link to="popular-instructors" class="float-end">See all</Link></h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
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
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
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
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
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
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="person.jpg" className="card-img-top" alt="..."/></a>
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
      </div>
       {/* end Popular instructors */}
        {/* student testimonies */}
      <h3 className="pb-1 mb-4 mt-4">Testimonials <a href="#" className="float-end">See all</a></h3>
      <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5 " style={{ borderRadius: '20px' }}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
              
      <figure className="text-center">
      <blockquote className="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>
      <figcaption className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </figcaption>
      </figure>
      </div>
      <div className="carousel-item">
        
          <figure className="text-center">
          <blockquote className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
          </figure>
      </div>
      <div className="carousel-item">
        
          <figure className="text-center">
          <blockquote className="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
          </figure>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    </div>
       {/* end student testimonies */}
   </div>
  );
}

export default Home;