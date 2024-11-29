import Img1 from '../../../assets/icons/1.png';
import Img2 from '../../../assets/icons/2.png';
import Img3 from '../../../assets/icons/3.png';
import Img4 from '../../../assets/icons/4.png';

const Info = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <img src={Img1} alt="" />
        <h6 className="text-2xl rancho-regular my-2">Awesome Aroma</h6>
        <p className="text-sm text-gray-400">
          You will definitely be a fan of the design & aroma of your coffee!
        </p>
      </div>
      <div>
        <img src={Img2} alt="" />
        <h6 className="text-2xl rancho-regular my-2">High Quality</h6>
        <p className="text-sm text-gray-400">
          We served the coffee to you maintaining the best quality!
        </p>
      </div>
      <div>
        <img src={Img3} alt="" />
        <h6 className="text-2xl rancho-regular my-2">Pure Grades</h6>
        <p className="text-sm text-gray-400">
          The coffee is made of the green coffee beans which you will love!
        </p>
      </div>
      <div>
        <img src={Img4} alt="" />
        <h6 className="text-2xl rancho-regular my-2">Proper Roasting</h6>
        <p className="text-sm text-gray-400">
          Your coffee is brewed by first roasting the green coffee beans!
        </p>
      </div>
    </div>
  );
};

export default Info;
