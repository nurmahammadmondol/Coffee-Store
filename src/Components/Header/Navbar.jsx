import { NavLink } from 'react-router-dom';
import logo from '../../assets/pic/logo1.png';

const Navbar = () => {
  const Links = (
    <div className="flex items-center gap-5">
      <NavLink>Home</NavLink>
      <NavLink>All Coffee</NavLink>
      <NavLink>Shop</NavLink>
      <NavLink>Order</NavLink>
      <NavLink>Feedback</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact Us</NavLink>
    </div>
  );

  return (
    <div className="navbar w-11/12 mx-auto text-white">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  px-5 py-2 shadow text-black"
          >
            {Links}
          </ul>
        </div>
        <div className="h-11 w-11">
          <img className="h-full w-full" src={logo} alt="" />
        </div>
        <a className="btn btn-ghost text-2xl rancho-regular">
          Espresso Emporium
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
