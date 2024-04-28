import team from '../../assets/about-banner-three.png'

const Extra2 = () => {
    return (
        <section className= " mt-20  dark:bg-gray-100 dark:text-gray-800">
	<div className="container border rounded-xl border-red-600 flex gap-3 flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Get The Best Travel Experience With <span className='text-red-600'><span className='text-6xl text-black'>T</span ><span className='text-3xl'>OUR</span></span> <span className='text-6xl text-black'>A</span><span className='text-3xl'>SIA</span>
			</h1>
			<p className="mt-6  text-lg sm:mb-12">Travel is a transformative and enriching experience that allows individuals to explore new destinations, cultures, and landscapes. It is a fundamental human activity that has been practiced for centuries and continues to be a source of joy, learning, and personal growth.

Travel is a transformative and enriching experience that allows individuals to explore new destinations, cultures
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Get Started</a>
			</div>
		</div>
		<div className="items-center justify-center p-6   h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={team} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
			<div className='flex justify-evenly mt-5 bg-slate-400 py-8 rounded-xl'>
				<div >
					<h1 className='text-4xl font-bold text-black'>150k</h1>
					<p className='font-semibold text-red-600'>Happy Traveler</p>
				</div>
				
				<div >
					<h1 className='text-4xl font-bold text-black'>95.7%</h1>
					<p className='font-semibold text-red-600'>Satisfaction Rate</p>
				</div>
				<div >
					<h1 className='text-4xl font-bold text-black'>5000+</h1>
					<p className='font-semibold text-red-600'>Tour Completed</p>
				</div>
				
			</div>
		</div>
	</div>
</section>
    );
};

export default Extra2;