import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "./Firebase";

const headingStyle = {
  textAlign: "center",
  fontFamily: "'Quicksand'",
  fontSize: "calc(5px + 2vmin)",
  marginBottom: "30px",
  paddingTop: "30px"
}

const SignUp = () => {
  const [ registerEmail, setRegisterEmail ] = useState("");
  const [ registerPassword, setRegisterPassword ] = useState("");
  const navigate = useNavigate();
  const [ user, setUser ] = useState({});
  const [windowHeight, setWindowHeight] = useState(window.innerHeight); 

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    localStorage.setItem("email", user.email);
  })

  const register = async (e) => {
    e.preventDefault()

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      alert('You are logged in');
      navigate("../tidey/");
    } catch(error) {
        console.log(error.message);
        alert("Password must be 8+ characters")
    }
  }

  
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      localStorage.setItem("name", name);
      alert('You are logged in');
      if((localStorage.getItem("email") !== "undefined")){
        navigate("../tidey/");
      }
    })
    .catch((error) => {
      console.log(error);
    })
  };


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div className="App">
      <div className="background-style">
      {/* Waves Container*/}
      {windowHeight >= 750 && 
      (
        <div>
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto" >
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(120,180,231,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(120,180,231,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(120,180,231,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(120,180,255,1.000)" />
            </g>
          </svg>
        </div>
      )} 
      {/* Waves End */ }

      <header className="App-header">
          <div className="textbox">
            <p className="textbox-heading" style={{ fontWeight: "bold" }}>Create a new Tidey account</p>
            <button onClick={ signInWithGoogle }>Create an account with Google</button>

            <form onSubmit={ register }>
              <label style={ headingStyle }>Enter an Email:</label>
              <input type="info" 
                placeholder="Email..." 
                onChange={(e)=> { setRegisterEmail(e.target.value) }}
                className="form" />
              
              <label style={ headingStyle } >Enter a Password:</label>
              <input type="info" 
                placeholder="Password..." 
                onChange={(e)=> { setRegisterPassword(e.target.value)} }
                className="form" />

              <button>Create</button>
            </form>
          </div>
      </header>
      </div>
    </div>
  );
}

export default SignUp;
