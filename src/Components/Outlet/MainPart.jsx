import Banner from '../Header/Banner';
import Info from '../Main/Feetback/Info';
import Follow from '../Main/Follow';
import OurPopularProducts from '../Main/OurPopularProducts';

const MainPart = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="bg-[#ECEAE3] p-8">
        <Info></Info>
      </div>
      <div>
        <OurPopularProducts></OurPopularProducts>
      </div>

      <div>
        <Follow></Follow>
      </div>
    </div>
  );
};

export default MainPart;
