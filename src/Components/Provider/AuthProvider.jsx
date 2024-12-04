import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Fire/Firebase';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  const AuthGoogle = new GoogleAuthProvider();

  const CreateUser = (name, email, password, confirmPassword) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      name,
      email,
      password,
      confirmPassword
    );
  };

  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LoginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, AuthGoogle);
  };

  const LogOutUser = () => {
    setLoading(true);
    // alert('account delete');
    Swal.fire({
      title: 'Are you sure?',
      text: 'Want to log out of your account ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E3B577',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logOut it!',
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Log Out!',
          text: 'Your account has been logged out..',
          icon: 'success',
          confirmButtonColor: '#E3B577',
        });
        return signOut(auth);
      }
    });
  };

  const [Coffees, setCoffees] = useState([]);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://coffee-shop-server-site-five.vercel.app/coffees')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setCoffees(data);
      });

    fetch('https://coffee-shop-server-site-five.vercel.app/users')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, User => {
      setLoading(false);
      setUser(User);
      console.log('Your account created successfully', User);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const AllContent = {
    CreateUser,
    LoginUser,
    LoginWithGoogle,
    LogOutUser,
    User,
    setUser,
    Coffees,
    setCoffees,
    Users,
    Loading,
  };

  return (
    <AuthContext.Provider value={AllContent}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
