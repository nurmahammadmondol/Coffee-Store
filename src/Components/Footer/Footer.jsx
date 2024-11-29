import footerImageBG from '../../assets/pic/13.jpg';
import logo from '../../assets/pic/logo1.png';
import copyrightBG from '../../assets/pic/24.jpg';
import Typewriter from 'typewriter-effect';

const Footer = () => {
  return (
    <footer>
      <div
        className="p-10 md:p-20"
        style={{
          backgroundImage: `url(${footerImageBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-11/12 md:w-10/12 mx-auto md:flex gap-10 justify-center items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <div>
              <img className="h-20 w-20" src={logo} alt="" />
              <h4 className="text-3xl md:text-5xl rancho-regular my-3">
                Espresso Emporium
              </h4>
              <p className="text-sm text-gray-400">
                <Typewriter
                  options={{
                    strings: [
                      '<span class="text-black ">Always </span>ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion. ',
                    ],

                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2">
              <h6 className="text-xl md:text-3xl rancho-regular">
                Get in Touch
              </h6>
              <p className="flex gap-2 items-center">
                <i class="fa-solid fa-phone"></i> +88 01533 333 333
              </p>
              <p className="flex gap-2 items-center">
                <i class="fa-solid fa-envelope"></i> info@gmail.com
              </p>
              <p className="flex gap-2 items-center">
                <i class="fa-solid fa-location-dot"></i> 72, Wall street, King
                Road, Dhaka
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 mt-10 md:mt-0">
            <h5 className='className="text-2xl md:text-3xl rancho-regular'>
              Connect with Us
            </h5>

            <form className="flex flex-col gap-4">
              <label className="input  flex items-center gap-2">
                <input type="text" className="grow " placeholder="Name" />
              </label>

              <label className="input  flex items-center gap-2">
                <input type="email" className="grow" placeholder="Email" />
              </label>

              <textarea
                placeholder="Message"
                className="textarea  textarea-md w-full h-[120px]"
              ></textarea>

              <input
                type="submit"
                value="Send Message"
                className="btn btn-outline text-lg rancho-regular"
              />
            </form>
          </div>
        </div>
      </div>

      <div
        className="py-2 text-white text-center"
        style={{
          backgroundImage: `url(${copyrightBG})`,
          backgroundPosition: 'center',
          // backgroundSize: 'cover',
        }}
      >
        <h6 className="rancho-regular text-sm">
          Copyright Espresso Emporium ! All Rights Reserved
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
