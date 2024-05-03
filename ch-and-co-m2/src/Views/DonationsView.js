import DonationCard from "../Components/DonationCard";

function DonationsView() {
  return (
		<div className="grid grid-cols-3">
			<div className="col-span-1">
				<div className="flex flex-col items-center justify-center gap-4">
					<h1>Filters</h1>
				</div>
			</div>
			<div className="col-span-1">
				<div className="flex flex-col items-center justify-center gap-4">
					<DonationCard />
					<DonationCard />
					<DonationCard />
				</div>
			</div>
			<div className="col-span-1"></div>
		</div>
	);
}

export default DonationsView;