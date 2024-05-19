import DonorCard from './DonorCard.js';

function DonorCardRenderer({currentCardSet, setCurrentCardSet }) {
	return currentCardSet.map((card, index) => {
		return (
			<DonorCard
				currentCardSet={currentCardSet}
				setCurrentCardSet={setCurrentCardSet}
				name={card.name}
				email={card.email}
				tags={card.tags}
				creationTime={card.creationTime}
				key={index}
			/>
		);
	});
}

export default DonorCardRenderer;