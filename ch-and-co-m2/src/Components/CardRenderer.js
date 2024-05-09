import DonationCard from "./DonationCard";

function CardRenderer({type, currentCardSet})  {
    return currentCardSet.map((card, index) => {
        return (
            <DonationCard
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                tags={card.tags}
                imgURL={card.imgURL}
                isFulfilled={card.tags.isFulfilled}
                key={index}
                type={type}
            />
        );
    });
};

export default CardRenderer;