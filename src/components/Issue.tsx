import { useState } from "react";

interface issueProps{
    title : string,
    status : string
}
const  Issue:React.FC<issueProps> =(props) =>{

    // const[closed , setClosed] = useState(false);

    // if(props.status === 'closed'){
    //     setClosed(true);
    // }
    
    return(
       <div className="grid grid-cols-4 text-[18px] border-b-[1px] border-gray border-r-[1px] border-l-[1px] ">
          <div className="col-span-2 p-2 text-left ml-2"> {props.title}</div>

          {props.status === 'closed' && <div className="p-3 text-center"><p className="bg-red-200 text-red-700 font-bold text-[14px] w-max pl-3 pr-3 pt-1 pb-1 rounded-lg">open</p></div>}

          {props.status === 'open' && <div className="p-3 text-center"><p className="bg-green-200 text-green-700 font-bold text-[14px] w-max pl-3 pr-3 pt-1 pb-1 rounded-lg">closed</p></div> }
          
          {props.status === 'in-progress' &&<div className="p-3 text-left"><p className="bg-violet-200 text-violet-700 font-bold text-[14px] w-max pl-3 pr-3 pt-1 pb-1 rounded-lg">{props.status}</p></div>}
          <div className="p-2 text-left"> sat 12 2003</div>

       </div>
    )
}

export default Issue;