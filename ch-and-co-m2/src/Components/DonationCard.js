function DonationCard() {
    return (
			<div className="max-w-full min-w-full bg-white shadow-md rounded-md overflow-hidden">
				<div className="flex">
					{/*Image*/}
					<div className="flex items-center justify-center w-1/3">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggDQ7mmUtoTk1dCz8WaEAOMQOyah08T2JdAqwU0eJzg&s"
							alt="Donation"
							className="h-3/4 w-3/4 object-cover rounded-md"
						/>
					</div>

					{/*Text*/}
					<div className="w-2/3 p-4">
						<div className="flex items-center">
							<h2 className="text-xl font-semibold font-serif mb-2">Title</h2>
							<h2 className="text-l font-semibold text-gray-500 font-serif mb-2">
								| Subtitle
							</h2>
						</div>
						<p className="text-sm text-gray-800">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>

						<div className="flex justify-between items-center mt-4 h-auto">
							{/*Tags*/}
							<div className="flex items-center gap-2">
								<span className="inline-block text-sm bg-farahgreen-200 text-farahgreen-300 px-3 py-1 rounded-xl">
									Tamer
								</span>
								<span className="inline-block text-sm bg-farahgreen-200 text-farahgreen-300 px-3 py-1 rounded-xl">
									Hosny
								</span>
							</div>

							{/*Button*/}
							<button class="text-sm italic border  border-farahgreen-300 text-farahgreen-300 px-4 py-1 rounded-xl cursor-pointer">
								View Details {">"}
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}

export default DonationCard;