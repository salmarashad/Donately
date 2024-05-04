function DonationCard(props) {
    return (
			<div className="w-full bg-white shadow-md rounded-md overflow-hidden p-6">
				<div className="flex gap-5">
					{/*Image*/}
					<div className="flex items-start justify-center w-40">
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggDQ7mmUtoTk1dCz8WaEAOMQOyah08T2JdAqwU0eJzg&s"
							alt="Donation"
							className="w-full object-cover rounded-md aspect-square"
						/>
					</div>

					{/*Text*/}
					<div className="w-2/3">
						<div className="flex items-center gap-2">
							<h2 className="text-xl font-semibold mb-2">Title</h2>
							<h2 className="text-l font-semibold text-farahgray mb-2">|</h2>
							<h2 className="text-l font-semibold text-farahgray mb-2">Org name</h2>
						</div>
						<p className="text-sm text-gray-800">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>

						<div className="flex justify-between items-center mt-4 h-auto">
							{/*Tags*/}
							<div className="flex items-center gap-2 [&>*:first-child]:font-bold">
								<span className="inline-block text-sm bg-farahgreen-200 text-farahgreen-300 px-3 py-1 rounded-xl">
									Tamer
								</span>
								<span className="inline-block text-sm bg-farahgreen-200 text-farahgreen-300 px-3 py-1 rounded-xl">
									Hosny
								</span>
							</div>

							{/*Button*/}
							<button class="text-sm italic border-2 border-farahgreen-300 text-farahgreen-300 px-4 py-1 rounded-xl font-semibold">
								View Details {">"}
							</button>
						</div>
					</div>
				</div>
			</div>
		);
}

export default DonationCard;