import { useNavigate } from 'react-router-dom';
import addCoffeePageBG from '../../assets/pic/11.png';

const AddNewCoffee = () => {
  const navigate = useNavigate();

  const handleAddCoffeeFromSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const addCoffee = {
      name,
      chef,
      supplier,
      price,
      category,
      details,
      photo,
    };

    // console.log(addCoffee);

    fetch('http://localhost:1000/coffees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addCoffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // if (data.insertedId > 0) {

        // }
      });
  };

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
      {/* w1Vz3z6EiCIqNgME*/}
      <div
        onClick={handleBack}
        className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto pb-5 flex items-center gap-2 font-bold text-sm rancho-regular"
      >
        <i class="fa-solid fa-arrow-left"></i>
        Back to Home
      </div>
      <div className="bg-[#F4F3F0] h-full w-11/12 md:w-10/12 lg:w-9/12 mx-auto p-10">
        <div className="text-center mb-10">
          <h4 className="text-lg font-bold mb-3 rancho-regular">
            Add a New Coffee
          </h4>
          <p className="w-11/12 md:w-9/12 mx-auto text-gray-400 text-sm">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <div>
          <form
            onSubmit={handleAddCoffeeFromSubmit}
            className="flex flex-col gap-3"
          >
            <div className="md:flex gap-5 clear-start w-full">
              <label className="form-control w-full md:w-1/2">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coffee name"
                  className="input  w-full"
                  name="name"
                />
              </label>

              <label className="form-control w-full md:w-1/2">
                <div className="label">
                  <span className="label-text">Chef</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  className="input  w-full"
                  name="chef"
                />
              </label>
            </div>
            <div className="md:flex gap-5 clear-start w-full">
              <label className="form-control w-full md:w-1/2">
                <div className="label">
                  <span className="label-text">Supplier</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="input  w-full"
                  name="supplier"
                />
              </label>
              {/* Taste */}
              <label className="form-control w-full md:w-1/2">
                <div className="label">
                  <span className="label-text">price</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coffee price"
                  className="input  w-full"
                  name="price"
                />
              </label>
            </div>
            <div className="md:flex gap-5 clear-start w-full">
              <label className="form-control w-full md:w-1/2">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coffee category"
                  className="input  w-full"
                  name="category"
                />
              </label>

              <label className="form-control w-full md:w-1/2">
                <div className="label">
                  <span className="label-text">Details</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter coffee details"
                  className="input  w-full"
                  name="details"
                />
              </label>
            </div>
            <div className="md:flex gap-5 clear-start w-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Photo</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter photo URL"
                  className="input  w-full"
                  name="photo"
                />
              </label>
            </div>
            <div className="w-full mt-5">
              <input
                type="submit"
                value="Add Coffee"
                className="btn w-full bg-[#D2B48C] rancho-regular"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCoffee;
