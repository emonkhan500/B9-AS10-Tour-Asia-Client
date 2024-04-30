// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const ShowMyList = ({spots}) => {
//     console.log(spots)
// const{_id, image, spot,country,location, description,cost, season, travel, visitor ,email,name}=spots

// const handleDelete = _id =>{
// console.log(_id)

// Swal.fire({
// 	title: "Are you sure?",
// 	text: "You won't be able to revert this!",
// 	icon: "warning",
// 	showCancelButton: true,
// 	confirmButtonColor: "#3085d6",
// 	cancelButtonColor: "#d33",
// 	confirmButtonText: "Yes, delete it!",


//   }).then((result) => {
// 	if (result.isConfirmed) {
// 	   fetch(`https://b9-assignment10-server-ten.vercel.app/spot/${_id}`,{
// 		  method:'DELETE'
// 	   })
// 		.then((res) => res.json())
// 		.then((data) => {
// 		  console.log(data);

// 		  if (data.deletedCount > 0) {
// 			  Swal.fire(
// 				'Deleted!',
// 				'Your spot has been deleted.',
// 				'success'
// 			  )
// 			  
// 		  }
// 		});
// 	}
//   });
// }

//     return (
//         <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	
// 	<div className="overflow-x-auto">
// 		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			
	
// 			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
// 				<tr>
					
// 					<td className="px-3 py-2">
// 						<p>{spots?.spot}</p>
// 					</td>
// 					<td className="px-3 ml-5 py-2">
						
// 						<p className="dark:text-gray-600">{spots?.country}</p>
// 					</td>
// 					<td className="px-3 py-2">
// 						<p>{spots?.location}</p>
// 					</td>
// 					<td className="px-3 py-2">
// 						<p>{spots.cost}</p>
// 					</td>
					
// 					<td className="px-3 py-2">
// 						<Link to={`/update/${_id}`}><button type="button" title="Open details" className=" btn rounded-xl">
// 							Update
// 						</button></Link>
//                         <button onClick={()=>handleDelete(_id)} className=" btn rounded-xl"> Delete</button>
// 					</td>
// 				</tr>
				
// 			</tbody>
			
// 		</table>
// 	</div>
// </div>
//     );
// };

// export default ShowMyList;