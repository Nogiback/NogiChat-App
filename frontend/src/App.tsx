import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useAuthContext } from './context/AuthContext';

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='h-screen flex items-center justify-center'>
      <Routes>
        <Route
          path='/'
          element={authUser ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={authUser ? <Navigate to='/' /> : <Login />}
        />
        <Route
          path='/signup'
          element={authUser ? <Navigate to='/' /> : <Signup />}
        />
        <Route
          path='/profile'
          element={authUser ? <Profile /> : <Navigate to='/login' />}
        />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
      <Toaster closeButton richColors />
    </div>
  );
}

export default App;
