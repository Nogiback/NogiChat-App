import { BotMessageSquare } from 'lucide-react';
import SidebarMenuIcon from './SidebarMenuIcon';
import Messages from './Messages';
import MessageInput from './MessageInput';
import useChat from '../zustand/useChat';
import { useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';

export default function ChatContainer() {
  const { selectedUser, setSelectedUser } = useChat();
  const { authUser } = useAuthContext();

  useEffect(() => {
    return () => setSelectedUser(null);
  }, [setSelectedUser]);

  return (
    <div className='min-w-[400px] sm:min-w-[500px] flex flex-col border md:rounded-l-none rounded-lg border-base-300 p-4 gap-2'>
      {!selectedUser ? (
        <>
          <SidebarMenuIcon />
          <WelcomeMessage authUser={authUser!} />
        </>
      ) : (
        <>
          <div className='flex items-center gap-2'>
            <SidebarMenuIcon />
            <span className='label-text'>To: </span>
            <span className='font-bold'>{`${selectedUser.firstName} ${selectedUser.lastName}`}</span>
          </div>
          <div className='divider m-0'></div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

type AuthUserType = {
  authUser: {
    firstName: string;
    lastName: string;
    message: string;
    email: string;
    username: string;
    profilePic: string;
    _id: string;
  };
};

function WelcomeMessage({ authUser }: AuthUserType) {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center gap-4 px-4 text-center sm:text-lg md:text-xl font-semibold'>
        <p>{`Welcome ${authUser.firstName} ${authUser.lastName}!`}</p>
        <p>Select a user to start chatting!</p>
        <BotMessageSquare size={46} />
      </div>
    </div>
  );
}
