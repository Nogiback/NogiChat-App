import { createContext, useState, useEffect, useContext } from 'react';
import { useAuthContext } from './AuthContext';
import io, { Socket } from 'socket.io-client';

type User = {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  username: string;
  profilePic: string;
  _id: string;
};

type SocketContextType = {
  socket: Socket | null;
  onlineUsers: string[];
};

export const SocketContext = createContext<SocketContextType>({
  socket: null,
  onlineUsers: [],
});

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
      const socket = io('http://localhost:8000', {
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
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
}
