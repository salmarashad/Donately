import DonationCard from "./DonationCard";

function CardRenderer({type, currentCardSet, setCurrentCardSet})  {
    return currentCardSet.map((card, index) => {
        return (
            <DonationCard
                currentCardSet={currentCardSet}
                setCurrentCardSet={setCurrentCardSet}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                tags={card.tags}
                imgURL={card.imgURL}
                isFulfilled={card.tags.isFulfilled}
                key={index}
                type={type}
                material={card.material}
                required_amount={card.required_amount}
                hospital_address={card.hospital_address}
            />
        );
    });
};

export default CardRenderer;