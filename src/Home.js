const Home = () => {
    return ( 
        <header className="App-header">
        <p> <span>Hi, welcome to Tidey.</span> </p>

          <div className="button-container">
            <div className="main-btn">
              <a className="main-btn-content" Link href="/courses">
                Add a  new course
              </a>
            </div>

        
            <div className="main-btn">
            <a className="main-btn-content" Link href="/calculator">
              Calculate grades
            </a>
            </div>
          </div>
        </header>
    );
}
 
export default Home;