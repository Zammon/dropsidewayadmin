import React,{useEffect, useRef} from 'react';

export default function Settimedelay(callback, delay) {
    const stableCallback = useRef(callback);

    useEffect(()=>{
        stableCallback.current = callback;
        console.log(stableCallback);
    },[callback])

    useEffect(()=>{
        const tick = () => stableCallback.current();
        
        console.log(tick);

        if(typeof delay !== 'number') return;

        const t = setTimeout(tick, delay);

        return() => clearTimeout(t);

    },[delay])
}