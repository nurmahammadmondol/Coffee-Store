import { useLoaderData, useNavigate } from 'react-router-dom';
import addCoffeePageBG from '../../assets/pic/11.png';

const Details = () => {
  const loaderCoffeeDetails = useLoaderData();
  // console.log(loaderCoffeeDetails);
  const { name, chef, supplier, price, category, details, photo } =
    loaderCoffeeDetails;

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url(${addCoffeePageBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        onClick={handleBack}
        className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto pb-5 flex items-center gap-2 font-bold text-sm rancho-regular"
      >
        <i class="fa-solid fa-arrow-left"></i>
        Back to Home
      </div>
      <div className="bg-[#F4F3F0] h-full w-11/12 md:w-10/12 lg:w-9/12 mx-auto p-14 md:flex gap-10">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img className="" src={photo} alt="" />
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 space-y-2">
          <h5 className="text-3xl md:text-5xl font-bold rancho-regular">
            Niceties
          </h5>
          <p>
            <span className="text-lg font-bold ">Name :</span>
            <span className="text-sm"> {name}</span>
          </p>
          <p>
            <span className="text-lg font-bold ">Chef : </span>
            <span className="text-sm"> {chef}</span>
          </p>
          <p>
            <span className="text-lg font-bold ">Supplier :</span>
            <span className="text-sm"> {supplier}</span>
          </p>
          <p>
            <span className="text-lg font-bold ">Price :</span>
            <span className="text-sm"> {price}</span>
          </p>
          <p>
            <span className="text-lg font-bold ">Category : </span>
            <span className="text-sm"> {category}</span>
          </p>
          <p>
            <span className="text-lg font-bold ">Details : </span>
            <span className="text-sm"> {details}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
