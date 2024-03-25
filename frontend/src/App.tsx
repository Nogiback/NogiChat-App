import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <Routes>
        {/* TODO: PROTECT HOME PAGE, IF NOT LOGGED IN */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* TODO: PROTECT PROFILE PAGE, IF NOT LOGGED IN */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </div>
  );
}

export default App;
