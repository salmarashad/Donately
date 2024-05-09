import { useState } from "react";
import CardRenderer from "../Components/CardRenderer";
import Filter from "../Components/Filter";

function PostsView(props) {
	const [currentCardSet, setCurrentCardSet] = useState([]);

	const type = props.page === "organizationPosts" ? "organization" : "donor";

	let currentData;

	if (props.page==="donations") {
	currentData = 
	[
		{
			"title": "Kids Clothing Drive for Needy Families",
			"subtitle": "Local Charity Foundation",
			"description": "Local Charity Foundation is organizing a clothing drive for needy families with children aged 5-10. Many families in our community struggle to afford basic necessities, including clothing for their children. We urgently need donations of gently used or new clothing items such as shirts, pants, and shoes to help alleviate the burden on these families. Your generosity will bring warmth and comfort to those in need.",
			"tags": {
			  "type": "Clothes",
			  "age": "Kids",
			  "gender": "Unisex",
			  "season": ""
			},
			"imgURL": "https://example.com/kids_clothing_drive.jpg"
		  },
		  {
			"title": "Winter Clothing Drive for Homeless Teens",
			"subtitle": "Street Outreach Program",
			"description": "The Street Outreach Program is hosting a winter clothing drive to support homeless teenagers in our city. As temperatures plummet, homeless teens are particularly vulnerable to the harsh winter conditions. We are seeking donations of warm winter clothing items such as coats, hats, and gloves to provide essential warmth and protection to these vulnerable youth. Your contributions will make a tangible difference in the lives of homeless teens struggling to survive on the streets.",
			"tags": {
			  "type": "Clothes",
			  "age": "Teens",
			  "gender": "Unisex",
			  "season": "Winter"
			},
			"imgURL": "https://example.com/teens_clothing_drive.jpg"
		  },
		  {
			"title": "Spring Clothing Giveaway for Low-Income Adults",
			"subtitle": "Community Support Network",
			"description": "Community Support Network is hosting a spring clothing giveaway for low-income adults in our community. Many adults facing financial hardship lack adequate clothing for the changing seasons. We are collecting donations of spring attire such as dresses, shirts, and jackets to provide to individuals and families in need. Your contributions will help restore dignity and self-confidence to those struggling to make ends meet.",
			"tags": {
			  "type": "Clothes",
			  "age": "Adults",
			  "gender": "Unisex",
			  "season": "Spring"
			},
			"imgURL": "https://example.com/adults_clothing_giveaway.jpg"
		  },
		  {
			"title": "Fall Clothing Drive for Displaced Families",
			"subtitle": "Refugee Assistance Program",
			"description": "The Refugee Assistance Program is launching a fall clothing drive to support displaced families in our community. Many refugee families arrive in our city with little more than the clothes on their backs, facing significant challenges in rebuilding their lives. We urgently need donations of fall clothing items such as sweaters, jeans, and boots to provide essential warmth and comfort to these families as they navigate the resettlement process. Your donations will offer hope and stability to those striving to build a new future in a foreign land.",
			"tags": {
			  "type": "Clothes",
			  "age": "Adults",
			  "gender": "Unisex",
			  "season": "Fall"
			},
			"imgURL": "https://example.com/fall_clothing_drive.jpg"
		  },
		  {
			"title": "Warm Coats for Winter: Adults",
			"subtitle": "Community Outreach Center",
			"description": "Community Outreach Center urgently needs donations of warm winter coats for adults in our community. As temperatures drop, many individuals are left vulnerable to the cold without adequate outerwear. Your contributions of coats, jackets, and scarves will provide essential warmth and protection to those in need, helping them stay safe and healthy throughout the winter season.",
			"tags": {
			  "type": "Clothes",
			  "age": "Adults",
			  "gender": "Unisex",
			  "season": "Winter"
			},
			"imgURL": "https://example.com/winter_coats_adults.jpg"
		  },
		  {
			"title": "Teen Hoodies and Sweatshirts",
			"subtitle": "Youth Support Services",
			"description": "Youth Support Services is seeking donations of hoodies and sweatshirts for teenagers in need. Many teens lack warm clothing options to stay comfortable during cooler weather. Your donations will provide essential warmth and comfort to teens facing financial hardship or homelessness, helping them navigate the challenges of adolescence with dignity and confidence.",
			"tags": {
			  "type": "Clothes",
			  "age": "Teens",
			  "gender": "Unisex",
			  "season": "Fall"
			},
			"imgURL": "https://example.com/teen_hoodies.jpg"
		  },
		  {
			"title": "Kids Summer Clothing Collection",
			"subtitle": "Children's Relief Fund",
			"description": "Children's Relief Fund is collecting summer clothing donations for kids of all ages. As temperatures rise, many families struggle to provide lightweight and breathable clothing for their children. Your donations of summer dresses, shorts, and sandals will help kids stay cool and comfortable during the hot summer months, allowing them to enjoy outdoor activities without discomfort or risk of overheating.",
			"tags": {
			  "type": "Clothes",
			  "age": "Kids",
			  "gender": "Unisex",
			  "season": "Summer"
			},
			"imgURL": "https://example.com/kids_summer_clothing.jpg"
		  },
		  {
			"title": "Fall Fashion for Women in Need",
			"subtitle": "Women's Empowerment Initiative",
			"description": "Women's Empowerment Initiative is hosting a fall fashion drive for women in need of stylish and practical clothing options. Many women facing financial hardship lack access to quality clothing that meets their needs. Your donations of fall fashion items such as sweaters, jeans, and boots will empower women to feel confident and self-assured as they navigate life's challenges.",
			"tags": {
			  "type": "Clothes",
			  "age": "Adults",
			  "gender": "Female",
			  "season": "Fall"
			},
			"imgURL": "https://example.com/fall_fashion_women.jpg"
		  },
		  {
			"title": "Children's Winter Wear Drive",
			"subtitle": "Winter Warmth Project",
			"description": "Winter Warmth Project is dedicated to keeping children warm during the coldest months of the year. We are seeking donations of winter clothing items such as coats, hats, and gloves for children of all ages. Your contributions will ensure that no child in our community goes without essential winter wear, allowing them to stay safe and healthy as they play and learn.",
			"tags": {
			  "type": "Clothes",
			  "age": "Kids",
			  "gender": "Unisex",
			  "season": "Winter"
			},
			"imgURL": "https://example.com/children_winter_wear.jpg"
		  },
		  {
			"title": "Teens Winter Apparel Drive",
			"subtitle": "Youth Outreach Program",
			"description": "The Youth Outreach Program is organizing a winter apparel drive specifically for teenagers. We are seeking donations of warm winter clothing items such as coats, sweaters, and boots to help teens stay warm and comfortable during the cold winter months. Your contributions will make a meaningful difference in the lives of teenagers facing homelessness or financial hardship, providing them with essential warmth and protection.",
			"tags": {
			  "type": "Clothes",
			  "age": "Teens",
			  "gender": "Unisex",
			  "season": "Winter"
			},
			"imgURL": "https://example.com/teens_winter_apparel.jpg"
		  },
		{
		"title": "Summer Clothing Collection for Kids",
		"subtitle": "Children's Aid Society",
		"description": "The Children's Aid Society is collecting summer clothing donations for kids in our community. With the arrival of summer, many children lack appropriate clothing for the warmer weather. We are seeking donations of summer outfits, including shorts, t-shirts, and sandals, to keep kids cool and comfortable during the hot summer months.",
		"tags": {
			"type": "Clothes",
			"age": "Kids",
			"gender": "",
			"season": "Summer"
		  },
		"imgURL": "https://example.com/kids_summer_collection.jpg"
		},
		{
		"title": "Unisex Fall Fashion Drive",
		"subtitle": "Community Fashion Exchange",
		"description": "The Community Fashion Exchange is hosting a fall fashion drive for individuals of all genders. We are seeking donations of fall clothing items such as jackets, jeans, and scarves to help community members transition into the cooler autumn weather with style and comfort. Your contributions will help individuals stay fashionable and warm.",
		"tags": {
			"type": "Clothes",
			"age": "",
			"gender": "Unisex",
			"season": "Fall"
		  },
		"imgURL": "https://example.com/unisex_fall_fashion.jpg"
		},
		{
		"title": "Adults Spring Clothing Giveaway",
		"subtitle": "Community Support Network",
		"description": "Community Support Network is hosting a spring clothing giveaway for adults in need of seasonal attire. As spring approaches, many adults lack the clothing they need for the changing weather. We are seeking donations of spring outfits, including dresses, shirts, and lightweight jackets, to help adults feel comfortable and confident as they embrace the new season.",
		"tags": {
			"type": "Clothes",
			"age": "Adults",
			"gender": "",
			"season": "Spring"
		  },
		"imgURL": "https://example.com/adults_spring_giveaway.jpg"
		},
		{
		"title": "Winter Coats for Everyone",
		"subtitle": "Local Charity Coalition",
		"description": "Local Charity Coalition is launching a winter coat drive to provide warmth to individuals of all ages and genders. With the onset of winter, many people in our community struggle to stay warm without adequate outerwear. We are seeking donations of winter coats, hats, and gloves to ensure that everyone can face the cold weather with dignity and comfort.",
		"tags": {
			"type": "Clothes",
			"age": "",
			"gender": "",
			"season": "Winter"
		  },
		"imgURL": "https://example.com/winter_coat_drive.jpg"
		},
		{
			"title": "Outdoor Toys for Kids (1-5)",
			"subtitle": "Sunshine Playground Initiative",
			"description": "The Sunshine Playground Initiative is seeking donations of outdoor toys for children aged 1-5. Outdoor play is essential for children's physical and cognitive development. We need donations of toys such as sandboxes, tricycles, and water tables to create a fun and stimulating outdoor play area for young children in our community.",
			"tags": {
				"type": "Toys",
				"age": "1-5",
				"gender": "Unisex",
				"category": "Outdoor"
			  },
			"imgURL": "https://example.com/outdoor_toys.jpg"
		  },
		  {
			"title": "Board Games for Teens (12-18)",
			"subtitle": "Teen Recreation Center",
			"description": "The Teen Recreation Center is organizing a board game drive for teenagers aged 12-18. Board games provide an opportunity for teens to socialize, develop strategic thinking skills, and have fun. We are seeking donations of popular board games such as Monopoly, Scrabble, and Settlers of Catan to provide entertainment and enrichment for teens in our community.",
			"tags": {
				"type": "Toys",
				"age": "12-18",
				"gender": "Unisex",
				"category": "Board Games"
			  },
			"imgURL": "https://example.com/board_games_teens.jpg"
		  },
		  {
			"title": "Stuffed Toys for Toddlers (1-5)",
			"subtitle": "Tiny Tots Nursery",
			"description": "Tiny Tots Nursery is in need of stuffed toy donations for toddlers aged 1-5. Stuffed toys provide comfort, companionship, and opportunities for imaginative play for young children. We are seeking donations of soft, cuddly stuffed animals such as teddy bears, rabbits, and puppies to bring joy and comfort to the little ones in our care.",
			"tags": {
				"type": "Toys",
				"age": "1-5",
				"gender": "Unisex",
				"category": "Stuffed Toys"
			  },
			"imgURL": "https://example.com/stuffed_toys_toddlers.jpg"
		  },
		  {
			"title": "Dolls for Children (5-11)",
			"subtitle": "Doll Haven Foundation",
			"description": "The Doll Haven Foundation is collecting donations of dolls for children aged 5-11. Dolls play an important role in nurturing children's empathy, creativity, and social skills. We are seeking donations of diverse dolls representing various cultures, genders, and abilities to promote inclusivity and acceptance among children.",
			"tags": {
				"type": "Toys",
				"age": "5-11",
				"gender": "Unisex",
				"category": "Dolls"
			  },
			"imgURL": "https://example.com/dolls_children.jpg"
		  },
		  {
			"title": "Sports Cars for Teens (12-18)",
			"subtitle": "Speedy Teens Club",
			"description": "Speedy Teens Club is hosting a donation drive for sports cars for teenagers aged 12-18. Remote-controlled sports cars provide teens with hours of entertainment and opportunities to develop hand-eye coordination and motor skills. We are seeking donations of high-quality remote-controlled sports cars to spark excitement and enthusiasm among teens in our community.",
			"tags": {
				"type": "Toys",
				"age": "12-18",
				"gender": "Unisex",
				"category": "Sports Cars"
			  },
			"imgURL": "https://example.com/sports_cars_teens.jpg"
		  },
		  {
			"title": "Educational Board Games for Kids (5-11)",
			"subtitle": "Learning is Fun Foundation",
			"description": "The Learning is Fun Foundation is collecting donations of educational board games for children aged 5-11. Board games that combine fun and learning are a valuable resource for children's cognitive development. We are seeking donations of educational board games such as Math Bingo, Scrabble Junior, and Sight Word Swat to make learning enjoyable and engaging for kids in our community.",
			"tags": {
				"type": "Toys",
				"age": "5-11",
				"gender": "Unisex",
				"category": "Board Games"
			  },
			"imgURL": "https://example.com/educational_board_games.jpg"
		  },
		  {
			"title": "Remote-Controlled Drones for Teens (12-18)",
			"subtitle": "Drone Enthusiasts Club",
			"description": "The Drone Enthusiasts Club is seeking donations of remote-controlled drones for teenagers aged 12-18. Drones offer teens the opportunity to explore technology, develop aerial photography skills, and engage in thrilling outdoor activities. We are seeking donations of beginner-friendly drones to inspire creativity and innovation among teens in our community.",
			"tags": {
				"type": "Toys",
				"age": "12-18",
				"gender": "Unisex",
				"category": "Outdoor"
			  },
			"imgURL": "https://example.com/remote_controlled_drones_teens.jpg"
		  },
		  {
			"title": "Classic Stuffed Toys for Kids (1-5)",
			"subtitle": "Nostalgic Toy Collection",
			"description": "The Nostalgic Toy Collection is collecting donations of classic stuffed toys for children aged 1-5. Classic stuffed toys evoke feelings of nostalgia and provide timeless comfort and joy to young children. We are seeking donations of beloved classics such as teddy bears, Raggedy Ann dolls, and plush animals to create cherished memories for kids in our community.",
			"tags": {
				"type": "Toys",
				"age": "1-5",
				"gender": "Unisex",
				"category": "Stuffed Toys"
			  },
			"imgURL": "https://example.com/classic_stuffed_toys.jpg"
		  },
		  {
			"title": "Action Figures for Collectors (18+)",
			"subtitle": "Collector's Haven",
			"description": "Collector's Haven is seeking donations of action figures for adult collectors aged 18 and above. Action figures are not just toys; they are prized collectibles that evoke nostalgia and passion in collectors. We are seeking donations of high-quality action figures from popular franchises such as Marvel, DC Comics, and Star Wars to add to our collector's treasure trove.",
			"tags": {
				"type": "Toys",
				"age": "18",
				"gender": "Unisex",
				"category": ""
			  },
			"imgURL": "https://example.com/action_figures_collectors.jpg"
		  },
		  {
			"title": "Art Supplies for Creative Kids (5-11)",
			"subtitle": "Artistic Expressions Program",
			"description": "The Artistic Expressions Program is collecting donations of art supplies for creative kids aged 5-11. Art offers children a means of self-expression, creativity, and emotional release. We are seeking donations of art supplies such as crayons, markers, and sketchbooks to nurture children's artistic talents and inspire their imagination.",
			"tags": {
				"type": "Toys",
				"age": "5-11",
				"gender": "Unisex",
				"category": ""
			  },
			"imgURL": "https://example.com/art_supplies_kids.jpg"
		  },
		  {
			"title": "Puzzle Games for Brainy Teens (12-18)",
			"subtitle": "Puzzle Masters Society",
			"description": "The Puzzle Masters Society is hosting a donation drive for puzzle games for brainy teens aged 12-18. Puzzle games challenge teens to think critically, solve problems, and sharpen their cognitive skills. We are seeking donations of challenging puzzle games such as Rubik's Cube, Sudoku, and jigsaw puzzles to stimulate teens' minds and encourage intellectual growth.",
			"tags": {
				"type": "Toys",
				"age": "12-18",
				"gender": "Unisex",
				"category": "Board Games"
			  },
			"imgURL": "https://example.com/puzzle_games_teens.jpg"
		  },
		  {
			"title": "Musical Instruments for Budding Musicians (5-11)",
			"subtitle": "Music for All Foundation",
			"description": "The Music for All Foundation is collecting donations of musical instruments for budding musicians aged 5-11. Music offers children a creative outlet for self-expression and fosters a lifelong appreciation for the arts. We are seeking donations of musical instruments such as keyboards, guitars, and ukuleles to provide children with the opportunity to explore their musical talents.",
			"tags": {
				"type": "Toys",
				"age": "5-11",
				"gender": "Unisex",
				"category": ""
			  },
			"imgURL": "https://example.com/musical_instruments_kids.jpg"
		  },
		  {
			"title": "Building Blocks for Young Engineers (1-5)",
			"subtitle": "Future Architects Club",
			"description": "The Future Architects Club is seeking donations of building blocks for young engineers aged 1-5. Building blocks are not just toys; they are tools for learning and development. We are seeking donations of building blocks such as LEGO Duplo, Mega Bloks, and wooden blocks to inspire creativity, problem-solving, and spatial awareness in young children.",
			"tags": {
				"type": "Toys",
				"age": "1-5",
				"gender": "Unisex",
				"category": ""
			  },
			"imgURL": "https://example.com/building_blocks_young_engineers.jpg"
		  },
		  {
			"title": "Educational STEM Toys for Teens (12-18)",
			"subtitle": "STEM Education Initiative",
			"description": "The STEM Education Initiative is collecting donations of educational STEM toys for teenagers aged 12-18. STEM toys offer teens hands-on learning experiences in science, technology, engineering, and mathematics. We are seeking donations of STEM toys such as robotics kits, coding games, and physics experiments to inspire the next generation of innovators and problem-solvers.",
			"tags": {
				"type": "Toys",
				"age": "12-18",
				"gender": "Unisex",
				"category": ""
			  },
			"imgURL": "https://example.com/educational_stem_toys_teens.jpg"
		  },
		  {
			"title": "Soft Baby Toys for Infants (0-1)",
			"subtitle": "New Beginnings Nursery",
			"description": "New Beginnings Nursery is in need of donations of soft baby toys for infants aged 0-1. Soft toys provide sensory stimulation, comfort, and security to newborns and young babies. We are seeking donations of soft baby toys such as rattles, plush animals, and fabric books to soothe and entertain the little ones in our care.",
			"tags": {
				"type": "Toys",
				"age": "0-1",
				"gender": "Unisex",
				"category": "Stuffed Toys"
			  },
			"imgURL": "https://example.com/soft_baby_toys.jpg"
		  },
		  {
			"title": "Fresh Fruits and Vegetables for Families in Need",
			"subtitle": "Community Food Bank",
			"description": "Community Food Bank is collecting donations of fresh fruits and vegetables to distribute to families in need. Access to nutritious produce is essential for maintaining good health and well-being. We are seeking donations of a variety of fresh fruits and vegetables such as apples, bananas, carrots, and spinach to provide families with wholesome and nourishing food options.",
			"tags": {
				"type": "Food",
				"category": "Fruits and vegetables"
			  },
			"imgURL": "https://example.com/fresh_fruits_vegetables.jpg"
		  },
		  {
			"title": "Canned Foods Drive for Homeless Shelters",
			"subtitle": "Shelter Support Network",
			"description": "Shelter Support Network is hosting a canned foods drive to support homeless shelters in our community. Canned foods offer convenience and long shelf life, making them ideal for emergency food assistance programs. We are seeking donations of canned goods such as beans, soups, and canned fruits to provide nourishing meals to individuals experiencing homelessness.",
			"tags": {
				"type": "Food",
				"category": "Canned foods"
			  },
			"imgURL": "https://example.com/canned_foods_drive.jpg"
		  },
		  {
			"title": "Fresh Meals Delivery for Elderly Residents",
			"subtitle": "Senior Care Initiative",
			"description": "The Senior Care Initiative is coordinating fresh meals delivery for elderly residents in our community. Many seniors face challenges with meal preparation and access to nutritious food. We are seeking donations of freshly prepared meals such as soups, salads, and main dishes to ensure that seniors receive wholesome and delicious meals delivered to their doorstep.",
			"tags": {
				"type": "Food",
				"category": "Fresh meals"
			  },
			"imgURL": "https://example.com/fresh_meals_delivery.jpg"
		  },
		  {
			"title": "Baked Goods Charity Bake Sale",
			"subtitle": "Bakers for Charity",
			"description": "Bakers for Charity is organizing a charity bake sale to raise funds for those in need. Baked goods offer comfort and joy, making them a popular choice for fundraising events. We are seeking donations of baked goods such as cookies, cakes, and pastries to sell at the bake sale and raise money for charitable causes in our community.",
			"tags": {
				"type": "Food",
				"category": "Baked goods"
			  },
			"imgURL": "https://example.com/baked_goods_bake_sale.jpg"
		  },
		  {
			"title": "Farmers Market Donations for Low-Income Families",
			"subtitle": "Fresh Start Initiative",
			"description": "The Fresh Start Initiative is collecting donations from farmers markets to support low-income families in our community. Farmers markets offer fresh, locally sourced produce that is often inaccessible to families facing financial hardship. We are seeking donations of surplus fruits, vegetables, and artisanal products from farmers markets to provide nutritious food options to those in need.",
			"tags": {
				"type": "Food",
				"category": "Fruits and vegetables"
			  },
			"imgURL": "https://example.com/farmers_market_donations.jpg"
		  },
		  {
			"title": "Canned Food Drive for Emergency Relief",
			"subtitle": "Disaster Response Team",
			"description": "The Disaster Response Team is organizing a canned food drive to provide emergency relief to communities affected by natural disasters. Canned foods are non-perishable and easy to transport, making them essential for disaster response efforts. We are seeking donations of canned goods such as canned meats, vegetables, and ready-to-eat meals to support disaster-affected communities in their time of need.",
			"tags": {
				"type": "Food",
				"category": "Canned foods"
			  },
			"imgURL": "https://example.com/canned_food_drive_disaster_relief.jpg"
		  },
		  {
			"title": "Fresh Meals for Families in Crisis",
			"subtitle": "Crisis Relief Organization",
			"description": "Crisis Relief Organization is providing fresh meals to families facing crisis situations such as homelessness, domestic violence, or medical emergencies. Freshly prepared meals offer comfort and sustenance during difficult times. We are seeking donations of nutritious meals such as salads, sandwiches, and pasta dishes to support families in crisis and help them regain stability.",
			"tags": {
				"type": "Food",
				"category": "Fresh meals"
			  },
			"imgURL": "https://example.com/fresh_meals_families_crisis.jpg"
		  },
		  {
			"title": "Community Garden Produce Sharing Program",
			"subtitle": "Green Thumb Community",
			"description": "Green Thumb Community is launching a produce sharing program to distribute surplus garden produce to members of the community in need. Community gardens provide a bountiful harvest of fresh fruits and vegetables that can be shared with those facing food insecurity. We are seeking donations of homegrown fruits, vegetables, and herbs to promote food sustainability and community resilience.",
			"tags": {
				"type": "Food",
				"category": "Fruits and vegetables"
			  },
			"imgURL": "https://example.com/community_garden_produce_sharing.jpg"
		  },
		  {
			"title": "Baked Goods Donation Drive for Local Food Pantries",
			"subtitle": "Bake for Good Campaign",
			"description": "The Bake for Good Campaign is hosting a baked goods donation drive to support local food pantries. Baked goods provide nourishment and comfort to individuals and families facing food insecurity. We are seeking donations of homemade or store-bought baked goods such as bread, muffins, and pies to stock food pantry shelves and provide sustenance to those in need.",
			"tags": {
				"type": "Food",
				"category": "Baked goods"
			  },
			"imgURL": "https://example.com/baked_goods_donation_drive.jpg"
		  },
		  {
			"title": "Fruits and Vegetables Distribution Event",
			"subtitle": "Healthy Harvest Initiative",
			"description": "The Healthy Harvest Initiative is hosting a fruits and vegetables distribution event to promote healthy eating habits in our community. Fruits and vegetables are rich in vitamins, minerals, and antioxidants that are essential for good health. We are seeking donations of a variety of fresh produce such as apples, oranges, tomatoes, and broccoli to distribute to community members in need.",
			"tags": {
				"type": "Food",
				"category": "Fruits and vegetables"
			  },
			"imgURL": "https://example.com/fruits_vegetables_distribution.jpg"
		  },
		  {
			"title": "Canned Food Collection Drive for Students in Need",
			"subtitle": "Campus Food Bank",
			"description": "Campus Food Bank is organizing a canned food collection drive to support students facing food insecurity. Many students struggle to afford nutritious meals while pursuing their education. We are seeking donations of canned goods such as beans, vegetables, and pasta sauce to stock our campus food bank and provide essential food assistance to students in need.",
			"tags": {
				"type": "Food",
				"category": "Canned foods"
			  },
			"imgURL": "https://example.com/canned_food_collection_drive_students.jpg"
		  },
		  {
			"title": "Homemade Meals for Homebound Seniors",
			"subtitle": "Senior Meal Delivery Program",
			"description": "The Senior Meal Delivery Program is seeking donations of homemade meals for homebound seniors in our community. Many seniors face challenges with meal preparation and cooking due to mobility issues or health concerns. We are seeking donations of homemade meals such as casseroles, soups, and stews to provide nourishment and companionship to homebound seniors.",
			"tags": {
				"type": "Food",
				"category": "Fresh meals"
			  },
			"imgURL": "https://example.com/homemade_meals_homebound_seniors.jpg"
		  },
		  {
			"title": "Baked Goods Fundraiser for Hunger Relief",
			"subtitle": "Bake Sale for a Cause",
			"description": "Bake Sale for a Cause is organizing a baked goods fundraiser to support hunger relief efforts in our community. Baked goods bring joy and comfort to individuals while raising funds for charitable causes. We are seeking donations of baked goods such as cookies, cupcakes, and brownies to sell at the bake sale and raise money for organizations combating hunger.",
			"tags": {
				"type": "Food",
				"category": "Baked goods"
			  },
			"imgURL": "https://example.com/baked_goods_fundraiser_hunger_relief.jpg"
		  },
		  {
			"title": "Fresh Produce Donation Drive for Low-Income Families",
			"subtitle": "Produce for All Initiative",
			"description": "The Produce for All Initiative is hosting a fresh produce donation drive to support low-income families in our community. Access to fresh fruits and vegetables is essential for maintaining good health and preventing chronic diseases. We are seeking donations of fresh produce such as berries, leafy greens, and root vegetables to provide nutritious food options to families in need.",
			"tags": {
				"type": "Food",
				"category": "Fruits and vegetables"
			  },
			"imgURL": "https://example.com/fresh_produce_donation_drive.jpg"
		  },
		  {
			"title": "Emergency Meal Kits for Disaster Relief",
			"subtitle": "Disaster Response Organization",
			"description": "The Disaster Response Organization is assembling emergency meal kits for disaster relief efforts. During emergencies such as natural disasters or humanitarian crises, access to food becomes limited. We are seeking donations of non-perishable food items such as canned goods, rice, and pasta to create emergency meal kits that can sustain individuals and families during times of crisis.",
			"tags": {
				"type": "Food",
				"category": "Canned foods"
			  },
			"imgURL": "https://example.com/emergency_meal_kits_disaster_relief.jpg"
		  },
		  {
			"title": "Blood Oxygen Saturation Monitors for Home Use",
			"subtitle": "Healthcare Outreach Program",
			"description": "The Healthcare Outreach Program is seeking donations of blood oxygen saturation monitors for home use. Monitoring blood oxygen levels is crucial for individuals with respiratory conditions such as asthma or COPD. We are seeking donations of portable pulse oximeters to help individuals track their blood oxygen saturation levels and manage their respiratory health at home.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "blood oxygen saturation monitor",
				"medicalequipment": "",
				"medication": ""
			},
			"imgURL": "https://example.com/blood_oxygen_monitors.jpg"
		  },
		  {
			"title": "Blood Pressure Monitors for Community Health Clinics",
			"subtitle": "Community Wellness Initiative",
			"description": "The Community Wellness Initiative is collecting donations of blood pressure monitors for community health clinics. Monitoring blood pressure is essential for preventing heart disease, stroke, and other cardiovascular conditions. We are seeking donations of automatic blood pressure monitors to provide accurate and reliable blood pressure readings for individuals accessing healthcare services in our community.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "blood pressure measurment device",
				"medicalequipment": "",
				"medication": ""
			},
			"imgURL": "https://example.com/blood_pressure_monitors.jpg"
		  },
		  {
			"title": "Glucometers for Diabetes Management Program",
			"subtitle": "Diabetes Support Network",
			"description": "The Diabetes Support Network is seeking donations of glucometers for our diabetes management program. Monitoring blood glucose levels is essential for individuals with diabetes to prevent complications and maintain optimal health. We are seeking donations of glucometers and test strips to provide individuals with the tools they need to monitor their blood sugar levels regularly.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "glucometer",
				"medicalequipment": "",
				"medication": ""
			},
			"imgURL": "https://example.com/glucometers_diabetes_management.jpg"
		  },
		  {
			"title": "MRI Machine Donation for Local Hospital",
			"subtitle": "Hospital Equipment Upgrade Project",
			"description": "The Hospital Equipment Upgrade Project is seeking donations of an MRI machine for a local hospital. MRI machines play a crucial role in diagnosing and treating various medical conditions, including cancer, neurological disorders, and musculoskeletal injuries. We are seeking donations to fund the purchase of an MRI machine to improve diagnostic capabilities and patient care at our hospital.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "",
				"medicalequipment": "MRI machine",
				"medication": ""
			},
			"imgURL": "https://example.com/mri_machine_donation.jpg"
		  },
		  {
			"title": "CT Scanner Donation for Rural Health Center",
			"subtitle": "Rural Healthcare Initiative",
			"description": "The Rural Healthcare Initiative is seeking donations of a CT scanner for a rural health center. CT scanners are essential diagnostic tools for detecting and monitoring a wide range of medical conditions, from injuries to tumors. We are seeking donations to acquire a CT scanner to improve access to advanced medical imaging services for residents in rural communities.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "",
				"medicalequipment": "CT scanner",
				"medication": ""
			},
			"imgURL": "https://example.com/ct_scanner_donation.jpg"
		  },
		  {
			"title": "EKG Machines for Cardiac Care Unit",
			"subtitle": "Cardiovascular Health Foundation",
			"description": "The Cardiovascular Health Foundation is seeking donations of EKG machines for a cardiac care unit. Electrocardiogram (EKG) machines are essential for diagnosing and monitoring heart conditions such as arrhythmias and heart attacks. We are seeking donations to equip the cardiac care unit with state-of-the-art EKG machines to improve patient outcomes and save lives.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "",
				"medicalequipment": "EKG machine",
				"medication": ""
			},
			"imgURL": "https://example.com/ekg_machines_cardiac_care.jpg"
		  },
		  {
			"title": "Cough Medicine Donation Drive for Flu Season",
			"subtitle": "Flu Prevention Campaign",
			"description": "The Flu Prevention Campaign is hosting a cough medicine donation drive to prepare for flu season. Cough medicine provides relief from coughing and congestion associated with the flu and other respiratory illnesses. We are seeking donations of over-the-counter cough medicines such as cough syrup, lozenges, and cough suppressants to support individuals affected by seasonal respiratory infections.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "",
				"medicalequipment": "",
				"medication": "cough medicine"
			},
			"imgURL": "https://example.com/cough_medicine_donation_drive.jpg"
		  },
		  {
			"title": "Pain Killers Supply for Palliative Care Program",
			"subtitle": "Palliative Care Hospice",
			"description": "The Palliative Care Hospice is seeking donations of pain killers for our palliative care program. Pain management is a critical aspect of palliative care for patients with terminal illnesses or chronic pain conditions. We are seeking donations of pain killers such as opioids, NSAIDs, and acetaminophen to alleviate pain and improve the quality of life for patients in our care.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "",
				"medicalequipment": "",
				"medication": "pain killers"
			},
			"imgURL": "https://example.com/pain_killers_supply.jpg"
		  },
		  {
			"title": "First Aid Kits Distribution for Disaster Preparedness",
			"subtitle": "Emergency Preparedness Campaign",
			"description": "The Emergency Preparedness Campaign is distributing first aid kits for disaster preparedness. First aid kits contain essential medical supplies for treating minor injuries and illnesses during emergencies. We are seeking donations of first aid kits containing bandages, antiseptics, and other medical supplies to equip individuals and families for emergency situations.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "",
				"medicalequipment": "",
				"medication": "First aid kits"
			},
			"imgURL": "https://example.com/first_aid_kits_distribution.jpg"
		  },
		  {
			"title": "Antibiotics Supply for Remote Clinics",
			"subtitle": "Remote Healthcare Initiative",
			"description": "The Remote Healthcare Initiative is seeking donations of antibiotics for remote clinics serving underserved communities. Antibiotics are essential for treating bacterial infections and preventing the spread of infectious diseases in remote areas with limited access to healthcare. We are seeking donations of antibiotics such as penicillin, amoxicillin, and azithromycin to save lives and improve health outcomes in remote regions.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "",
				"medicalequipment": "",
				"medication": "Antibiotics"
			},
			"imgURL": "https://example.com/antibiotics_supply.jpg"
		  },
		  {
			"title": "Insulin Donation Drive for Diabetes Patients",
			"subtitle": "Diabetes Care Foundation",
			"description": "The Diabetes Care Foundation is hosting an insulin donation drive to support diabetes patients in need. Insulin is a life-saving medication for individuals with diabetes, but many struggle to afford the high cost of insulin therapy. We are seeking donations of insulin vials, pens, and syringes to ensure that all diabetes patients have access to the insulin they need to manage their condition and stay healthy.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "",
				"medicalequipment": "",
				"medication": "Insulin"
			},
			"imgURL": "https://example.com/insulin_donation_drive.jpg"
		  },
		  {
			"title": "Medical Gloves Supply for Healthcare Workers",
			"subtitle": "Healthcare Heroes Support",
			"description": "Healthcare Heroes Support is seeking donations of medical gloves for healthcare workers on the frontlines. Medical gloves are essential for protecting healthcare workers from infectious diseases and preventing the spread of pathogens in healthcare settings. We are seeking donations of disposable gloves such as latex, nitrile, or vinyl gloves to ensure the safety and well-being of healthcare professionals.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "Medical Gloves",
				"medicalequipment": "",
				"medication": ""
			},
			"imgURL": "https://example.com/medical_gloves_supply.jpg"
		  },
		  {
			"title": "Pediatric Medication Drive for Children's Hospital",
			"subtitle": "Children's Health Initiative",
			"description": "The Children's Health Initiative is hosting a pediatric medication drive for a children's hospital. Pediatric medications are specially formulated to meet the unique healthcare needs of infants, children, and adolescents. We are seeking donations of pediatric medications such as liquid antibiotics, pain relievers, and allergy medications to provide compassionate care for pediatric patients.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "",
				"medicalequipment": "",
				"medication": "Pediatric Medication"
			},
			"imgURL": "https://example.com/pediatric_medication_drive.jpg"
		  },
		  {
			"title": "Medical Masks Donation for Community Health Centers",
			"subtitle": "Community Health Outreach",
			"description": "Community Health Outreach is seeking donations of medical masks for community health centers. Medical masks are essential personal protective equipment for preventing the transmission of respiratory infections, including COVID-19. We are seeking donations of surgical masks, N95 respirators, or cloth masks to protect healthcare workers and patients in community healthcare settings.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "Medical Mask",
				"medicalequipment": "",
				"medication": ""
			},
			"imgURL": "https://example.com/medical_masks_donation.jpg"
		  },
		  {
			"title": "Wound Care Supplies Drive for Homeless Shelters",
			"subtitle": "Homeless Healthcare Initiative",
			"description": "The Homeless Healthcare Initiative is hosting a wound care supplies drive for homeless shelters. Wound care supplies such as bandages, gauze, and antiseptic solutions are essential for preventing infections and promoting healing among individuals experiencing homelessness. We are seeking donations of wound care kits to provide essential healthcare services to homeless individuals in our community.",
			"tags": { 
				"type": "Medical Supplies",
				"medicaldevice": "",
				"medicalequipment": "",
				"medication": "Wound Care Supplies"
			},
			"imgURL": "https://example.com/wound_care_supplies_drive.jpg"
		  },
		  {
			"title": "Storybooks for Elementary School Libraries",
			"subtitle": "Reading for All Initiative",
			"description": "The Reading for All Initiative is seeking donations of storybooks for elementary school libraries. Storybooks foster a love of reading and imagination in young children, laying the foundation for academic success. We are seeking donations of diverse storybooks, including picture books, chapter books, and fairy tales, to enrich the reading experiences of students in elementary schools.",
			"tags": {
				"type": "School Supplies",
				"category": "Books"
			  },
			"imgURL": "https://example.com/storybooks_elementary_libraries.jpg"
		  },
		  {
			"title": "Textbooks for High School Students",
			"subtitle": "Education Empowerment Program",
			"description": "The Education Empowerment Program is collecting donations of textbooks for high school students. Textbooks are essential resources for students to gain knowledge and achieve academic excellence in various subjects. We are seeking donations of high school textbooks covering subjects such as mathematics, science, history, and literature to support students in their studies.",
			"tags": {
				"type": "School Supplies",
				"category": "Books"
			  },
			"imgURL": "https://example.com/textbooks_high_school_students.jpg"
		  },
		  {
			"title": "Educational Workbooks for Homeschooling Families",
			"subtitle": "Homeschool Support Network",
			"description": "The Homeschool Support Network is seeking donations of educational workbooks for homeschooling families. Workbooks provide structured learning activities and practice exercises for students to reinforce concepts and skills. We are seeking donations of educational workbooks covering various subjects and grade levels to support homeschooling families in their educational journey.",
			"tags": {
				"type": "School Supplies",
				"category": "Books"
			  },
			"imgURL": "https://example.com/educational_workbooks_homeschooling.jpg"
		  },
		  {
			"title": "Stationery Kits for Middle School Students",
			"subtitle": "Student Success Initiative",
			"description": "The Student Success Initiative is providing stationery kits for middle school students to support their academic endeavors. Stationery kits include essential supplies such as pens, pencils, notebooks, and erasers for students to use in their classes and homework assignments. We are seeking donations of stationery kits to ensure that all students have access to the tools they need for learning.",
			"tags": {
				"type": "School Supplies",
				"category": "Stationery"
			  },
			"imgURL": "https://example.com/stationery_kits_middle_school.jpg"
		  },
		  {
			"title": "Art Supplies for Creative Expression",
			"subtitle": "Art Education Program",
			"description": "The Art Education Program is seeking donations of art supplies to inspire creative expression in students. Art supplies such as paints, brushes, and sketchbooks enable students to explore their artistic talents and develop essential skills in visual arts. We are seeking donations of art supplies to provide enriching art experiences for students in schools and community centers.",
			"tags": {
				"type": "School Supplies",
				"category": "Stationery"
			  },
			"imgURL": "https://example.com/art_supplies_creative_expression.jpg"
		  },
		  {
			"title": "STEM Kits for Hands-On Learning",
			"subtitle": "STEM Education Initiative",
			"description": "The STEM Education Initiative is collecting donations of STEM kits for hands-on learning experiences. STEM kits contain materials and equipment for conducting experiments and building projects in science, technology, engineering, and mathematics. We are seeking donations of STEM kits to engage students in interactive and inquiry-based learning activities that foster curiosity and critical thinking skills.",
			"tags": {
				"type": "School Supplies",
				"category": "Stationery"
			  },
			"imgURL": "https://example.com/stem_kits_hands_on_learning.jpg"
		  },
		  {
			"title": "Educational Board Games for Classroom Use",
			"subtitle": "Learning Through Play Program",
			"description": "The Learning Through Play Program is seeking donations of educational board games for classroom use. Board games offer opportunities for cooperative learning, problem-solving, and social skill development in a fun and interactive way. We are seeking donations of educational board games covering various subjects and concepts to enhance learning experiences for students in classrooms.",
			"tags": {
				"type": "School Supplies",
				"category": "Stationery"
			  },
			"imgURL": "https://example.com/educational_board_games_classroom.jpg"
		  },
		  {
			"title": "Multicultural Literature for Diversity Education",
			"subtitle": "Cultural Awareness Initiative",
			"description": "The Cultural Awareness Initiative is seeking donations of multicultural literature for diversity education. Multicultural literature reflects the diverse experiences and perspectives of people from different cultures, ethnicities, and backgrounds. We are seeking donations of multicultural books, novels, and poetry collections to promote empathy, understanding, and cultural appreciation among students.",
			"tags": {
				"type": "School Supplies",
				"category": "Books"
			  },
			"imgURL": "https://example.com/multicultural_literature_diversity_education.jpg"
		  },
		  {
			"title": "Educational Flashcards for Vocabulary Building",
			"subtitle": "Language Learning Project",
			"description": "The Language Learning Project is collecting donations of educational flashcards for vocabulary building. Flashcards are effective tools for language learning and vocabulary retention, providing visual cues and context for word meanings. We are seeking donations of flashcards covering various languages and proficiency levels to support language learners in expanding their vocabulary.",
			"tags": {
				"type": "School Supplies",
				"category": "Stationery"
			  },
			"imgURL": "https://example.com/educational_flashcards_vocabulary_building.jpg"
		  },
		  {
			"title": "Literacy Kits for Early Childhood Development",
			"subtitle": "Early Literacy Initiative",
			"description": "The Early Literacy Initiative is providing literacy kits for early childhood development. Literacy kits include books, activities, and resources designed to promote language development, early literacy skills, and a love of reading in young children. We are seeking donations of literacy kits to support parents, caregivers, and educators in fostering literacy-rich environments for young learners.",
			"tags": {
				"type": "School Supplies",
				"category": "Books"
			  },
			"imgURL": "https://example.com/literacy_kits_early_childhood.jpg"
		  },
		  {
			"title": "Calculator Donation Drive for Math Students",
			"subtitle": "Mathematics Mastery Program",
			"description": "The Mathematics Mastery Program is hosting a calculator donation drive for math students. Calculators are essential tools for solving mathematical problems and exploring mathematical concepts in classrooms. We are seeking donations of scientific calculators, graphing calculators, and basic calculators to ensure that all students have access to the calculators they need for math education.",
			"tags": {
				"type": "School Supplies",
				"category": "Stationery"
			  },
			"imgURL": "https://example.com/calculator_donation_drive_math_students.jpg"
		  },
		  {
			"title": "Writing Journals for Creative Writing Workshops",
			"subtitle": "Creative Writing Program",
			"description": "The Creative Writing Program is seeking donations of writing journals for creative writing workshops. Writing journals provide students with a dedicated space to explore their thoughts, ideas, and imagination through writing. We are seeking donations of writing journals to inspire creativity and self-expression in students participating in creative writing programs and workshops.",
			"tags": {
				"type": "School Supplies",
				"category": "Stationery"
			  },
			"imgURL": "https://example.com/writing_journals_creative_writing.jpg"
		  },
		  {
			"title": "Geography Maps for Social Studies Classrooms",
			"subtitle": "Global Awareness Project",
			"description": "The Global Awareness Project is seeking donations of geography maps for social studies classrooms. Geography maps are valuable resources for teaching students about the world's continents, countries, regions, and physical features. We are seeking donations of world maps, country maps, and thematic maps to enhance geographic literacy and global awareness among students.",
			"tags": {
				"type": "School Supplies",
				"category": "Books"
			  },
			"imgURL": "https://example.com/geography_maps_social_studies.jpg"
		  },
		  {
			"title": "Educational DVDs for Visual Learning",
			"subtitle": "Visual Learning Initiative",
			"description": "The Visual Learning Initiative is collecting donations of educational DVDs for visual learning experiences. Educational DVDs offer multimedia content and engaging visuals to supplement classroom instruction and reinforce academic concepts. We are seeking donations of educational DVDs covering various subjects and topics to support visual learners in their educational journey.",
			"tags": {
				"type": "School Supplies",
				"category": "Books"
			  },
			"imgURL": "https://example.com/educational_dvds_visual_learning.jpg"
		  },
		  {
			"title": "STEM Books for Science and Engineering Enthusiasts",
			"subtitle": "STEM Education Foundation",
			"description": "The STEM Education Foundation is seeking donations of STEM books for science and engineering enthusiasts. STEM books provide valuable resources for learning about science, technology, engineering, and mathematics concepts, principles, and applications. We are seeking donations of STEM books for readers of all ages to inspire curiosity, innovation, and exploration in STEM fields.",
			"tags": {
				"type": "School Supplies",
				"category": "Books"
			  },
			"imgURL": "https://example.com/stem_books_science_engineering.jpg"
		  },
		  {
			"title": "Blood Donation Drive at Cleopatra Hospital",
			"subtitle": "Cleopatra Hospital",
			"description": "Cleopatra Hospital is hosting a blood donation drive to support patients in need of blood transfusions. Blood donations are critical for treating patients with various medical conditions, including trauma, surgeries, and chronic illnesses. We encourage community members in Cairo to donate blood and save lives at Cleopatra Hospital.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Cleopatra Hospital",
				"Governorate": "Cairo",
				"Area": "Masr el Gedida"
			  },
			"imgURL": "https://example.com/blood_donation_drive_cleopatra_hospital.jpg"
		  },
		  {
			"title": "Emergency Blood Drive at As-Salam International Hospital",
			"subtitle": "As-Salam International Hospital",
			"description": "As-Salam International Hospital is organizing an emergency blood drive to address critical shortages in blood supply. Blood donations are urgently needed to support patients undergoing surgeries, cancer treatments, and medical emergencies. We urge residents in Cairo to donate blood and help save lives at As-Salam International Hospital.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Cleopatra Hospital",
				"Governorate": "Cairo",
				"Area": "Maadi"
			  },
			"imgURL": "https://example.com/emergency_blood_drive_as_salam_hospital.jpg"
		  },
		  {
			"title": "Community Blood Donation Event at El-Gouna Hospital",
			"subtitle": "El-Gouna Hospital",
			"description": "El-Gouna Hospital is hosting a community blood donation event to replenish its blood bank supplies. Blood donations are essential for providing life-saving treatments to patients with blood disorders, anemia, and leukemia. We invite residents in Hurghada to participate in the blood donation event at El-Gouna Hospital and make a difference in the lives of patients.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "El-Gouna Hospital",
				"Governorate": "Red Sea",
				"Area": "Hurghada"
			  },
			"imgURL": "https://example.com/community_blood_donation_el_gouna_hospital.jpg"
		  },
		  {
			"title": "Blood Donation Campaign at Luxor International Hospital",
			"subtitle": "Luxor International Hospital",
			"description": "Luxor International Hospital is launching a blood donation campaign to support patients in need of blood transfusions. Blood donations play a vital role in saving lives and improving health outcomes for patients undergoing medical treatments and surgeries. We encourage residents in Luxor to donate blood and contribute to the success of the blood donation campaign at Luxor International Hospital.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Luxor International Hospital",
				"Governorate": "Luxor",
				"Area": "Luxor City"
			  },
			"imgURL": "https://example.com/blood_donation_campaign_luxor_hospital.jpg"
		  },
		  {
			"title": "Mobile Blood Donation Unit in Alexandria",
			"subtitle": "Mobile Blood Donation Unit",
			"description": "The Mobile Blood Donation Unit is visiting various locations in Alexandria to collect blood donations from volunteer donors. Blood donations are urgently needed to support patients in hospitals across Alexandria and meet the demand for blood transfusions. We encourage residents in Alexandria to locate the Mobile Blood Donation Unit and donate blood to save lives.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Mobile Blood Donation Unit",
				"Governorate": "Alexandria",
				"Area": "Bolkly"
			  },
			"imgURL": "https://example.com/mobile_blood_donation_unit_alexandria.jpg"
		  },
		  {
			"title": "Blood Donation Marathon at Ain Shams University Hospital",
			"subtitle": "Ain Shams University Hospital",
			"description": "Ain Shams University Hospital is organizing a blood donation marathon to address shortages in blood supply and support patients in need of transfusions. Blood donations are essential for treating patients with thalassemia, hemophilia, and other blood disorders. We urge students, faculty, and staff at Ain Shams University to participate in the blood donation marathon and save lives.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Ain Shams University Hospital",
				"Governorate": "Cairo",
				"Area": "Al Zaytoun"
			  },
			"imgURL": "https://example.com/blood_donation_marathon_ain_shams_hospital.jpg"
		  },
		  {
			"title": "Blood Drive for Children's Hospital in Giza",
			"subtitle": "Children's Hospital",
			"description": "Children's Hospital in Giza is hosting a blood drive to support pediatric patients in need of blood transfusions. Blood donations are crucial for treating children with leukemia, sickle cell disease, and other hematologic disorders. We encourage residents in Giza to donate blood and make a difference in the lives of children at Children's Hospital.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Children's Hospital",
				"Governorate": "Giza",
				"Area": "Al Haram"
			  },
			"imgURL": "https://example.com/blood_drive_children_hospital_giza.jpg"
		  },
		  {
			"title": "Blood Donation Rally at Dar Al Fouad Hospital",
			"subtitle": "Dar Al Fouad Hospital",
			"description": "Dar Al Fouad Hospital is organizing a blood donation rally to raise awareness about the importance of blood donation and encourage community members to donate blood. Blood donations are vital for supporting patients undergoing surgeries, organ transplants, and cancer treatments. We invite residents in Cairo to join the blood donation rally at Dar Al Fouad Hospital and save lives.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Cleopatra Hospital",
				"Governorate": "Cairo",
				"Area": "6th of October City"
			  },
			"imgURL": "https://example.com/blood_donation_rally_dar_al_fouad_hospital.jpg"
		  },
		  {
			"title": "Community Blood Donation Campaign in Sharkia",
			"subtitle": "Sharkia General Hospital",
			"description": "Sharkia General Hospital is launching a community blood donation campaign to address shortages in blood supply and meet the needs of patients in the region. Blood donations are critical for treating patients with anemia, bleeding disorders, and surgical complications. We encourage residents in Sharkia to participate in the blood donation campaign and support their local hospital.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Sharkia General Hospital",
				"Governorate": "Sharkia",
				"Area": "Zagazig"
			  },
			"imgURL": "https://example.com/community_blood_donation_sharkia_hospital.jpg"
		  },
		  {
			"title": "Emergency Blood Donation Drive at Maadi Military Hospital",
			"subtitle": "Maadi Military Hospital",
			"description": "Maadi Military Hospital is conducting an emergency blood donation drive to address shortages in blood supply and ensure the availability of blood for military personnel and their families. Blood donations are crucial for treating combat injuries, emergencies, and medical conditions among military personnel. We urge residents in Cairo to donate blood and support our military heroes at Maadi Military Hospital.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Maadi Military Hospital",
				"Governorate": "Cairo",
				"Area": "Maadi"
			  },
			"imgURL": "https://example.com/emergency_blood_donation_maadi_military_hospital.jpg"
		  },
		  {
			"title": "Blood Donation Event for Cancer Patients in Mansoura",
			"subtitle": "Mansoura Oncology Center",
			"description": "Mansoura Oncology Center is hosting a blood donation event to support cancer patients undergoing chemotherapy, radiation therapy, and bone marrow transplants. Blood donations are essential for managing side effects, complications, and treatment-related anemia in cancer patients. We encourage residents in Mansoura to donate blood and provide hope and healing to cancer patients at Mansoura Oncology Center.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Mansoura Oncology Center",
				"Governorate": "Dakahlia",
				"Area": "Mansoura"
			  },
			"imgURL": "https://example.com/blood_donation_event_mansoura_oncology_center.jpg"
		  },
		  {
			"title": "Blood Donation Marathon at Tanta University Hospital",
			"subtitle": "Tanta University Hospital",
			"description": "Tanta University Hospital is organizing a blood donation marathon to address shortages in blood supply and support patients in need of blood transfusions. Blood donations are crucial for treating patients with thalassemia, leukemia, and other hematologic disorders. We urge students, faculty, and staff at Tanta University to participate in the blood donation marathon and save lives.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Tanta University Hospital",
				"Governorate": "Gharbia",
				"Area": "Tanta"
			  },
			"imgURL": "https://example.com/blood_donation_marathon_tanta_university_hospital.jpg"
		  },
		  {
			"title": "Mobile Blood Donation Unit in Port Said",
			"subtitle": "Mobile Blood Donation Unit",
			"description": "The Mobile Blood Donation Unit is visiting various locations in Port Said to collect blood donations from volunteer donors. Blood donations are urgently needed to support patients in hospitals across Port Said and meet the demand for blood transfusions. We encourage residents in Port Said to locate the Mobile Blood Donation Unit and donate blood to save lives.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Mobile Blood Donation Unit",
				"Governorate": "Port Said",
				"Area": "Port Fouad"
			  },
			"imgURL": "https://example.com/mobile_blood_donation_unit_port_said.jpg"
		  },
		  {
			"title": "Blood Drive for Hematology Patients at Banha Teaching Hospital",
			"subtitle": "Banha Teaching Hospital",
			"description": "Banha Teaching Hospital is hosting a blood drive to support hematology patients in need of blood transfusions. Blood donations are essential for managing complications, preventing crises, and improving quality of life for patients with blood disorders. We encourage residents in Banha to donate blood and make a positive impact on the lives of hematology patients at Banha Teaching Hospital.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Banha Teaching Hospital",
				"Governorate": "Qalyubia",
				"Area": "Banha"
			  },
			"imgURL": "https://example.com/blood_drive_hematology_patients_banha_hospital.jpg"
		  },
		  {
			"title": "Emergency Blood Donation Rally at Beni Suef General Hospital",
			"subtitle": "Beni Suef General Hospital",
			"description": "Beni Suef General Hospital is organizing an emergency blood donation rally to address critical shortages in blood supply and save lives. Blood donations are urgently needed to support patients with severe injuries, medical emergencies, and surgical procedures. We urge residents in Beni Suef to join the blood donation rally and contribute to the health and well-being of their community.",
			"tags": {
				"type": "Blood donations",
				"Hospital": "Beni Suef General Hospital",
				"Governorate": "Beni Suef",
				"Area": "Beni Suef"
			  },
			"imgURL": "https://example.com/emergency_blood_donation_beni_suef_hospital.jpg"
		  }
	  ];
	}
	else if (props.page === "volunteering"){
		currentData = [
			{
				title: "Math Tutor Needed for High School Students",
				description:
					"Looking for an experienced math tutor to assist high school students with algebra and calculus. Must be patient and have excellent communication skills.",
				tags: {
					type: "Teacher",
					subject: "Mathematics",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "English Literature Teacher Required",
				description:
					"Seeking an English literature teacher to conduct advanced literature classes for college students. Candidate should have a strong background in literary analysis and interpretation.",
				tags: {
					type: "Teacher",
					subject: "English Literature",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Biology Teacher Wanted",
				description:
					"Looking for a biology teacher to teach high school students about cellular biology, genetics, and ecology. Prior teaching experience preferred.",
				tags: {
					type: "Teacher",
					subject: "Biology",
					area: "Heliopolis",
					governorate: "Cairo",
				},
			},
			{
				title: "Physics Instructor Needed",
				description:
					"Urgently seeking a physics instructor to teach university-level physics courses. Must be familiar with classical mechanics, electromagnetism, and thermodynamics.",
				tags: {
					type: "Teacher",
					subject: "Physics",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Arabic Language Teacher Required",
				description:
					"Looking for a qualified Arabic language teacher to teach non-native speakers. Must have experience teaching grammar, syntax, and literature.",
				tags: {
					type: "Teacher",
					subject: "Arabic Language",
					area: "Dokki",
					governorate: "Cairo",
				},
			},
			{
				title: "History Teacher Needed",
				description:
					"Seeking a history teacher to deliver engaging history lessons to secondary school students. Familiarity with Egyptian history is a plus.",
				tags: {
					type: "Teacher",
					subject: "History",
					area: "Mohandessin",
					governorate: "Giza",
				},
			},
			{
				title: "Chemistry Tutor Wanted",
				description:
					"Looking for a chemistry tutor to assist students with understanding chemical reactions, stoichiometry, and atomic structure.",
				tags: {
					type: "Teacher",
					subject: "Chemistry",
					area: "Shubra",
					governorate: "Cairo",
				},
			},
			{
				title: "French Language Teacher Required",
				description:
					"Seeking a French language teacher to conduct language classes for beginners. Must be fluent in French and have experience teaching language skills.",
				tags: {
					type: "Teacher",
					subject: "French Language",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Computer Science Instructor Needed",
				description:
					"Urgently hiring a computer science instructor to teach programming and computer concepts. Must be proficient in languages such as Python and Java.",
				tags: {
					type: "Teacher",
					subject: "Computer Science",
					area: "New Cairo",
					governorate: "Cairo",
				},
			},
			{
				title: "Geography Teacher Wanted",
				description:
					"Looking for a geography teacher to teach physical and human geography. Experience with GIS and mapping software is a plus.",
				tags: {
					type: "Teacher",
					subject: "Geography",
					area: "Helwan",
					governorate: "Cairo",
				},
			},
			{
				title: "Art Teacher Needed",
				description:
					"Seeking an art teacher to teach drawing, painting, and sculpture techniques to students of all ages. Must have a strong portfolio and teaching experience.",
				tags: {
					type: "Teacher",
					subject: "Art",
					area: "Mohandessin",
					governorate: "Giza",
				},
			},
			{
				title: "Music Instructor Required",
				description:
					"Looking for a music instructor to teach piano and music theory. Must be proficient in music notation and have experience teaching individual and group lessons.",
				tags: {
					type: "Teacher",
					subject: "Music",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Physical Education Teacher Wanted",
				description:
					"Seeking a physical education teacher to develop and implement a comprehensive physical education curriculum. Must be certified and have experience teaching sports and fitness.",
				tags: {
					type: "Teacher",
					subject: "Physical Education",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Special Education Teacher Needed",
				description:
					"Urgently hiring a special education teacher to work with students with diverse learning needs. Must be patient, compassionate, and skilled in individualized instruction.",
				tags: {
					type: "Teacher",
					subject: "Special Education",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Psychology Teacher Wanted",
				description:
					"Looking for a psychology teacher to teach high school students about human behavior, cognition, and mental health. Experience with counseling is a plus.",
				tags: {
					type: "Teacher",
					subject: "Psychology",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Business Studies Teacher Required",
				description:
					"Seeking a business studies teacher to teach economics, entrepreneurship, and business management. Must have experience teaching business concepts and practical skills.",
				tags: {
					type: "Teacher",
					subject: "Business Studies",
					area: "Heliopolis",
					governorate: "Cairo",
				},
			},
			{
				title: "Religious Studies Teacher Needed",
				description:
					"Urgently hiring a religious studies teacher to teach Islamic studies. Must have a deep understanding of Islamic theology, history, and jurisprudence.",
				tags: {
					type: "Teacher",
					subject: "Religious Studies",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Health Education Instructor Wanted",
				description:
					"Looking for a health education instructor to teach students about nutrition, fitness, and disease prevention. Must be knowledgeable about public health principles.",
				tags: {
					type: "Teacher",
					subject: "Health Education",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Environmental Science Teacher Required",
				description:
					"Seeking an environmental science teacher to teach ecology, conservation, and sustainability. Experience with fieldwork and outdoor education is desirable.",
				tags: {
					type: "Teacher",
					subject: "Environmental Science",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Drama Teacher Needed",
				description:
					"Urgently hiring a drama teacher to teach acting, improvisation, and theatrical techniques. Must have experience directing student performances.",
				tags: {
					type: "Teacher",
					subject: "Drama",
					area: "Mohandessin",
					governorate: "Giza",
				},
			},
			{
				title: "Social Studies Teacher Wanted",
				description:
					"Looking for a social studies teacher to teach anthropology, sociology, and political science. Must have a passion for social justice and global issues.",
				tags: {
					type: "Teacher",
					subject: "Social Studies",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Home Economics Teacher Required",
				description:
					"Seeking a home economics teacher to teach cooking, nutrition, and household management. Must be skilled in meal planning and food safety.",
				tags: {
					type: "Teacher",
					subject: "Home Economics",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "IT Instructor Needed",
				description:
					"Urgently hiring an IT instructor to teach computer skills and digital literacy. Must be proficient in Microsoft Office and internet applications.",
				tags: {
					type: "Teacher",
					subject: "Information Technology",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Language Arts Teacher Wanted",
				description:
					"Looking for a language arts teacher to teach reading, writing, and communication skills. Must have experience with language acquisition and literacy development.",
				tags: {
					type: "Teacher",
					subject: "Language Arts",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Sociology Teacher Required",
				description:
					"Seeking a sociology teacher to teach sociological theories, research methods, and social issues. Must have experience with experiential learning and group projects.",
				tags: {
					type: "Teacher",
					subject: "Sociology",
					area: "Heliopolis",
					governorate: "Cairo",
				},
			},
			{
				title: "Agriculture Teacher Needed",
				description:
					"Urgently hiring an agriculture teacher to teach crop production, animal husbandry, and agricultural economics. Must have experience with farm management.",
				tags: {
					type: "Teacher",
					subject: "Agriculture",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Physical Science Instructor Wanted",
				description:
					"Looking for a physical science instructor to teach chemistry and physics concepts. Must be proficient in laboratory techniques and safety procedures.",
				tags: {
					type: "Teacher",
					subject: "Physical Science",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Economics Teacher Required",
				description:
					"Seeking an economics teacher to teach microeconomics, macroeconomics, and economic policy. Must have a strong understanding of economic principles.",
				tags: {
					type: "Teacher",
					subject: "Economics",
					area: "Heliopolis",
					governorate: "Cairo",
				},
			},
			{
				title: "Philosophy Teacher Needed",
				description:
					"Urgently hiring a philosophy teacher to teach philosophical theories, ethics, and critical thinking. Must have experience with philosophical discourse.",
				tags: {
					type: "Teacher",
					subject: "Philosophy",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Engineering Instructor Wanted",
				description:
					"Looking for an engineering instructor to teach engineering fundamentals and design principles. Must be proficient in mathematics and physics.",
				tags: {
					type: "Teacher",
					subject: "Engineering",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Government Teacher Required",
				description:
					"Seeking a government teacher to teach civics, political ideologies, and government structures. Must have a passion for democracy and citizenship education.",
				tags: {
					type: "Teacher",
					subject: "Government",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Health Sciences Teacher Needed",
				description:
					"Urgently hiring a health sciences teacher to teach anatomy, physiology, and medical terminology. Must have experience with health education and patient care.",
				tags: {
					type: "Teacher",
					subject: "Health Sciences",
					area: "Mohandessin",
					governorate: "Giza",
				},
			},
			{
				title: "Literacy Instructor Wanted",
				description:
					"Looking for a literacy instructor to teach reading and writing skills to adults. Must have experience with literacy assessments and remediation strategies.",
				tags: {
					type: "Teacher",
					subject: "Literacy",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Media Studies Teacher Required",
				description:
					"Seeking a media studies teacher to teach mass communication, media theory, and digital media production. Must have experience with media literacy and analysis.",
				tags: {
					type: "Teacher",
					subject: "Media Studies",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Nutrition Education Instructor Needed",
				description:
					"Urgently hiring a nutrition education instructor to teach healthy eating habits and nutrition science. Must have a background in dietetics or nutrition science.",
				tags: {
					type: "Teacher",
					subject: "Nutrition Education",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Technology Education Teacher Wanted",
				description:
					"Looking for a technology education teacher to teach computer applications, digital citizenship, and technology integration. Must have experience with educational technology.",
				tags: {
					type: "Teacher",
					subject: "Technology Education",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Vocational Training Instructor Required",
				description:
					"Seeking a vocational training instructor to teach job skills and vocational competencies. Must have experience with vocational assessments and career development.",
				tags: {
					type: "Teacher",
					subject: "Vocational Training",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Youth Development Teacher Needed",
				description:
					"Urgently hiring a youth development teacher to provide mentoring and life skills education to adolescents. Must have experience with youth empowerment programs.",
				tags: {
					type: "Teacher",
					subject: "Youth Development",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Medical Doctor - Cardiologist Needed",
				description:
					"We are looking for a skilled cardiologist to join our medical team. The ideal candidate should have expertise in diagnosing and treating heart conditions.",
				tags: {
					type: "Doctor",
					specialty: "Cardiology",
					organization: "Egyptian Heart Institute",
					area: "Dokki",
					governorate: "Cairo",
				},
			},
			{
				title: "Pediatrician Required",
				description:
					"Seeking a compassionate pediatrician to provide healthcare services to infants, children, and adolescents. Must be skilled in pediatric diagnosis, treatment, and care.",
				tags: {
					type: "Doctor",
					specialty: "Pediatrics",
					organization: "Nile Hospital",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "General Surgeon Needed",
				description:
					"Urgently hiring a general surgeon to perform surgical procedures and provide pre- and post-operative care. Must have excellent surgical skills and clinical judgment.",
				tags: {
					type: "Doctor",
					specialty: "General Surgery",
					organization: "Al Salam International Hospital",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Family Medicine Physician Wanted",
				description:
					"Looking for a family medicine physician to provide comprehensive primary care services to individuals and families. Must be skilled in preventive medicine and chronic disease management.",
				tags: {
					type: "Doctor",
					specialty: "Family Medicine",
					organization: "Cairo Family Clinic",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Obstetrician-Gynecologist Required",
				description:
					"Seeking an obstetrician-gynecologist to provide women's healthcare services including prenatal care, labor and delivery, and gynecological procedures.",
				tags: {
					type: "Doctor",
					specialty: "Obstetrics and Gynecology",
					organization: "Nasr City Women's Hospital",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Orthopedic Surgeon Needed",
				description:
					"Urgently hiring an orthopedic surgeon to diagnose and treat musculoskeletal injuries and conditions. Must have expertise in surgical and non-surgical orthopedic interventions.",
				tags: {
					type: "Doctor",
					specialty: "Orthopedic Surgery",
					organization: "Cairo Orthopedic Center",
					area: "Mohandessin",
					governorate: "Giza",
				},
			},
			{
				title: "Ophthalmologist Wanted",
				description:
					"Looking for an ophthalmologist to diagnose and treat eye diseases and perform eye surgeries. Must have experience with comprehensive eye exams and specialized testing.",
				tags: {
					type: "Doctor",
					specialty: "Ophthalmology",
					organization: "Egyptian Eye Institute",
					area: "Heliopolis",
					governorate: "Cairo",
				},
			},
			{
				title: "Dermatologist Required",
				description:
					"Seeking a dermatologist to diagnose and treat skin, hair, and nail disorders. Must have expertise in dermatological procedures and cosmetic dermatology.",
				tags: {
					type: "Doctor",
					specialty: "Dermatology",
					organization: "Cairo Skin Clinic",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Neurologist Needed",
				description:
					"Urgently hiring a neurologist to diagnose and treat disorders of the nervous system. Must have expertise in neurological examination, imaging, and diagnostic tests.",
				tags: {
					type: "Doctor",
					specialty: "Neurology",
					organization: "Nile Neurological Center",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Psychiatrist Wanted",
				description:
					"Looking for a psychiatrist to diagnose and treat mental illnesses and emotional disorders. Must have expertise in psychotherapy and psychopharmacology.",
				tags: {
					type: "Doctor",
					specialty: "Psychiatry",
					organization: "Cairo Psychiatry Clinic",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Radiologist Required",
				description:
					"Seeking a radiologist to interpret medical images and perform diagnostic imaging procedures. Must have expertise in X-ray, CT, MRI, and ultrasound.",
				tags: {
					type: "Doctor",
					specialty: "Radiology",
					organization: "Egyptian Diagnostic Imaging Center",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Anesthesiologist Needed",
				description:
					"Urgently hiring an anesthesiologist to administer anesthesia and monitor patients during surgery. Must have expertise in pain management and critical care.",
				tags: {
					type: "Doctor",
					specialty: "Anesthesiology",
					organization: "Cairo Anesthesia Group",
					area: "Heliopolis",
					governorate: "Cairo",
				},
			},
			{
				title: "Urologist Wanted",
				description:
					"Looking for a urologist to diagnose and treat disorders of the urinary tract and male reproductive system. Must have expertise in urological surgery and minimally invasive procedures.",
				tags: {
					type: "Doctor",
					specialty: "Urology",
					organization: "Nile Urology Clinic",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Emergency Medicine Physician Required",
				description:
					"Seeking an emergency medicine physician to provide urgent medical care in emergency departments. Must have expertise in trauma management and resuscitation.",
				tags: {
					type: "Doctor",
					specialty: "Emergency Medicine",
					organization: "Cairo Emergency Hospital",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Endocrinologist Needed",
				description:
					"Urgently hiring an endocrinologist to diagnose and treat hormonal disorders and metabolic diseases. Must have expertise in endocrine testing and hormone therapy.",
				tags: {
					type: "Doctor",
					specialty: "Endocrinology",
					organization: "Egyptian Endocrine Clinic",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Hematologist-Oncologist Wanted",
				description:
					"Looking for a hematologist-oncologist to diagnose and treat blood disorders and cancer. Must have expertise in chemotherapy, immunotherapy, and hematological testing.",
				tags: {
					type: "Doctor",
					specialty: "Hematology-Oncology",
					organization: "Nile Cancer Center",
					area: "Mohandessin",
					governorate: "Giza",
				},
			},
			{
				title: "Pulmonologist Required",
				description:
					"Seeking a pulmonologist to diagnose and treat respiratory diseases and disorders. Must have expertise in pulmonary function testing and respiratory therapy.",
				tags: {
					type: "Doctor",
					specialty: "Pulmonology",
					organization: "Cairo Pulmonary Clinic",
					area: "Heliopolis",
					governorate: "Cairo",
				},
			},
			{
				title: "Rheumatologist Needed",
				description:
					"Urgently hiring a rheumatologist to diagnose and treat autoimmune and musculoskeletal disorders. Must have expertise in rheumatologic examination and joint injections.",
				tags: {
					type: "Doctor",
					specialty: "Rheumatology",
					organization: "Egyptian Rheumatology Center",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Infectious Disease Specialist Wanted",
				description:
					"Looking for an infectious disease specialist to diagnose and treat infectious diseases and manage infection control. Must have expertise in epidemiology and antimicrobial therapy.",
				tags: {
					type: "Doctor",
					specialty: "Infectious Diseases",
					organization: "Nile Infectious Disease Clinic",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Geriatrician Required",
				description:
					"Seeking a geriatrician to provide healthcare services to elderly patients. Must have expertise in geriatric assessment, dementia care, and palliative medicine.",
				tags: {
					type: "Doctor",
					specialty: "Geriatrics",
					organization: "Cairo Geriatric Clinic",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Neonatologist Needed",
				description:
					"Urgently hiring a neonatologist to provide medical care to newborn infants, especially those who are premature or ill. Must have expertise in neonatal intensive care.",
				tags: {
					type: "Doctor",
					specialty: "Neonatology",
					organization: "Nile Neonatal Center",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Nephrologist Wanted",
				description:
					"Looking for a nephrologist to diagnose and treat kidney diseases and disorders. Must have expertise in dialysis, kidney transplantation, and renal biopsy.",
				tags: {
					type: "Doctor",
					specialty: "Nephrology",
					organization: "Egyptian Nephrology Center",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Pathologist Required",
				description:
					"Seeking a pathologist to diagnose diseases by examining tissues, cells, and body fluids. Must have expertise in histopathology, cytopathology, and molecular pathology.",
				tags: {
					type: "Doctor",
					specialty: "Pathology",
					organization: "Cairo Pathology Laboratory",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
			{
				title: "Plastic Surgeon Needed",
				description:
					"Urgently hiring a plastic surgeon to perform cosmetic and reconstructive surgeries. Must have expertise in aesthetic surgery, microsurgery, and tissue grafting.",
				tags: {
					type: "Doctor",
					specialty: "Plastic Surgery",
					organization: "Nile Plastic Surgery Clinic",
					area: "Zamalek",
					governorate: "Cairo",
				},
			},
			{
				title: "Radiation Oncologist Wanted",
				description:
					"Looking for a radiation oncologist to treat cancer patients with radiation therapy. Must have expertise in radiation treatment planning and delivery.",
				tags: {
					type: "Doctor",
					specialty: "Radiation Oncology",
					organization: "Egyptian Cancer Institute",
					area: "Maadi",
					governorate: "Cairo",
				},
			},
			{
				title: "Sleep Medicine Specialist Required",
				description:
					"Seeking a sleep medicine specialist to diagnose and treat sleep disorders such as sleep apnea, insomnia, and narcolepsy. Must have expertise in sleep studies and treatment modalities.",
				tags: {
					type: "Doctor",
					specialty: "Sleep Medicine",
					organization: "Cairo Sleep Clinic",
					area: "Nasr City",
					governorate: "Cairo",
				},
			},
		];
	}

	else if (props.page === "organizationPosts"){
		currentData = [
			{
				title: "Kids Clothing Drive for Needy Families",
				description:
					"Local Charity Foundation is organizing a clothing drive for needy families with children aged 5-10. Many families in our community struggle to afford basic necessities, including clothing for their children. We urgently need donations of gently used or new clothing items such as shirts, pants, and shoes to help alleviate the burden on these families. Your generosity will bring warmth and comfort to those in need.",
				tags: {
					type: "Clothes",
					age: "Kids",
					gender: "Unisex",
					season: "",
				},
				imgURL: "https://example.com/kids_clothing_drive.jpg",
			},
			{
				title: "Winter Clothing Drive for Homeless Teens",
				description:
					"The Street Outreach Program is hosting a winter clothing drive to support homeless teenagers in our city. As temperatures plummet, homeless teens are particularly vulnerable to the harsh winter conditions. We are seeking donations of warm winter clothing items such as coats, hats, and gloves to provide essential warmth and protection to these vulnerable youth. Your contributions will make a tangible difference in the lives of homeless teens struggling to survive on the streets.",
				tags: {
					type: "Clothes",
					age: "Teens",
					gender: "Unisex",
					season: "Winter",
				},
				imgURL: "https://example.com/teens_clothing_drive.jpg",
			},
			{
				title: "Spring Clothing Giveaway for Low-Income Adults",
				description:
					"Community Support Network is hosting a spring clothing giveaway for low-income adults in our community. Many adults facing financial hardship lack adequate clothing for the changing seasons. We are collecting donations of spring attire such as dresses, shirts, and jackets to provide to individuals and families in need. Your contributions will help restore dignity and self-confidence to those struggling to make ends meet.",
				tags: {
					type: "Clothes",
					age: "Adults",
					gender: "Unisex",
					season: "Spring",
				},
				imgURL: "https://example.com/adults_clothing_giveaway.jpg",
			},
			{
				title: "Fall Clothing Drive for Displaced Families",
				description:
					"The Refugee Assistance Program is launching a fall clothing drive to support displaced families in our community. Many refugee families arrive in our city with little more than the clothes on their backs, facing significant challenges in rebuilding their lives. We urgently need donations of fall clothing items such as sweaters, jeans, and boots to provide essential warmth and comfort to these families as they navigate the resettlement process. Your donations will offer hope and stability to those striving to build a new future in a foreign land.",
				tags: {
					type: "Clothes",
					age: "Adults",
					gender: "Unisex",
					season: "Fall",
				},
				imgURL: "https://example.com/fall_clothing_drive.jpg",
				isFulfilled: "false",
			},
			{
				title: "Warm Coats for Winter: Adults",
				description:
					"Community Outreach Center urgently needs donations of warm winter coats for adults in our community. As temperatures drop, many individuals are left vulnerable to the cold without adequate outerwear. Your contributions of coats, jackets, and scarves will provide essential warmth and protection to those in need, helping them stay safe and healthy throughout the winter season.",
				tags: {
					type: "Clothes",
					age: "Adults",
					gender: "Unisex",
					season: "Winter",
				},
				imgURL: "https://example.com/winter_coats_adults.jpg",
			},
			{
				title: "Teen Hoodies and Sweatshirts",
				description:
					"Youth Support Services is seeking donations of hoodies and sweatshirts for teenagers in need. Many teens lack warm clothing options to stay comfortable during cooler weather. Your donations will provide essential warmth and comfort to teens facing financial hardship or homelessness, helping them navigate the challenges of adolescence with dignity and confidence.",
				tags: {
					type: "Clothes",
					age: "Teens",
					gender: "Unisex",
					season: "Fall",
				},
				imgURL: "https://example.com/teen_hoodies.jpg",
			},
			{
				title: "Kids Summer Clothing Collection",
				description:
					"Children's Relief Fund is collecting summer clothing donations for kids of all ages. As temperatures rise, many families struggle to provide lightweight and breathable clothing for their children. Your donations of summer dresses, shorts, and sandals will help kids stay cool and comfortable during the hot summer months, allowing them to enjoy outdoor activities without discomfort or risk of overheating.",
				tags: {
					type: "Clothes",
					age: "Kids",
					gender: "Unisex",
					season: "Summer",
				},
				imgURL: "https://example.com/kids_summer_clothing.jpg",
			},
		];
	}


	return (
		<div>
			<div className="grid grid-cols-4 max-w-7xl w-full mx-auto">
				<div className="col-span-1 justify-self-start">
					<div className="flex flex-col items-center justify-center gap-4 sticky top-24">
						<Filter data={currentData} setCurrentCardSet={setCurrentCardSet} />
					</div>
				</div>
				<div className="col-span-2">
					<div className="flex flex-col items-center justify-center gap-4">
						<CardRenderer type={type} currentCardSet={currentCardSet} />
					</div>
				</div>
				<div className="col-span-1 justify-self-end">
					{props.page === "organizationPosts" && (
						<div
							className="sticky top-24 -mb-8 rounded-md filter-scrollbar overflow-y-auto"
							style={{ maxHeight: "calc(100vh - 11.1rem)" }}
						>
							<button
								className="mb-2 px-3 py-2 w-64 rounded-md border-white bg-farahorange-400 cursor-pointer"
								onClick={() => props.setPage("postForm")}
							>
								<h3 className="text-lg font-semibold text-white text-center on">
									New Post
								</h3>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default PostsView;