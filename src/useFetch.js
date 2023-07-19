import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // le parentesi quadre alla fine della funzione servono a renderizzare questo hook solo al primo load e per passare dei parametri che in caso cambino faranno partire il processo
    useEffect(() => {
        setTimeout(() => {
            fetch(url).then( res => {
                return res.json();
            })
            .then( data => {
                setData(data);
                setIsPending(false)
            });
        }, 1000);
    }, [url]);

    return {data,isPending};
}
 
export default useFetch;