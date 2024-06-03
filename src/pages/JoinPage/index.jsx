import "./index.scss";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { $Users } from "../../store";
import { Link, useNavigate, useParams } from "react-router-dom/dist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import img from "./../../assets/EraaSoft3.png";

export default function JoinPage() {
  // Validation
  const params = useParams();
  const email = useRef();
  const password = useRef();
  const re_password = useRef();
  const navigate = useNavigate();
  const [joinType, setJoinType] = useState();

  const [users] = useRecoilState($Users);

  const handleChange = () => {
    let emailVal = email.current.value;
    let pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,}\b/;
    let emailPaternCheck = pattern.test(emailVal);
    if (emailPaternCheck) {
      checkEmailExisit(emailVal);
      console.log(emailVal);
    } else {
      setJoinType();
    }
  };
  //the Regex of Password
  const handlePassword = () => {
    let passwordVal = password.current.value;
    let pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let passwordPaternCheck = pattern.test(passwordVal);
    console.log(passwordPaternCheck);
    if (!passwordPaternCheck) {
      alert("dont strong try again");
    }
    //check the same password
    if (password.current.value != re_password.current.value) {
      alert(`password isn't the same`);
    }
  };

  function checkEmailExisit(email) {
    let emailIndex = users.findIndex((user) => {
      return user.email.toLowerCase() == email.toLowerCase();
    });
    if (emailIndex == -1) {
      console.log(emailIndex);
      setJoinType("register");
    } else {
      setJoinType("login");
    }
  }

  useEffect(() => {
    if (params.join_type == "register") {
      setJoinType("register");
    } else if (params.join_type == "login") {
      setJoinType("login");
    } else if (params.join_type == undefined) {
      console.log(params.join_type);
    } else {
      navigate("/page404");
    }
  }, []);
  return (
    <div className="col-12" id="JoinPage">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <img src={img} />
            <form className="login">
              {joinType == "login" ? (<p> Login Now</p>)
                : joinType == "register" ? (<p> Register Now </p>)
                  : (<div style={{ height: "3rem" }}></div>
                  )}
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="email" className="login__input" placeholder="Your Email" ref={email} onChange={handleChange} />
              </div>
              {
                joinType == "login" ? (
                  <div className="login__field">
                    <i className="login__icon fas fa-lock"></i>
                    <input type="password" className="login__input" placeholder="Password" ref={password} />
                  </div>
                ) : null
              }
              {
                joinType == "register" ? (
                  <div className="login__field">
                    <i className="login__icon fas fa-lock"></i>
                    <input
                      type="password"
                      className="login__input"
                      placeholder="Password" ref={password} />
                    <input type="password" className="login__input" placeholder="ReEnter-Password" ref={re_password} />
                  </div>
                ) : null
              }

              {/* <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                                 <input type="password" class="login__input" placeholder="Password" />
                             </div> */}
              {joinType == "login" ? (
                <>
                  <button className="button login__submit" onClick={handlePassword} style={{ textAlign: "center" }}>
                    <span className="button__text" style={{ textAlign: "center" }}> Login </span>
                  </button>
                </>
              ) : joinType == "register" ? (
                <>
                  <button className="button login__submit" onClick={handlePassword} style={{ textAlign: "center" }}>
                    <span className="button__text" style={{ textAlign: "center" }}>Register</span>
                  </button>
                </>
              ) : null}
              {/* <button className="button login__submit" onClick={handlePassword} style={{textAlign:'center'}}>
                <span className="button__text" style={{textAlign:'center'}}>
                  {joinType == "login"? "Login In Now": joinType == "register"? "Register": ""}
                </span>
              </button> */}
            </form>
            <div className="social-login">
              <p>
                <span style={{ color: "#eeab11" }}> Visit</span> In
              </p>
              <div className="social-icons">
                <Link className="social-login__icon">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </Link>
                <Link className="social-login__icon">
                  <FontAwesomeIcon icon={faSquareFacebook} size="lg" style={{ color: "#fafafa" }} />
                </Link>
                <Link className="social-login__icon">
                  <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#ffffff" }} />
                </Link>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>

      <div className="animiteDiv" style={{ position: "absolute", top: "0", width: "100%", zIndex: "2", color: "#c6c4f4", }}>
        {setTimeout(() => {
          joinType == "login" ? (<LoginForm />) : joinType == "register" ? (<RegisterForm />) : null;
        }
          , 1000)}
      </div>
      {
        // joinType == "login" ? navigate('/login'): (joinType == "register" ?  navigate('/register'): null)
        // joinType == "login" ? <LoginForm /> : (joinType == "register" ? <RegisterForm /> : null)
        // joinType == "login" ? <Login /> : (joinType == "register" ? <Register/> : null)
      }
    </div>
  );
}
