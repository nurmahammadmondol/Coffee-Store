import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

import Swal from 'sweetalert2';

const Coffee = ({ coffee }) => {
  const { _id, name, chef, price, photo } = coffee;
  const navigate = useNavigate();

  const { User, Coffees, setCoffees } = useContext(AuthContext);

  const handleRemoveCoffee = ID => {
    console.log(ID);
    console.log(Coffees);

    const RemainingCoffee = Coffees.filter(coffee => coffee._id !== ID);
    // console.log(RemainingCoffee);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://coffee-shop-server-site-five.vercel.app/coffees/${ID}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              setCoffees(RemainingCoffee);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F5F4F1] flex items-center gap-4 h-[220px] p-7 rounded-md z-50">
      <div className="h-full w-1/3 " data-aos="fade-right">
        <img className="h-full w-full " src={photo} alt="Coffee Photo" />
      </div>

      <div
        className="flex justify-between items-center w-2/3 "
        data-aos="fade-left"
      >
        <div>
          <h3>
            <span className="font-semibold text-sm  md:text-lg">Name :</span>
            <span className="text-xs md:text-sm"> {name}</span>
          </h3>
          <p>
            <span className="font-semibold text-sm  md:text-lg">Chef :</span>
            <span className="text-xs md:text-sm"> {chef}</span>
          </p>
          <p>
            <span className="font-semibold text-sm  md:text-lg">Price :</span>
            <span className="text-xs md:text-sm"> {price} Taka</span>
          </p>
          {/* <p>
            <span className="font-semibold">Coffee ID :</span>
            <span className="text-sm"> {_id}</span>
          </p> */}
        </div>

        {User ? (
          <div className="join join-vertical space-y-2">
            <Link to={`/Details/${_id}`}>
              <button className="btn btn-xs md:btn-sm join-item bg-[#D2B48C] text-white">
                <i class="fa-solid fa-eye"></i>
              </button>
            </Link>
            <Link to={`/UpdateCoffee/${_id}`}>
              <button className="btn btn-xs md:btn-sm join-item bg-[#3C393B] text-white">
                <i class="fa-solid fa-user-pen"></i>
              </button>
            </Link>

            <button
              onClick={() => handleRemoveCoffee(_id)}
              className="btn  btn-xs md:btn-sm join-item bg-[#EA4744] text-white"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        ) : (
          <div className="join join-vertical space-y-2">
            <Link to="/Login">
              <button className="btn join-item bg-[#D2B48C] text-white">
                <i class="fa-solid fa-eye"></i>
              </button>
            </Link>
            <Link to="/Login">
              <button className="btn join-item bg-[#3C393B] text-white">
                <i class="fa-solid fa-user-pen"></i>
              </button>
            </Link>
            <Link to="/Login">
              <button className="btn join-item bg-[#EA4744] text-white">
                <i class="fa-solid fa-trash"></i>
              </button>
            </Link>
          </div>
        )}
        {/* <div className="join join-vertical space-y-2">
          <Link to={`/Details/${_id}`}>
            <button className="btn join-item bg-[#D2B48C] text-white">
              <i class="fa-solid fa-eye"></i>
            </button>
          </Link>
          <Link to={`/UpdateCoffee/${_id}`}>
            <button className="btn join-item bg-[#3C393B] text-white">
              <i class="fa-solid fa-user-pen"></i>
            </button>
          </Link>

          <button
            onClick={() => handleRemoveCoffee(_id)}
            className="btn join-item bg-[#EA4744] text-white"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Coffee;
