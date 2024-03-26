import Sidebar from '../components/Sidebar';
import ChatContainer from '../components/ChatContainer';

export default function Home() {
  return (
    <div className='flex min-h-[600px] rounded-lg overflow-hidden bg-clip-padding backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <ChatContainer />
    </div>
  );
}
