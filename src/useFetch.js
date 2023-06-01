
import { useEffect,useState } from "react";
const useFetch = (url) => {
    const [data,setData]=useState([]);
    const [pending,setPending]=useState(true);
    const [error,setError]=useState(null)
    useEffect(()=>{
        setTimeout(()=>{
         fetch(url)
        .then(res=>{
         if(!res.ok)
           {throw Error("could not fetch data from resourse")}
         return res.json()
        })
        .then(data=>{
         console.log(data)
         setData(data)
         setPending(false)
        })
        .catch(err=>{
         console.log(err.message)
         setError(err.message)
         setPending(false)
        })
        },1000)
     },[url])

    return ({data,pending,error});
}
 
export default useFetch;