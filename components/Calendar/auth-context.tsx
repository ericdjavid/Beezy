import { createContext, useState } from 'react';

interface AuthContextProps {
    accessToken: string | null;
    setAuthTokens: (token: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({
    accessToken: null,
    setAuthTokens: () => {},
});

export const useAuth = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);

    const setAuthTokens = (token: string) => {
        setAccessToken(token);
    };

    return { accessToken, setAuthTokens };
};