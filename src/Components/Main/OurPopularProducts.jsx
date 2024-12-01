import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Coffee from './Coffee';
import coffeeShopBG4 from '../../assets/pic/4.png';
import coffeeShopBG5 from '../../assets/pic/5.png';
import { AuthContext } from '../Provider/AuthProvider';

const OurPopularProducts = () => {
  const { Coffees } = useContext(AuthContext);

  return (
    <div className="my-20 relative">
      <div className="w-11/12 md:w-9/12 mx-auto relative z-10">
        <div className="text-center space-y-2">
          <small className="text-xs">--- Sip & Savor ---</small>
          <h4 className="text-2xl font-bold rancho-regular">
            Our Popular Products
          </h4>
          <Link to="/AddNewCoffee">
            <button className="btn btn-sm rounded-none text-white text-sm mt-5 bg-[#E3B577] rancho-regular relative z-20">
              Add Coffee
            </button>
          </Link>
        </div>

        <div className="mt-10 h-[820px] grid grid-cols-1 md:grid-cols-2 gap-10 overflow-y-auto relative z-10">
          {Coffees.map(coffee => (
            <Coffee key={coffee._id} coffee={coffee}></Coffee>
          ))}
        </div>
      </div>

      {/* Background Images */}
      <div className="hidden md:flex absolute top-0 left-0 z-0">
        <img src={coffeeShopBG4} alt="" />
      </div>
      <div className="absolute right-0 top-0 z-0">
        <img src={coffeeShopBG5} alt="" />
      </div>
    </div>
  );
};

export default OurPopularProducts;
