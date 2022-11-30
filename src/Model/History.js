import React from "react";
import profiles from '../user_profile.jpg'

    const historyUsers = [
        {
            typePage: 1,
            user_profile: profiles,
            user_name: 'หม่นหมอง มองใจดาว',
            user_email: 'Hot1209@gmail.com',
            user_bd: '08 Oct. 2022',
            active_accout: '13/09/65'
        },{
            typePage: 1,
            user_profile: profiles,
            user_name: 'คนมั่นใจ ทำอะไรก็ดูดี',
            user_email: 'Hot1210@gmail.com',
            user_bd: '01 Oct. 2022',
            active_accout: '09/09/65'
        },{
            typePage: 1,
            user_profile: profiles,
            user_name: 'เขินอาย นายหน้ามน',
            user_email: 'Hot1211@gmail.com',
            user_bd: '22 Oct. 2022',
            active_accout: '05/09/65'
        },{
            typePage: 1,
            user_profile: profiles,
            user_name: ' หนุ่มหน้ามน อะคนหลายใจ',
            user_email: 'Hot1212@gmail.com',
            user_bd: '29 Oct. 2022',
            active_accout: '02/09/65'
        }
    ]

    const historyPosts = [
        {
            typePage: 2,
            user_profile: profiles,
            user_name: 'เผลอหน่อยมีคนแอบถ่าย',
            user_post: {
                target: 'ไอโบ้ คิดคดแอบขโมยอาหารเจ้านายเพื่อประทังชีวิต',
                posted: {
                    date: '13/09/22',
                    time: '15:00'
                }
            },
            user_email: '',
            user_bd: '',
            view_when: ''
        },{
            typePage: 2,
            user_profile: profiles,
            user_name: 'อิอิส์ ลืมของ',
            user_post: {
                target: 'รองเท้าพื้นแดงที่ฉัน ใฝ่ฝันคริสเตียน ราบูต๊อง คริสเตรียมราบูตั๊ง',
                posted: {
                    date: '13/09/22',
                    time: '14:24'
                }
            },
            user_email: '',
            user_bd: '',
            view_when: ''
        },{
            typePage: 2,
            user_profile: profiles,
            user_name: 'หนูหิวข้าวมันไก่ทอด',
            user_post: {
                target: 'คิดดีๆก่อนรับของชินนี้ไป มีคำสาปอยู่ระวังด้วยละ',
                posted: {
                    date: '13/09/22',
                    time: '14:20'
                }
            },
            user_email: '',
            user_bd: '',
            view_when: ''
        },{
            typePage: 2,
            user_profile: profiles,
            user_name: 'อิอิส์ ลืมของ',
            user_post: {
                target: 'รองพื้นสีขาวเหมือนนดสดของใครหายหรือ เปล่ามันตกอยู่ที่ริมระเบียงห้องเรา เนี่ย',
                posted: {
                    date: '13/09/22',
                    time: '13:48'
                }
            },
            user_email: '',
            user_bd: '',
            view_when: ''
        }
    ]

    export {historyUsers, historyPosts};

