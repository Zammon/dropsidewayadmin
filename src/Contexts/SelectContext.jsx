import React,{ useState } from 'react';
import { useEffect } from 'react';
import AxiosFetch from './Fetchs/AxiosFetch';

export const SelectsContext = React.createContext();

export const GenderSelect = [
    {
        title: 'ชาย',
        value: 'ชาย'
    },
    {
        title: 'หญิง',
        value: 'หญิง'
    },
    {
        title: 'อื่นๆ',
        value: 'อื่นๆ'
    }
]

export const DaySelect = () => {
    var result = []
    for(let i=1; i<32; i++) {
        if(i.toString().length === 1){
            result.push({ title: `${i}`, value: `0${i}`});
        } else {
            result.push({ title: `${i}`, value: `${i}`});
        }
    }
    return result;
}

export const MonthSelect = [
    {
        title: 'มกราคม',
        value: '01'
    },
    {
        title: 'กุมภาพันธ์',
        value: '02'
    },
    {
        title: 'มีนาคม',
        value: '03'
    },
    {
        title: 'เมษายน',
        value: '04'
    },
    {
        title: 'พฤษภาคม',
        value: '05'
    },
    {
        title: 'มิถุนายน',
        value: '06'
    },
    {
        title: 'กรกฎาคม',
        value: '07'
    },
    {
        title: 'สิงหาคม',
        value: '08'
    },
    {
        title: 'กันยายน',
        value: '09'
    },
    {
        title: 'ตุลาคม',
        value: '10'
    },
    {
        title: 'พฤศจิกายน',
        value: '11'
    },
    {
        title: 'ธันวาคม',
        value: '12'
    },
]

export const YearSelect = () => {
    const now = new Date();
    const options = { timeZone: 'Asia/Bangkok', year: 'numeric' };
    const yearsTH = [];
    for (let year = now.getFullYear(); year >= now.getFullYear() - 50; year--) {
        const yearTH = new Date(year, 0, 1).toLocaleString('en-US', options);
        yearsTH.push(yearTH);
    }
    return yearsTH;
}

export default function SelectContextProvider({ children }) {
    
    const [selectTypePost, setSelectTypePost] = useState();
    const [selectTypeArea, setSelectTypeArea] = useState();
    const [selectTypeCategory, setSelectTypeCategory] = useState();
    const [selectTypeTags, setSelectTypeTags] = useState();
    const [selectTypeGender, setSelectTypeGendet] = useState();
    const [selectTypeAccout, setSelectTypeAccout] = useState();
    const [selectTypeStatusAccout, setSelectTypeStatusAccout] = useState();
    const [selectYears, setSelectYears] = useState();

const Gender = async ()=> {
    await AxiosFetch.get(`DropsidewayWebsite/Findtype/เพศแอดมิน`)
    .then(req =>{
        setSelectTypeGendet(req);
    })
    .catch(error => console.log(error));
}

const TypeAccout = async ()=> {
    await AxiosFetch.get(`DropsidewayWebsite/Findtype/ประเภทแอดมิน`)
    .then(req =>{
        setSelectTypeAccout(req);
    })
    .catch(error => console.log(error));
}

const StatusAccout = async ()=> {
    await AxiosFetch.get(`DropsidewayWebsite/Findtype/สถานะแอ็คเคาท์`)
    .then(req =>{
        setSelectTypeStatusAccout(req);
    })
    .catch(error => console.log(error));
}

// Typepost
const Typepostapi = async () =>{
    const values = await AxiosFetch.get(`DropsidewayWebsite/Findtype/ประเภทโพสต์`)
    if((values&&values.data.length!==0)&&values&&values.request.status===200){
        return setSelectTypePost(values);
    }else return setSelectTypePost("No any items.");
}

// Categorypost
const Categorypostapi = async () =>{
    const values = await AxiosFetch.get(`DropsidewayWebsite/Findtype/ประเภทสิ่งของหาย`)
    if((values&&values.data.length!==0)&&values&&values.request.status===200){
        return setSelectTypeCategory(values);
    }else return setSelectTypeCategory("No any items.");
}


// Tagpost
const Tagpostapi = async () =>{
    const values = await AxiosFetch.get(`DropsidewayWebsite/Findtype/แท็กของที่หาย`)
    if((values&&values.data.length!==0)&&values&&values.request.status===200){
        return setSelectTypeTags(values);
    }else return setSelectTypeTags("No any items.");
}

// Area missing or meetting lost item post
const Areapostapi = async () =>{
    const values = await AxiosFetch.get(`DropsidewayWebsite/Findtype/บริเวณพื้นที่พบเจอของหาย`)

    if((values&&values.data.length!==0)&&values&&values.request.status===200){
        return setSelectTypeArea(values);
    }else return setSelectTypeArea("No any items.");
}

// Create Post CreatePost.page
const CreateNewpostapi = async (data) => {
    const values = await AxiosFetch.post(`DropsidewayAdmin/CreatePosts`,data)
}


// List Item Post ManagePost.page
const Listpostmanageapi = async () => {
    const values = await AxiosFetch.get(`DropsidewayAdmin/GetListPost`)
    if((values&&values.data.length!==0)&&values&&values.request.status===200){
        return values
    }else return "No any items."
}

useEffect( ()=>{
    Typepostapi();
    Categorypostapi();
    Tagpostapi();
    Areapostapi();
    Gender();
    TypeAccout();
    StatusAccout();
},[])
    
    return(
        <SelectsContext.Provider 
            value={{
                selectTypePost,setSelectTypePost,
                selectTypeArea,setSelectTypeArea,
                selectTypeCategory,setSelectTypeCategory,
                selectTypeTags,setSelectTypeTags,
                selectTypeGender, setSelectTypeGendet,
                selectTypeAccout, setSelectTypeAccout,
                selectTypeStatusAccout, setSelectTypeStatusAccout,
                selectYears, setSelectYears
                }}
        >
            {children}
        </SelectsContext.Provider>
    );
}