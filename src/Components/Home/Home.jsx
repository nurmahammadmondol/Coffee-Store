import Navbar from '../Header/Navbar';
import navbarImageBG from '../../assets/pic/15.jpg';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <div
        className=" py-1"
        style={{
          backgroundImage: `url(${navbarImageBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Home;
