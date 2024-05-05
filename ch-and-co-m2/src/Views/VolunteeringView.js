import { useState } from "react";
import CardRenderer from "../Components/CardRenderer";
import Filter from "../Components/Filter";

function VolunteeringView() {
	const [currentCardSet, setCurrentCardSet] = useState([]);
	const [filteringOptions, setFilteringOptions] = useState([]);
	
	let currentData = 
	[
		{
		  "title": "Kids Clothing for Summer!",
		  "subtitle": "Sunshine Orphanage",
		  "description": "Sunshine Orphanage is seeking donations of summer clothing for children aged 5-10. With the hot summer approaching, we need lightweight and breathable clothing items such as t-shirts, shorts, and sandals to keep the children cool and comfortable. Your donations will help ensure these children enjoy a fun and safe summer season.",
		  "tags": ["Clothes", "Kids", "Summer"],
		  "imgURL": "https://example.com/kids_clothing_summer.jpg"
		},
		{
		  "title": "Teens Winter Clothing Drive!",
		  "subtitle": "Youth Empowerment Center",
		  "description": "The Youth Empowerment Center is organizing a winter clothing drive for teenagers aged 12-18. We need warm winter clothing items such as coats, scarves, and gloves to help keep vulnerable teens warm during the cold winter months. Your donations will make a meaningful difference in the lives of these young individuals.",
		  "tags": ["Clothes", "Teens", "Winter"],
		  "imgURL": "https://example.com/teens_clothing_winter.jpg"
		},
		{
		  "title": "Adults Spring Fashion Collection!",
		  "subtitle": "Community Fashion Hub",
		  "description": "The Community Fashion Hub is collecting spring clothing donations for adults of all genders. We are looking for stylish spring attire such as dresses, shirts, and lightweight jackets to update our community members' wardrobes for the new season. Your contributions will help individuals feel confident and fashionable.",
		  "tags": ["Clothes", "Adults", "Spring"],
		  "imgURL": "https://example.com/adults_clothing_spring.jpg"
		},
		{
		  "title": "Unisex Fall Apparel Drive!",
		  "subtitle": "Local Charity Network",
		  "description": "Local Charity Network is hosting a fall apparel drive for individuals of all ages and genders. We need versatile and cozy fall clothing items such as sweaters, hoodies, and jeans to prepare community members for the changing seasons. Your donations will provide warmth and comfort to those in need.",
		  "tags": ["Clothes", "Unisex", "Fall"],
		  "imgURL": "https://example.com/unisex_clothing_fall.jpg"
		},
		{
		  "title": "Kids Summer Swimwear Needed!",
		  "subtitle": "Beachside Community Center",
		  "description": "Beachside Community Center is collecting donations of summer swimwear for children aged 1-5. We need swimsuits, swim trunks, and beach hats to ensure children can safely enjoy the sunny summer days at the beach. Your contributions will bring joy and excitement to these little beachgoers.",
		  "tags": ["Clothes", "Kids", "Summer"],
		  "imgURL": "https://example.com/kids_swimwear_summer.jpg"
		},
		{
		  "title": "Teens Fall Fashion Extravaganza!",
		  "subtitle": "Youth Fashion Network",
		  "description": "The Youth Fashion Network is organizing a fall fashion extravaganza for teenagers aged 12-18. We are seeking donations of trendy fall clothing items such as jackets, boots, and scarves to showcase the latest autumn styles. Your contributions will help teens express themselves through fashion.",
		  "tags": ["Clothes", "Teens", "Fall"],
		  "imgURL": "https://example.com/teens_fashion_fall.jpg"
		},
		{
		  "title": "Adults Winter Coat Donation!",
		  "subtitle": "Warmth for All Foundation",
		  "description": "Warmth for All Foundation is collecting winter coats for adults in need. As the temperatures drop, many individuals struggle to stay warm outdoors. We need heavy-duty winter coats, thermal socks, and insulated gloves to provide essential warmth and protection. Your donations will help save lives during the cold winter months.",
		  "tags": ["Clothes", "Adults", "Winter"],
		  "imgURL": "https://example.com/adults_coat_winter.jpg"
		},
		{
		  "title": "Unisex Spring Jacket Collection!",
		  "subtitle": "Community Shelter Initiative",
		  "description": "Community Shelter Initiative is seeking donations of lightweight spring jackets for individuals of all genders. As spring approaches, we aim to provide transitional outerwear to those experiencing homelessness or financial hardship. Your contributions will offer comfort and dignity to vulnerable community members.",
		  "tags": ["Clothes", "Unisex", "Spring"],
		  "imgURL": "https://example.com/unisex_jacket_spring.jpg"
		}
		
	  ]
  return (
		<div className="grid grid-cols-4 max-w-7xl w-full mx-auto">
			<div className="col-span-1 justify-self-start">
				<div className="flex flex-col items-center justify-center gap-4">
					<h1>Filters</h1>
					{/* <Filter filteringOptions={filteringOptions} setFilteringOptions={setFilteringOptions} currentData={currentData} setCurrentCardSet={setCurrentCardSet} /> */}
				</div>
			</div>
			<div className="col-span-2">
				<div className="flex flex-col items-center justify-center gap-4">
					{/* <CardRenderer currentCardSet = {currentCardSet} /> */}
				</div>
			</div>
			<div className="col-span-1"></div>
		</div>
	);
}

export default VolunteeringView;