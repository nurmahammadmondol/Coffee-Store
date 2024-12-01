import { Link, Navigate, useNavigate } from 'react-router-dom';
import LoginPageBG from '../../assets/pic/9.png';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Registration = () => {
  const { CreateUser, LoginWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegistration = e => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirmPassword = form.confirmPassword.value;

    CreateUser(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have successfully registration in to your account.',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
        alert(error.message);
      });
  };

  const handleRegistrationGoogle = () => {
    LoginWithGoogle()
      .then(result => {
        console.log(result.user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'You have successfully registration in to your account.',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleBack = () => {
    navigate(-1);
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
        className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto pt-3 flex items-center gap-2 font-bold text-sm rancho-regular"
      >
        <i class="fa-solid fa-arrow-left "></i>
        Back to Home
      </div>

      <div className="card bg-base-100 w-11/12 md:w-5/12 shrink-0 shadow-2xl py-5">
        <h3 className="text-2xl md:text-4xl text-center rancho-regular">
          Coffee Store Registration
        </h3>
        <form onSubmit={handleRegistration} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
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
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered"
              name="confirmPassword"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#E3B577] text-white rancho-regular text-2xl">
              Registration
            </button>
          </div>
        </form>
        <div className="divider">OR</div>
        <div className="mx-8">
          <button
            onClick={handleRegistrationGoogle}
            className="btn bg-[#E3B577] text-white rancho-regular text-xl  w-full"
          >
            <i class="fa-brands fa-google fa-bounce"></i>
            SignUp with Google
          </button>
          <h6 className="text-end  text-xs mt-3">
            Have an account?
            <Link to="/Login">
              <span className="rancho-regular text-lg ml-2"> Log in</span>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Registration;
