import {useState, useEffect} from 'react';

function useDebounce (value, delay) {
    const [deBounceValue, setDeBounceValue] = useState(value);
    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            return setDeBounceValue(value);
        }, delay);
        return ()=>{
            clearTimeout(timeOutId)
        }
    },[value]);
    
    return deBounceValue;
}
export default useDebounce;