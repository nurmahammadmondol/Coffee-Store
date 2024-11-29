import bannerBG from '../../assets/pic/3.png';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div
      className="md:h-[500px] md:flex justify-end items-center text-white "
      style={{
        backgroundImage: `url(${bannerBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      }}
    >
      <div className="w-full md:w-1/2 p-10">
        <h3 className="text-3xl md:text-5xl font-bold rancho-regular">
          <Typewriter
            options={{
              strings: [
                'Would you like a Cup of Delicious <span class="text-[#E3B577]">Coffee !</span>',
              ],

              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p className="text-sm text-gray-300 my-5 ">
          Its coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <div data-aos="fade-up" data-aos-duration="3000">
          <button className="btn rounded-none  text-white font-bold border-none bg-[#E3B577] ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
