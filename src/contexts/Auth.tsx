import React, {createContext, useContext} from 'react'
import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps {
    children: React.ReactNode;
}

interface User {
    id: number;
    name: string;
    email: string;
    image?: string;
}

interface AuthValue {
    user: User;
    setUser: (user: User) => void;
    signInGoogle: () => Promise<void>
} // tipagem do state que se vai utilizar

interface AuthResponse {
    type: string;
    params: {
        access_token: string;
    }
}

interface GoogleUserInfo {
    email: string;
    family_name: string;
    given_name: string;
    id: number;
    locale: string;
    name: string;
    picture: string;
    verified_email: boolean,
}

const AuthContext = createContext({
    user: {
        id: 0,
        name: '',
        email: '',
        image: '',
    },
    setUser: () => {},
    signInGoogle: async () => {}
} as AuthValue); // initial State

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = React.useState<User>({} as User);

    const signInGoogle = async () => {
        try {

            const clientId = String(process.env.REACT_APP_CLIENT_ID)
            const redirectURI = String(process.env.REACT_APP_REDRIECT_URL)
            const responseType = 'token'
            const scope = encodeURI('profile email')

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}&scope=${scope}`

            const {type, params} = await AuthSession.startAsync({authUrl}) as AuthResponse;

            if(type === 'success'){
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const {id, name, picture, email}  = await response.json() as GoogleUserInfo;

                setUser({
                    id,
                    name,
                    email,
                    image: String(picture),
                })

            }
        } catch (e) {
            throw new Error(e)
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            signInGoogle,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default  AuthProvider;
