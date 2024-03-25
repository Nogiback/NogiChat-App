import React from 'react';
import { BotMessageSquare } from 'lucide-react';
import SidebarMenuIcon from './SidebarMenuIcon';
import Messages from './Messages';
import MessageInput from './MessageInput';

export default function ChatContainer() {
  const noChatSelected = false;

  return (
    <div className='min-w-[400px] sm:min-w-[500px] flex flex-col border md:rounded-l-none rounded-lg border-base-300 p-4 gap-2'>
      {noChatSelected ? (
        <>
          <SidebarMenuIcon />
          <WelcomeMessage />
        </>
      ) : (
        <>
          <div className='flex items-center gap-2'>
            <SidebarMenuIcon />
            <span className='label-text'>To: </span>
            <span className='font-bold'>John Doe</span>
          </div>
          <div className='divider m-0'></div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

function WelcomeMessage() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center gap-4 px-4 text-center sm:text-lg md:text-xl font-semibold'>
        <p>Welcome John Doe!</p>
        <p>Select a user to start chatting!</p>
        <BotMessageSquare size={46} />
      </div>
    </div>
  );
}
