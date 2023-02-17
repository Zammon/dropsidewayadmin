import { createContext,useState } from 'react';
import iconprofile from '../../userIconProfile.png'

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [statusAuth, setStatusAuth] = useState(false);
    const [userdetail, setUserDetail] = useState(
        {
            profile: iconprofile,
            id:"Unknow ID",
            name:"Unknow Name",
            type:"Unknow Type",
            createAt:"Unknow Date",
            gender:"Unknow Gender",
            birthday:"Unknow Birthday",
            tel:"Unknow Tel Phon",
        }
    );


    return(
        <AuthContext.Provider
            value={{
                statusAuth,setStatusAuth,
                userdetail, setUserDetail
            }}
        >
            {children}
        </AuthContext.Provider>
    )

 }