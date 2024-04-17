'use client'
import axios from 'axios';
import {useRouter} from 'next/navigation'
import IssueForm from '@/components/IssueForm';
import Navbar from '@/components/Navbar';

export default function UserProfile({params} : any){
   const router = useRouter()
  const submitHandle = async() =>{
    
    const res = await axios.get('/api/users/logout');
    // router.push('/login')
    console.log(res);

      
  }

  const submitHandle2 = async() =>{
    
    const res = await axios.post('/api/issues/create' , {
      "title" : "title",
      "description" : "description"
    });
    // router.push('/login')
    console.log(res);

      
  }
    return(
      <>
      <Navbar/>
     <IssueForm/>
     </>


      //  {/* <div className="flex justify-center align-middle bg-red-400">
      //        <h3>
      //          {params.id}

      //          <button onClick={ submitHandle}> logout</button>
      //          {/* <br /><br /><br /> */}
      //          <button onClick={submitHandle2}>get</button>
      //        </h3>
      //        </div> */}
       
    )
}