import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from 'react';

type authContextType = {
  authUser: string;
  setAuthUser: Dispatch<SetStateAction<string | null>>;
};

export const AuthContext = createContext<authContextType>({
  authUser: '',
  setAuthUser: () => '',
});

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('authUser')!) || null,
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}
