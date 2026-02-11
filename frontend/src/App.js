import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import Landing from './components/Landing';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";
import axios from 'axios';
import { setSocket } from './redux/socketSlice';
import { setOnlineUsers, setAuthUser } from './redux/userSlice';

// Protected route component - only show HomePage if authenticated
const ProtectedHome = () => {
  const { authuser } = useSelector(store => store.user);
  return authuser ? <HomePage /> : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path:'/',
    element:<Landing/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/home',
    element:<ProtectedHome/>
  },
])

function App() {
  const {authuser} = useSelector(store=>store.user)
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  
  // Validate token on mount - clears stale auth if token expired
  useEffect(() => {
    const validateToken = async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/user/validate`, {
          withCredentials: true
        });
        // Token valid, keep authuser as is
      } catch (error) {
        // Token invalid/expired, clear auth state
        dispatch(setAuthUser(null));
      } finally {
        setChecked(true);
      }
    };
    validateToken();
  }, [dispatch]);
  
  useEffect(() => {
  if (authuser && authuser._id) {

    const newSocket = io(process.env.REACT_APP_API_URL, {
      query: {
        userId: authuser._id
      }
    });

    dispatch(setSocket(newSocket));

    newSocket.on('getOnlineUsers', (onlineUsers) => {
      dispatch(setOnlineUsers(onlineUsers));
    });

    return () => newSocket.close();
  } 
}, [authuser, dispatch]);

  
  // Don't render until token validation completes
  if (!checked) {
    return null;
  }
 
  return (
    <div className="w-full h-screen">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
