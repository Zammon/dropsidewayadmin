import {useEffect, useRef} from 'react';

export const useSetDelay = (callback, delay) => {
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