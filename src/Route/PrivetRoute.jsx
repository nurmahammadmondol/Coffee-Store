import { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
  const { User, Loading } = useContext(AuthContext);

  if (Loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
        Loading.....!
      </div>
    );
  }

  if (User) {
    return children;
  }

  return <Navigate to="/Login"></Navigate>;
};

export default PrivetRoute;
