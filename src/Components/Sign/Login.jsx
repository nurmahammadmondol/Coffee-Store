import { Link, Navigate, useNavigate } from 'react-router-dom';
import LoginPageBG from '../../assets/pic/9.png';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Typewriter from 'typewriter-effect';
import Swal from 'sweetalert2';

const Login = () => {
  const { LoginUser, LoginWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLoginSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    LoginUser(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have successfully logged in to your account.',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Log in to your account correctly.!',
          confirmButtonColor: '#E3B577',
          footer: '<a href="/Registration">Why do I have this issue?</a>',
        });
      });
  };

  const handleLoginWithGoogle = () => {
    LoginWithGoogle()
      .then(res => res.json())
      .then(data => {
        console.log('Google log im ', data);
      });
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center "
      style={{
        backgroundImage: `url(${LoginPageBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        onClick={handleBack}
        className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto pb-5 flex items-center gap-2 font-bold text-sm rancho-regular"
      >
        <i class="fa-solid fa-arrow-left "></i>
        Back to Home
      </div>
      <div className="card bg-base-100 w-11/12 md:w-5/12 shrink-0 shadow-2xl py-7">
        <h3 className="text-2xl md:text-4xl text-center rancho-regular">
          Coffee Store Login
        </h3>
        <p className="text-xs text-center w-11/12 mx-auto rancho400">
          <Typewriter
            options={{
              strings: ['.....Login first and then you can do the rest.....!'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <form onSubmit={handleLoginSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#E3B577] text-white rancho-regular text-2xl">
              Login
            </button>
          </div>
        </form>
        <div className="divider">OR</div>
        <div className="mx-8">
          <button
            onClick={handleLoginWithGoogle}
            className="btn bg-[#E3B577] text-white rancho-regular text-xl  w-full"
          >
            <i class="fa-brands fa-google fa-bounce"></i>
            Login with Google
          </button>
          <h6 className="text-end  text-xs mt-3">
            Have an account?
            <Link to="/Registration">
              <span className="rancho-regular text-lg ml-2"> Sign up</span>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;
