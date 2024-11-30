import { Link } from 'react-router-dom';
import LoginPageBG from '../../assets/pic/9.png';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Result } from 'postcss';

const Registration = () => {
  const { CreateUser, LoginWithGoogle } = useContext(AuthContext);

  const handleRegistration = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // const userInfo = { name, email, password, confirmPassword };
    // console.log(userInfo);

    CreateUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleRegistrationGoogle = () => {
    LoginWithGoogle()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center "
      style={{
        backgroundImage: `url(${LoginPageBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="card bg-base-100 w-11/12 md:w-5/12 shrink-0 shadow-2xl py-7">
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
