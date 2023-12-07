"use client"
import useSWR from 'swr'
import axios from 'axios'
import { useSession } from 'next-auth/react'
const Dashboard =  () => {
  // const [data,setData]=useState([]);
  // const [err,setErr]=useState(false)
  // const [isLoading,setIsLoading]=useState(false)
  
  // const getData=async ()=>{
    //   setIsLoading(true);
    //   const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
      //     cache:"no-store"
  //   })
  //   if(!res.ok){
  //     setErr(true)
  //   }

  //   const result=await res.json();
  
  //   setData(result)
  // }
  // useEffect(()=>{
    //   getData()
    // }, [])
    
    // we will be using other hooks like react-query or swr
    // because these hooks comes with isLoading, error out of the box and 
    //  the help in easy data mutation
    // const res= await axios.get('https://jsonplaceholder.typicode.com/posts')
  // await res.json
  // console.log(res);
  
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const {data,error,isLoading}=useSWR('https://jsonplaceholder.typicode.com/posts',fetcher)

  const session=useSession()
  console.log(session);

 
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
