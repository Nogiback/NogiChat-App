import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from 'react';

type AuthUserType = {
  gender: string;
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  username: string;
  profilePic: string;
  _id: string;
};

type AuthContextType = {
  authUser: AuthUserType | null;
  setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
};

export const AuthContext = createContext<AuthContextType>({
  authUser: {
    firstName: '',
    gender: '',
    lastName: '',
    message: '',
    email: '',
    username: '',
    profilePic: '',
    _id: '',
  },
  setAuthUser: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authUser, setAuthUser] = useState<AuthUserType | null>(
    JSON.parse(localStorage.getItem('authUser')!) || null,
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}
