import CourseList from './CourseList';
import { Link } from "react-router-dom";

const Courses = () => {

  return (
    <div>
    <h2 className="course-header">All courses</h2>
    
      <header className="App-header">
        <div className="course-container">
          <CourseList/>
        </div>

        <div className="add-course">
        <div className="main-btn-container">
          <div className="main-btn">
            <div className="main-btn-content">
            <Link to="../tidey/Create" style={{ color: '#FFF', textDecoration: "none" }}>Add a new course</Link>
            </div>
          </div>
        </div>
        </div>
        
      </header>
      </div>
  );
}

export default Courses;