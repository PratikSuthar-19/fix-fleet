export default function UserProfile({params} : any){
    return(
       <div className="flex justify-center align-middle bg-red-400">
             <h3>
               {params.id}
             </h3>

       </div>
    )
}