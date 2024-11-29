import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Coffee from './Coffee';
import coffeeShopBG4 from '../../assets/pic/4.png';
import coffeeShopBG5 from '../../assets/pic/5.png';

const OurPopularProducts = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1000/coffees')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setCoffees(data);
      });
  }, []);

  return (
    <div className=" my-20 relative">
      <div className="w-11/12 md:size-9/12 mx-auto">
        <div className="text-center space-y-2">
          <small className="text-xs">--- Sip & Savor ---</small>
          <h4 className="text-2xl font-bold rancho-regular">
            Our Popular Products
          </h4>
          <Link to="/AddNewCoffee">
            <button className="btn btn-sm rounded-none text-white text-sm mt-5 bg-[#E3B577] rancho-regular">
              Add Coffee
            </button>
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-10 h-[820px]  overflow-auto ">
          {coffees.map(coffee => (
            <Coffee key={coffee._id} coffee={coffee}></Coffee>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <img src={coffeeShopBG4} alt="" />
      </div>
      <div className="absolute right-0 top-0">
        <img src={coffeeShopBG5} alt="" />
      </div>
    </div>
  );
};

export default OurPopularProducts;
