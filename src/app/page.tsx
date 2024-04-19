'use client'
import Issue from "@/components/Issue"
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import React from "react";
import { useState , useEffect } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import Chart from 'chart.js/auto';
import {Bar} from "react-chartjs-2";
import { Chart as ChartJS,
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
       } from'chart.js';
// import { ChartOptions } from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

interface issuData{
  createdAt:string,
  description :string,
  status:string,
  title:string,
  _id:string
  }


export default function Home() {

  const router = useRouter();

  const [data, setData] = useState<issuData[]>([]);


 
 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/issues/get')
        const data = await response.data;
        console.log(response)
        setData(data);

  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  let closed = data.filter((item)=>(item.status==='CLOSED'));
  console.log("closed " ,closed.length)
  let open= data.filter((item)=>(item.status==='OPEN'));
  console.log("open " ,open.length)
  let inp= data.filter((item)=>(item.status==='IN_PROGRESS'));
  console.log("inp " ,inp.length)

  const currentItems = data.slice(0, 5);
  console.log(currentItems)
  return (
   <div className=" flex justify-between m-10 max-sm:flex-col max-sm:m-5">
          <div className=" flex flex-col gap-10 max-sm:gap-5">

            <div className=" flex  gap-10 max-sm:gap-5">
              <div className="flex flex-col p-5 border-[2px] border-gray-300 rounded-lg gap-1">
                <p className="text-[18px] font-[500] ">Open Issues</p>
                <p className="text-[32px] font-bold text-center">{open.length}</p>
              </div>
              <div className="flex flex-col p-5 border-[2px] border-gray-300 rounded-lg gap-1">
                <p className="text-[18px] font-[500]  ">Closed Issues</p>
                 <p className="text-[32px] font-bold  text-center">{closed.length}</p>
              </div>
              <div className="flex flex-col p-5 border-[2px] border-gray-300 rounded-lg gap-1">
                <p className="text-[18px] font-[500] ">In-Progress Issues</p>
                <p className="text-[32px] font-bold  text-center">{inp.length}</p>
              </div>
            </div>


            <div className=" mt-10 border-2 border-gray-200 rounded-lg p-10">
             <Bar data={{
                      labels : ["closed" , "open" , "in-progress"],
                      datasets:[{
                        label:"issue",
                        data:[open.length , closed.length , inp.length],
                        backgroundColor:'black',
                        borderColor:'black',
                        borderWidth:1,
                        barThickness:60
                      }]}}  
                       
                      options={{scales :{
                        x:{
                          display : false
                        },
                      }}}
                      />
                </div>
              </div>



          <div className="w-[40%] border-2 border-gray-200 rounded-lg max-sm:w-[100%] max-sm:mt-5">

            <h1 className="text-[22px] font-bold text-left p-5">Latest Issues</h1>

            <ul className="p-5 text-[18px] font-400">


            {currentItems.map((item, index) => (
            <Link
            href = {
              {pathname :`/issue/${item._id}`,
               query :{
                  data : JSON.stringify(item)
               }
              }
              
            }
            key={item._id}
            >



           <li className="flex flex-col m-2 p-2 border-b-2 border-gray-200">
                <p className="pl-3">{item.title}</p> 
                {item.status === 'CLOSED' && <div className="p-3 text-center"><p className="bg-red-100 text-red-700 font-bold text-[14px] w-max pl-3 pr-3 pt-1 pb-1 rounded-lg">closed</p></div>}

               {item.status === 'OPEN' && <div className="p-3 text-center"><p className="bg-green-100 text-green-700 font-bold text-[14px] w-max pl-3 pr-3 pt-1 pb-1 rounded-lg">open</p></div> }

               {item.status === 'IN_PROGRESS' &&<div className="p-3 text-left"><p className="bg-violet-100 text-violet-700 font-bold text-[14px] w-max pl-3 pr-3 pt-1 pb-1 rounded-lg">in-progress</p></div>}

              </li>


            </Link>
            ))}

              


            </ul>

          </div>
   </div>
  );
}
