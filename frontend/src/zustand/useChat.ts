import { create } from 'zustand';

type User = {
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  profilePic: string;
  _id: string;
};

type Message = {
  _id: string;
  senderID: string;
  receiverID: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  shouldShake: boolean;
};

type UserState = {
  selectedUser: User | null;
  setSelectedUser: (selectedUser: User | null) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
};

const useChat = create<UserState>((set) => ({
  selectedUser: null,
  setSelectedUser: (selectedUser) => set({ selectedUser }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useChat;
