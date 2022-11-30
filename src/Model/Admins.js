import React from "react";
import userprofile1 from '../user_1.jpg'
import userprofile2 from '../user_2.png'
import userprofile3 from '../user_3.png'

let admins = [
    {
        id:'1',
        admin_profile: userprofile1,
        admin_name: 'Sahaphap Vorasan',
        admin_id: '620108020009',
        admin_rank:{
            name_rank: 'Admin Manager',
            color_rank: '#E50158'
        } ,
        admin_gender: 'Male',
        admin_birthday:{
            day:'12',
            month:'Sep.',
            year:'2000'   
        },
        admin_register_date:{
            day: '12',
            month: 'Sep.',
            year: '2022'
        },
        admin_phonenumber: '0635595915',
        admin_address: '110/1-4 Prachachuen Road, Thung Song Hong Subdistrict, Lak Si District, Bangkok 10210'
    },
    {
        id:'2',
        admin_profile: userprofile2,
        admin_name: 'Zammon Vireson',
        admin_id: '620108020008',
        admin_rank:{
            name_rank: 'Editor',
            color_rank: '#FF740F'
        } ,
        admin_gender: 'Gay',
        admin_birthday:{
            day:'12',
            month:'Sep.',
            year:'2000'   
        },
        admin_register_date:{
            day: '12',
            month: 'Sep.',
            year: '2022'
        },
        admin_phonenumber: '0635595915',
        admin_address: '110/1-4 Prachachuen Road, Thung Song Hong Subdistrict, Lak Si District, Bangkok 10210'
    },
    {
        id:'3',
        admin_profile: userprofile3,
        admin_name: 'Red Panda',
        admin_id: '62010802000+',
        admin_rank:{
                name_rank: 'Editor',
                color_rank: '#FF740F'
            },
        admin_gender: 'Male',
        admin_birthday:{
            day:'12',
            month:'Sep.',
            year:'2000'   
        },
        admin_register_date:{
            day: '12',
            month: 'Sep.',
            year: '2022'
        },
        admin_phonenumber: '0635595915',
        admin_address: '110/1-4 Prachachuen Road, Thung Song Hong Subdistrict, Lak Si District, Bangkok 10210'
    }
]

export default admins;