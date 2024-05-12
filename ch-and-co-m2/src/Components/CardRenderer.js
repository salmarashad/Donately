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
                progress={card.progress}
                hospital_address={card.hospital_address}
                item_type={card.type}
                book_details={card.book_details}
                use={card.use}
                patient_name={card.patient_name}
                blood_type={card.blood_type}
                num_students={card.num_students}
                address={card.address}
                patient_details={card.patient_details}
            />
        );
    });
};

export default CardRenderer;