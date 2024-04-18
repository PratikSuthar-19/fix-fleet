import { useState } from "react";

interface issueProps{
    title : string,
    status : string
    createdAt:string
}
const  Issue:React.FC<issueProps> =(props) =>{

    // const[closed , setClosed] = useState(false);

    // if(props.status === 'closed'){
    //     setClosed(true);
    // }
    
    const dateString =  props.createdAt;
    const dateObject = new Date(dateString);

const year = dateObject.getFullYear() % 100; // Get last two digits of the year
const month = dateObject.getMonth() + 1; // Months are zero-based, so add 1
const day = dateObject.getDate();

const formattedYear = year < 10 ? `0${year}` : year;
const formattedMonth = month < 10 ? `0${month}` : month;
const formattedDay = day < 10 ? `0${day}` : day;

const formattedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;
    return(
       <div className="grid grid-cols-4 text-[18px] border-b-[1px] border-gray border-r-[1px] border-l-[1px] max-sm:grid-cols-2 ">
          <div className="col-span-2 p-2 text-left ml-2"> {props.title}</div>

          {props.status === 'CLOSED' && <div className="p-3 text-center"><p className="bg-red-100 text-red-700 font-bold text-[14px] w-max pl-3 pr-3 pt-1 pb-1 rounded-lg">closed</p></div>}

          {props.status === 'OPEN' && <div className="p-3 text-center"><p className="bg-green-100 text-green-700 font-bold text-[14px] w-max pl-3 pr-3 pt-1 pb-1 rounded-lg">open</p></div> }
          
          {props.status === 'IN_PROGRESS' &&<div className="p-3 text-left"><p className="bg-violet-100 text-violet-700 font-bold text-[14px] w-max pl-3 pr-3 pt-1 pb-1 rounded-lg">{props.status}</p></div>}

          <div className="p-2 text-left text-[16px] ml-2">{formattedDate}</div>

       </div>
    )
}

export default Issue;