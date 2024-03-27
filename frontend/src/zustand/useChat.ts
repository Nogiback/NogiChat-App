import { create } from 'zustand';

const useChat = create((set) => ({
  selectedUser: null,
  setSelectedUser: (selectedUser: object | null) => set({ selectedUser }),
  messages: [],
  setMessages: (messages: []) => set({ messages }),
}));

export default useChat;
