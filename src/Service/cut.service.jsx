import React from "react";

 export function CutDate(date){
    const dateonly = date?.replace(/[^\d.]/g, '').slice(0, 8);
    const day = dateonly?.slice(6,8);
    const month = dateonly?.slice(4,6);
    const year = dateonly?.slice(0,4);
    const result = `${day}/${month}/${year}`
    return result;
}

export function CutTime(time) {
    let timeonly = time?.slice(0,5);
    return timeonly;
}

export function CutTel(tel) {
    let telphone = tel.slice(0,3) + "-" + tel.slice(3,6) + "-" + tel.slice(6,10)
    return telphone;
}