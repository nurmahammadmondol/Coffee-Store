import Rectangle9 from '../../assets/cups/Rectangle 9.png';
import Rectangle10 from '../../assets/cups/Rectangle 10.png';
import Rectangle11 from '../../assets/cups/Rectangle 11.png';
import Rectangle12 from '../../assets/cups/Rectangle 12.png';
import Rectangle13 from '../../assets/cups/Rectangle 13.png';
import Rectangle14 from '../../assets/cups/Rectangle 14.png';
import Rectangle15 from '../../assets/cups/Rectangle 15.png';
import Rectangle16 from '../../assets/cups/Rectangle 16.png';

const Follow = () => {
  return (
    <div className="my-32 ">
      <div className="text-center mb-10">
        <small className="text-sm">Follow Us Now</small>
        <h4 className="text-3xl rancho-regular">Follow on Instagram</h4>
      </div>

      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <img src={Rectangle9} alt="" data-aos="zoom-in-up" />
        <img src={Rectangle10} alt="" data-aos="zoom-in-up" />
        <img src={Rectangle11} alt="" data-aos="zoom-in-up" />
        <img src={Rectangle12} alt="" data-aos="zoom-in-up" />
        <img src={Rectangle13} alt="" data-aos="zoom-in-up" />
        <img src={Rectangle14} alt="" data-aos="zoom-in-up" />
        <img src={Rectangle15} alt="" data-aos="zoom-in-up" />
        <img src={Rectangle16} alt="" data-aos="zoom-in-up" />
      </div>
    </div>
  );
};

export default Follow;
