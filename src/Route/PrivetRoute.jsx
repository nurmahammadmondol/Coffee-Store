import { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
  const { User } = useContext(AuthContext);

  if (User) {
    return children;
  }

  return <Navigate to="/Login"></Navigate>;
};

export default PrivetRoute;
