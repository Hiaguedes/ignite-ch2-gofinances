import React, {createContext, useContext} from 'react'
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage'
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
    signInGoogle: () => Promise<void>;
    isLogged: boolean;
    LogOut: () => void;
    isLoading: boolean;
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

const userInitialState = {
    id: 0,
    name: '',
    email: '',
    image: '',
}

const AuthContext = createContext({
    user: userInitialState,
    setUser: () => {},
    signInGoogle: async () => {},
    isLogged: false,
    LogOut: () => {},
    isLoading: false,
} as AuthValue); // initial State

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}: AuthProviderProps) => {
    const asyncStorageUserKey = '@gofinances:user';
    const [user, setUser] = React.useState<User>({} as User);
    const [isLogged, setIsLogged] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        const verifyLogin = async () => {
            const previousLoggin = await AsyncStorage.getItem(asyncStorageUserKey);
            const parsedPreviousLogin = previousLoggin ? JSON.parse(previousLoggin) : {} as User;
            if(previousLoggin){
                setUser(parsedPreviousLogin);
                setIsLogged(true)
            }
        }
        verifyLogin();
    }, [])

    const LogOut = async () => {
        setUser(userInitialState);
        setIsLogged(false)
        await AsyncStorage.removeItem(asyncStorageUserKey);
    }

    const signInGoogle = async () => {
        try {
            setIsLoading(true)
            const clientId = String(process.env.REACT_APP_CLIENT_ID)
            const redirectURI = String(process.env.REACT_APP_REDRIECT_URL)
            const responseType = 'token'
            const scope = encodeURI('profile email')

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}&scope=${scope}`

            const {type, params} = await AuthSession.startAsync({authUrl}) as AuthResponse;

            if(type === 'success'){
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const {id, name, picture, email}  = await response.json() as GoogleUserInfo;
                const userInfo = {
                    id,
                    name,
                    email,
                    image: String(picture),
                }
                setUser(userInfo)
                setIsLogged(true);
                await AsyncStorage.setItem(asyncStorageUserKey, JSON.stringify(userInfo));

            }
        } catch (e: any) {
            throw new Error(e)
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            signInGoogle,
            isLogged,
            LogOut,
            isLoading,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default  AuthProvider;
