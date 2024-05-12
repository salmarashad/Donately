import OrganizationCard from "./OrganizationCard.js";

function OrganizationCardRenderer({userType, currentCardSet, setCurrentCardSet})  {
    return currentCardSet.map((card, index) => {
        return (
            <OrganizationCard
                currentCardSet={currentCardSet}
                setCurrentCardSet={setCurrentCardSet}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                tags={card.tags}
                imgURL={card.imgURL}
                key={index}
                email={card.email}
                number={card.number}
                userType={userType}
                address={card.address}
            />
        );
    });
};

export default OrganizationCardRenderer;