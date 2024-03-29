import { createContext, useState, useEffect, useContext } from 'react';
import { useAuthContext } from './AuthContext';
import io, { Socket } from 'socket.io-client';

type SocketContextType = {
  socket: Socket | null;
  onlineUsers: string[];
};

export const SocketContext = createContext<SocketContextType>({
  socket: null,
  onlineUsers: [],
});

// eslint-disable-next-line react-refresh/only-export-components
export function useSocketContext() {
  return useContext(SocketContext);
}

export default function SocketContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io('https://nogichat.onrender.com', {
        query: {
          userID: authUser._id,
        },
      });

      setSocket(socket);

      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });
      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
}
