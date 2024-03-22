import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const nav = useNavigate();

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>404</h1>
          <h4 className='text-33xl font-bold'>Page Not Found</h4>
          <p className='py-6'>
            The page you are looking for does not seem to exist
          </p>
          <button onClick={() => nav('/')} className='btn btn-primary'>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
