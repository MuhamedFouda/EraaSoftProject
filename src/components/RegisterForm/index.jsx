import './index.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function RegisterForm() {
	return (
		<div className="register">
			<div className="container">
				<div className="screen">
					<div className="screen__content">
						<form className="login">
							<div className="login__field">
								<i className="login__icon fas fa-user"></i>
								<input type="text" className="login__input" placeholder="User name / Email" />
							</div>
							<div className="login__field">
								<i className="login__icon fas fa-lock"></i>
								<input type="password" className="login__input" placeholder="Password" />
							</div>
							<button className="button login__submit">
								<span className="button__text">Register Now</span>
								<i className="button__icon fas fa-chevron-right"></i>
							</button>
						</form>
						<div className="social-login">
							<h3>log in via</h3>
							{/* <div class="social-icons">
								<Link className="social-login__icon"><FontAwesomeIcon icon={faInstagram} size="lg" /></Link>
								<Link className="social-login__icon"><FontAwesomeIcon icon={faSquareFacebook} size="lg" style={{ color: "#fafafa", }} /></Link>
								<Link className="social-login__icon"><FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#ffffff", }} /></Link>
							</div> */}
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
		</div>
	)
}
