'use client'
import axios from 'axios';
import {useRouter} from 'next/navigation'
export default function UserProfile({params} : any){
   const router = useRouter()
  const submitHandle = async() =>{
    
    const res = await axios.get('/api/users/logout');
    // router.push('/login')
    console.log(res);

      
  }
    return(
     
       <div className="flex justify-center align-middle bg-red-400">
             <h3>
               {/* {params.id} */}
                about
               {/* <button onClick={ submitHandle}> logout</button> */}
             </h3>

       </div>
    )
}
