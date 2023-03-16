import axios from 'axios';
import { createContext,useState,useEffect } from 'react';
import iconprofile from '../../userIconProfile.png'

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');
    const [statusAuth, setStatusAuth] = useState(true);
    const [userdetail, setUserDetail] = useState(
        {
            profile: iconprofile,
            id:"",
            username:"",
            type:"",
            createAt:"",
            gender:"",
            birthday:"",
            tel:"",
        }
    );

    const GetDetail = async () => {
        await axios.post("https://localhost:7113/api/DropsidewayAdmin/AccoutDetail",
        {
                "idAccout": JSON.parse(localStorage.getItem("userId"))
        }
        ,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
        }
        ).then((req)=>{
            console.log('detail user: ', req.data);
            setUserDetail(
                {
                    id: req.data.id,
                    profile: req.data.profile,
                    username: `${req.data.firstname} ${req.data.lastname}`,
                    birthday: req.data.birthdate,
                    createAt: req.data.createAt,
                    gender: req.data.gender,
                    tel: req.data.tel,
                    type: req.data.type,
                }
            )
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        if(!token||!id) return;
        GetDetail();
    },[id])

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