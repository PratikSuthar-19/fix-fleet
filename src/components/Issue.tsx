export default function Issue(){
    return(
       <div className="grid grid-cols-4 text-[18px] border-b-2 border-black border-r-2 border-l-2 ">
          <div className="col-span-2 p-2 text-left ml-2"> issue</div>
          {/* <div className="p-5 text-center"><p className="bg-red-200 text-red-700 font-bold text-[14px] w-max pl-3 pr-3 pt-2 pb-2 rounded-lg">open</p></div> */}
          {/* <div className="p-5 text-center"><p className="bg-green-200 text-green-700 font-bold text-[14px] w-max pl-3 pr-3 pt-2 pb-2 rounded-lg">closed</p></div> */}
          <div className="p-2 text-left"><p className="bg-violet-200 text-violet-700 font-bold text-[14px] w-max pl-3 pr-3 pt-2 pb-2 rounded-lg">in-progress</p></div>
          <div className="p-2 text-left"> sat 12 2003</div>

       </div>
    )
}