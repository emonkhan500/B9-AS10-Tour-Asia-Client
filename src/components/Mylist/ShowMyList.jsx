import React from 'react';

const ShowMyList = ({spots}) => {
    console.log(spots)
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
	
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			
			
			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
				<tr>
					
					<td className="px-3 py-2">
						<p>{spots?.spot}</p>
					</td>
					<td className="px-3 ml-5 py-2">
						
						<p className="dark:text-gray-600">{spots?.country}</p>
					</td>
					<td className="px-3 py-2">
						<p>{spots?.location}</p>
					</td>
					<td className="px-3 py-2">
						<p>{spots.cost}</p>
					</td>
					
					<td className="px-3 py-2">
						<button type="button" title="Open details" className=" btn rounded-xl">
							Update
						</button>
                        <button className=" btn rounded-xl"> Delete</button>
					</td>
				</tr>
				
			</tbody>
			
		</table>
	</div>
</div>
    );
};

export default ShowMyList;