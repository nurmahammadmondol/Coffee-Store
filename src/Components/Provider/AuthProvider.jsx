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

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  const AuthGoogle = new GoogleAuthProvider();

  const CreateUser = (name, email, password, confirmPassword) => {
    return createUserWithEmailAndPassword(
      auth,
      name,
      email,
      password,
      confirmPassword
    );
  };

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LoginWithGoogle = () => {
    return signInWithPopup(auth, AuthGoogle);
  };

  const LogOutUser = () => {
    alert('account delete');
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, User => {
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
  };

  return (
    <AuthContext.Provider value={AllContent}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
