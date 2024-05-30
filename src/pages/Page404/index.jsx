
export default function Page404() {
    return (
        <div id="Page404">Page 404</div>
    )
}


// import './index.scss'
// import { useEffect, useRef, useState } from "react"
// import { useRecoilState } from "recoil";
// import { $Users } from "../../store";
// import { Link, useNavigate, useParams } from "react-router-dom/dist";
// import Login from "../../components/LoginForm";
// import Register from "../../components/RegisterForm";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

// export default function JoinPage() {
//     // Validation
//     const params = useParams();
//     const email = useRef();
//     const navigate = useNavigate();
//     const [joinType, setJoinType] = useState();

//     const [users] = useRecoilState($Users);

//     const handleChange = () => {
//         let emailVal = email.current.value;
//         let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         let emailPaternCheck = pattern.test(emailVal);
//         if (emailPaternCheck) {
//             checkEmailExisit(emailVal)
//         }
//         else {
//             setJoinType();
//         }
//     }

//     function checkEmailExisit(email) {
//         let emailIndex = users.findIndex((user) => { return user.email.toLowerCase() == email.toLowerCase() })
//         if (emailIndex == -1) {
//             setJoinType("register");
//         }
//         else {
//             setJoinType("login");
//         }
//     }

//     useEffect(() => {
//         if (params.join_type == "register") {
//             setJoinType('register');
//         }
//         else if (params.join_type == "login") {
//             setJoinType('login');
//         }
//         else if (params.join_type == undefined) {
//             console.log(params.join_type);
//         } else {
//             navigate('/page404');
//         }
//     }, [])
//     return (
//         <div className="col-12" id="JoinPage">
//             {/* <input type="email" ref={email} onChange={handleChange} /> */}

//             <div class="container">
//                 <div class="screen">
//                     <div class="screen__content">
//                         <form class="login">
//                             <div class="login__field">
//                                 <i class="login__icon fas fa-user"></i>
//                                 <input type="email" class="login__input" placeholder="User name / Email" ref={email} onChange={handleChange} />
//                             </div>
//                             {
//                                  joinType == "login" ?<div class="login__field">
//                                  <i class="login__icon fas fa-lock"></i>
//                                  <input type="password" class="login__input" placeholder="Password" />
//                              </div>
//                              :
//                              null
//                             }
//                             {
//                                  joinType == "register" ?<div class="login__field">
//                                  <i class="login__icon fas fa-lock"></i>
//                                  <input type="password" class="login__input" placeholder="Password" />
//                                  <input type="password" class="login__input" placeholder="ReEnter-Password" />
//                              </div>
                             
//                              :
//                              null
//                             }
//                             {/* <div class="login__field">
//                             <i class="login__icon fas fa-lock"></i>
//                                  <input type="password" class="login__input" placeholder="Password" />
//                              </div> */}

//                             <button class="button login__submit">
//                                 <span class="button__text">
//                                     {
//                                         joinType == "login" ? "Login In Now" : (joinType == "register" ? "Register" : "Submit")
//                                     }
//                                 </span>
//                                 <i class="button__icon fas fa-chevron-right"></i>
//                             </button>
//                         </form>
//                         <div class="social-login">
//                             <h3>log in via</h3>
//                             <div class="social-icons">
//                                 <Link className="social-login__icon"><FontAwesomeIcon icon={faInstagram} size="lg" /></Link>
//                                 <Link className="social-login__icon"><FontAwesomeIcon icon={faSquareFacebook} size="lg" style={{ color: "#fafafa", }} /></Link>
//                                 <Link className="social-login__icon"><FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#ffffff", }} /></Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="screen__background">
//                         <span class="screen__background__shape screen__background__shape4"></span>
//                         <span class="screen__background__shape screen__background__shape3"></span>
//                         <span class="screen__background__shape screen__background__shape2"></span>
//                         <span class="screen__background__shape screen__background__shape1"></span>
//                     </div>
//                 </div>
//             </div>

//             {/* <div className='animiteDiv' style={{position:'absolute',top:'0',width:'100%',zIndex:'2'}}>
//                 {
//                     joinType == "login" ? <Login/> : (joinType == "register" ? <Register/> : null)

//                 }
//             </div> */}
//             {
//                 // joinType == "login" ? <Joinform /> : (joinType == "register" ? <Registerform /> : null)
//                 // joinType == "login" ? <Login /> : (joinType == "register" ? <Register /> : null)
//             }
//         </div>
//     )
// }
