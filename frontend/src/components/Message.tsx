export default function Message() {
  return (
    <div className='chat chat-end text-sm'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img
            alt='user profile picture'
            src='https://ui-avatars.com/api/?background=random'
          ></img>
        </div>
      </div>
      <div className='chat-bubble chat-bubble-primary p-3'>Hey What's up!</div>
      <div className='chat-footer opacity-50 text-xs py-1'>12:46</div>
    </div>
  );
}
