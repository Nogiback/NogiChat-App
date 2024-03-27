import { useAuthContext } from '../context/AuthContext';
import { extractTime } from '../utils/getTimestamp';
import useChat from '../zustand/useChat';

type MessageProps = {
  message: {
    createdAt: Date;
    updatedAt: Date;
    message: string;
    receiverID: string;
    senderID: string;
    _id: string;
  };
};

export default function Message({ message }: MessageProps) {
  const { authUser } = useAuthContext();
  const { selectedUser } = useChat();
  const timestamp = extractTime(message.createdAt);
  const fromAuthUser = message.senderID === authUser?._id;
  const chatBubble = fromAuthUser ? 'chat-end' : 'chat-start';
  const chatAvatar = fromAuthUser
    ? authUser.profilePic
    : selectedUser?.profilePic;
  const chatColor = fromAuthUser ? 'chat-bubble-primary' : '';

  return (
    <div className={`chat text-sm ${chatBubble}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img alt='user profile picture' src={chatAvatar}></img>
        </div>
      </div>
      <div className={`chat-bubble p-3 ${chatColor}`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs py-1'>{timestamp}</div>
    </div>
  );
}
