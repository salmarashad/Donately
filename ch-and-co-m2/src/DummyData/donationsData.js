const donationsData = [
    // Clothing ----------------------------------------------------------------------------------------------------------------------------
    {
        "title": "Warm Winter Coats for Kids",
        "subtitle": "Sunshine Shelter",
        "description": "Sunshine Shelter is seeking warm winter coats for kids in need. With the cold weather approaching, many children in our community lack proper outerwear to stay warm. Your donations will help ensure every child can stay cozy this winter.",
        "tags": {
        "Category": "Clothes",
        "Age": "Kids",
        "Gender": "Unisex",
        "Season": "Winter"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "30 coats",
        "material": "Polyester",
        "type": "Jackets",
        "progress": 65
    },
    {
        "title": "Professional Attire for Adult Women",
        "subtitle": "CareerAdvantage",
        "description": "CareerAdvantage is dedicated to empowering women by providing them with professional attire for job interviews and employment opportunities. Your donations of gently used or new clothing items will help boost confidence and pave the way to success for women in need.",
        "tags": {
        "Category": "Clothes",
        "Age": "Adults",
        "Gender": "Women",
        "Season": "Year-round"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "20 outfits",
        "material": "Cotton",
        "type": "Suits",
        "progress": 40
    },
    {
        "title": "Spring Dresses for Teens",
        "subtitle": "YouthStyle Foundation",
        "description": "YouthStyle Foundation is collecting spring dresses for teenagers to promote confidence and self-expression. Your donations will help teens feel special for proms, graduations, and other important events.",
        "tags": {
        "Category": "Clothes",
        "Age": "Teens",
        "Gender": "Women",
        "Season": "Spring"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "15 dresses",
        "material": "Silk",
        "type": "Dresses",
        "progress": 20
    },
    {
        "title": "Summer T-shirts for Men",
        "subtitle": "Community Outreach Center",
        "description": "Community Outreach Center is in need of summer t-shirts for men experiencing homelessness. As the temperature rises, so does the need for lightweight clothing. Your donations will provide comfort and relief during the hot summer months.",
        "tags": {
        "Category": "Clothes",
        "Age": "Adults",
        "Gender": "Men",
        "Season": "Summer"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "50 t-shirts",
        "material": "Organic cotton",
        "type": "Shirts",
        "progress": 75
    },
    {
        "title": "Baby Onesies for Fall",
        "subtitle": "Tiny Angels Nursery",
        "description": "Tiny Angels Nursery is requesting baby onesies for the upcoming fall season. As new parents struggle to provide essentials for their newborns, your donations will bring warmth and comfort to little ones in need.",
        "tags": {
        "Category": "Clothes",
        "Age": "Babies",
        "Gender": "Unisex",
        "Season": "Fall"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "40 onesies",
        "material": "Fleece",
        "type": "Onesies",
        "progress": 10
    },
    {
        "title": "Winter Scarves for Adults",
        "subtitle": "Hope Haven Shelter",
        "description": "Hope Haven Shelter is seeking donations of winter scarves for adults experiencing homelessness. Scarves are essential for staying warm during the cold winter months. Your contributions will provide warmth and comfort to those in need.",
        "tags": {
        "Category": "Clothes",
        "Age": "Adults",
        "Gender": "Unisex",
        "Season": "Winter"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "25 scarves",
        "material": "Wool",
        "type": "Scarves",
        "progress": 55
    },
    {
        "title": "Kids' Hoodies for Spring",
        "subtitle": "Sunflower Youth Center",
        "description": "Sunflower Youth Center is collecting kids' hoodies for the spring season. With the weather warming up, children need lightweight outerwear to stay comfortable during outdoor activities. Your donations will make a difference in their lives.",
        "tags": {
        "Category": "Clothes",
        "Age": "Kids",
        "Gender": "Unisex",
        "Season": "Spring"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "35 hoodies",
        "material": "Fleece",
        "type": "Hoodies",
        "progress": 80
    },
    {
        "title": "Adult Jeans for Summer",
        "subtitle": "Community Closet Initiative",
        "description": "Community Closet Initiative is in need of adult jeans for the summer season. Jeans are versatile and durable, making them an essential wardrobe staple for individuals experiencing financial hardship. Your donations will provide much-needed clothing to those in need.",
        "tags": {
        "Category": "Clothes",
        "Age": "Adults",
        "Gender": "Unisex",
        "Season": "Summer"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "30 pairs of jeans",
        "material": "Denim",
        "type": "Jeans",
        "progress": 45
    },
    {
        "title": "Women's Coats for Fall",
        "subtitle": "Empowerment Alliance",
        "description": "Empowerment Alliance is seeking donations of women's coats for the fall season. As the temperature drops, many women in our community lack proper outerwear to stay warm. Your contributions will provide warmth and comfort to those in need.",
        "tags": {
        "Category": "Clothes",
        "Age": "Adults",
        "Gender": "Women",
        "Season": "Fall"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "20 coats",
        "material": "Leather",
        "type": "Coats",
        "progress": 30
    },
    {
        "title": "Kids' Winter Boots",
        "subtitle": "Brighter Futures Foundation",
        "description": "Brighter Futures Foundation is collecting kids' winter boots to keep little feet warm and dry during the cold season. Many children in our community lack proper footwear for winter weather. Your donations will help protect them from the elements.",
        "tags": {
        "Category": "Clothes",
        "Age": "Kids",
        "Gender": "Unisex",
        "Season": "Winter"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "25 pairs of boots",
        "material": "Rubber",
        "type": "Boots",
        "progress": 60
    },
    {
        "title": "Summer Dresses for Women",
        "subtitle": "Sunshine Dresses Foundation",
        "description": "Sunshine Dresses Foundation is seeking donations of summer dresses for women in need. With the hot weather approaching, many women lack suitable clothing to stay cool and comfortable. Your donations will provide relief and confidence to those in need.",
        "tags": {
        "Category": "Clothes",
        "Age": "Adults",
        "Gender": "Women",
        "Season": "Summer"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "30 dresses",
        "material": "Cotton",
        "type": "Dresses",
        "progress": 25
    },
    {
        "title": "Unisex Fall Sweaters",
        "subtitle": "Warmth Initiative",
        "description": "Warmth Initiative is collecting unisex fall sweaters to help individuals stay cozy during the cooler months. Sweaters are essential for layering and providing warmth as the temperature drops. Your donations will bring comfort to those in need.",
        "tags": {
        "Category": "Clothes",
        "Age": "Adults",
        "Gender": "Unisex",
        "Season": "Fall"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "40 sweaters",
        "material": "Wool blend",
        "type": "Sweaters",
        "progress": 70
    },
    {
        "title": "Teen Jeans for Spring",
        "subtitle": "YouthStyle Foundation",
        "description": "YouthStyle Foundation is collecting teen jeans for the spring season. Jeans are a staple item in any wardrobe, providing comfort and style for teenagers. Your donations will help teens express themselves through fashion.",
        "tags": {
        "Category": "Clothes",
        "Age": "Teens",
        "Gender": "Unisex",
        "Season": "Spring"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "25 pairs of jeans",
        "material": "Denim",
        "type": "Jeans",
        "progress": 15
    },
    {
        "title": "Winter Hats for Babies",
        "subtitle": "Tiny Angels Nursery",
        "description": "Tiny Angels Nursery is requesting winter hats for babies to keep them warm and cozy during the cold season. Many families struggle to provide essentials for their newborns. Your donations will make a difference in their lives.",
        "tags": {
        "Category": "Clothes",
        "Age": "Babies",
        "Gender": "Unisex",
        "Season": "Winter"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "30 hats",
        "material": "Fleece",
        "type": "Hats",
        "progress": 5
    },
    {
        "title": "Summer Shorts for Kids",
        "subtitle": "Sunflower Youth Center",
        "description": "Sunflower Youth Center is collecting summer shorts for kids to keep them cool and comfortable during outdoor activities. With the hot weather approaching, many children lack suitable clothing. Your donations will provide relief and joy to kids in need.",
        "tags": {
        "Category": "Clothes",
        "Age": "Kids",
        "Gender": "Unisex",
        "Season": "Summer"
        },
        "imgURL": "https://example.com/clothing.jpg",
        "required_amount": "40 pairs of shorts",
        "material": "Cotton",
        "type": "Shorts",
        "progress": 90
    },

    // School Supplies ----------------------------------------------------------------------------------------------------------------------------
    {
        "title": "Stationery for Elementary School",
        "subtitle": "Bright Minds Foundation",
        "description": "Bright Minds Foundation is dedicated to providing elementary school students with essential stationery items. Your donations of pencils, erasers, notebooks, rulers, calculators, and more will support their academic success and encourage creativity in the classroom. With your help, we can ensure that every child has the tools they need to thrive.",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Stationery"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "30 sets",
        "type": "Assorted stationery",
        "progress": 20
    },
    {
        "title": "To Kill a Mockingbird",
        "subtitle": "Bookworms Read Initiative",
        "description": "Join the Bookworms Read Initiative in providing copies of Harper Lee's classic novel, 'To Kill a Mockingbird', to schools and libraries across the nation. This powerful story explores themes of racial injustice, moral growth, and societal prejudice in the American South during the 1930s, enriching readers' understanding of history and humanity.",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Books"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "15 copies",
        "type": "Novel",
        "progress": 50,
        "book_details": {
        "Title": "To Kill a Mockingbird",
        "Author": "Harper Lee",
        "Edition": "50th Anniversary Edition",
        "Language": "English"
        }
    },
    {
        "title": "Stationery for Middle School",
        "subtitle": "Creative Minds Foundation",
        "description": "The Creative Minds Foundation is on a mission to collect stationery supplies for middle school students in underserved communities. Your generous donations of pens, pencils, rulers, calculators, and other essential supplies will empower students to excel academically and explore their creativity in the classroom. Let's ensure that no child is left behind due to a lack of resources.",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Stationery"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "25 sets",
        "type": "Assorted stationery",
        "progress": 35
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "subtitle": "Magical Reading Foundation",
        "description": "Embark on a magical journey with the Magical Reading Foundation by providing copies of J.K. Rowling's enchanting novel, 'Harry Potter and the Sorcerer's Stone', to schools and libraries nationwide. This captivating tale follows young Harry Potter as he discovers his extraordinary destiny at Hogwarts School of Witchcraft and Wizardry, unraveling mysteries, forging friendships, and confronting dark forces along the way.",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Books"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "20 copies",
        "type": "Fantasy",
        "progress": 65,
        "book_details": {
        "Title": "Harry Potter and the Sorcerer's Stone",
        "Author": "J.K. Rowling",
        "Edition": "1st Edition",
        "Language": "English"
        }
    },
    {
        "title": "Stationery Drive for Underprivileged Students",
        "subtitle": "Education for All Foundation",
        "description": "The Education for All Foundation is conducting a stationery drive to support underprivileged students in their educational journey. Your generous donations of notebooks, pens, pencils, erasers, and other essential supplies will ensure that every child has the tools they need to succeed in school, regardless of their economic background. Let's empower students to reach for the stars!",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Stationery"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "50 sets",
        "type": "Assorted stationery",
        "progress": 40
    },
    {
        "title": "Introduction to Chemistry",
        "subtitle": "Science Enrichment Society",
        "description": "Expand young minds and ignite curiosity with the Science Enrichment Society by providing copies of 'Introduction to Chemistry' by Nivaldo J. Tro to schools and libraries. This comprehensive textbook offers a foundational understanding of chemical principles, from atomic structure to chemical reactions, fostering a passion for science and discovery among students.",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Books"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "10 textbooks",
        "type": "Textbook",
        "progress": 25,
        "book_details": {
        "Title": "Introduction to Chemistry",
        "Author": "Nivaldo J. Tro",
        "Edition": "5th Edition",
        "Language": "English"
        }
    },
    {
        "title": "Art Supplies for High School Art Class",
        "subtitle": "Artistic Creations Foundation",
        "description": "The Artistic Creations Foundation is collecting art supplies for high school art classes. Your generous donations of paints, brushes, canvases, and other materials will inspire creativity and self-expression among students, fostering a lifelong appreciation for the arts. Let's paint a brighter future together!",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Stationery"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "15 sets",
        "type": "Assorted art supplies",
        "progress": 60
    },
    {
        "title": "The Catcher in the Rye",
        "subtitle": "Literature Lovers Foundation",
        "description": "Join the Literature Lovers Foundation in sharing the timeless classic, 'The Catcher in the Rye' by J.D. Salinger, with schools and libraries nationwide. This iconic novel follows the journey of Holden Caulfield, a disenchanted teenager navigating the complexities of adolescence and societal expectations, resonating with readers of all ages and generations.",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Books"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "20 copies",
        "type": "Novel",
        "progress": 45,
        "book_details": {
        "Title": "The Catcher in the Rye",
        "Author": "J.D. Salinger",
        "Edition": "Reprint Edition",
        "Language": "English"
        }
    },
    {
        "title": "Math Workbooks for Middle School",
        "subtitle": "Maplewood Middle School",
        "description": "Empower students at Maplewood Middle School with 'Math Workbooks for Middle School' from the Scholastic Success with Math series. These engaging workbooks cover essential math topics, providing clear explanations, step-by-step examples, and plenty of practice exercises to reinforce learning. Support middle school students in building strong math skills and confidence with your generous donations!",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Books"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "30 workbooks",
        "type": "Workbook",
        "progress": 75,
        "book_details": {
        "Title": "Math Workbooks for Middle School",
        "Author": "Scholastic Success with Math",
        "Edition": "1st Edition",
        "Language": "English"
        }
    },
    {
        "title": "Graphing Calculators for High School Math Class",
        "subtitle": "Mathematics Enrichment Society",
        "description": "The Mathematics Enrichment Society is collecting graphing calculators for high school math classes. Your donations will provide students with the tools they need to succeed in advanced mathematics and pursue their academic and career aspirations in STEM fields. Join us in empowering the mathematicians of tomorrow!",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Stationery"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "20 calculators",
        "type": "Graphing calculator",
        "progress": 30
    },
    {
        "title": "The Great Gatsby",
        "subtitle": "Literature Lovers Foundation",
        "description": "Immerse students in the dazzling world of the Roaring Twenties with the Literature Lovers Foundation by providing copies of F. Scott Fitzgerald's masterpiece, 'The Great Gatsby', to schools and libraries. This iconic novel explores themes of love, wealth, and the American Dream, captivating readers with its vivid characters and evocative prose.",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Books"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "25 copies",
        "type": "Novel",
        "progress": 60,
        "book_details": {
        "Title": "The Great Gatsby",
        "Author": "F. Scott Fitzgerald",
        "Edition": "Vintage Classics Edition",
        "Language": "English"
        }
    },
    {
        "title": "Elementary Music Theory",
        "subtitle": "Oakridge High School",
        "description": "Immerse students at Oakridge High School in the fascinating world of music theory with 'Elementary Music Theory' by Mark Sarnecki. This textbook offers a comprehensive exploration of musical elements, including rhythm, melody, harmony, and form, providing students with the knowledge and skills to analyze and appreciate various musical compositions. From fundamental concepts to advanced techniques, this textbook empowers young musicians to deepen their understanding and passion for music.",
        "tags": {
            "Category": "School Supplies",
            "Subcategory": "Books"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "15 textbooks",
        "type": "Textbook",
        "progress": 40,
        "book_details": {
            "Title": "Elementary Music Theory",
            "Author": "Mark Sarnecki",
            "Edition": "2nd Edition",
            "Language": "English"
        }
    },    
    {
        "title": "Backpacks for Underprivileged Students",
        "subtitle": "Backpacks for Success Initiative",
        "description": "The Backpacks for Success Initiative provides filled backpacks to underprivileged students. Your donations will not only lighten the burden for students but also empower them to focus on their education and pursue their dreams with confidence and dignity. Join us in making a difference in the lives of students in need!",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Stationery"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "40 backpacks",
        "type": "Assorted backpacks",
        "progress": 80
    },
    {
        "title": "Introduction to Psychology",
        "subtitle": "Mind Matters Foundation",
        "description": "Unlock the mysteries of the mind with the Mind Matters Foundation by providing copies of 'Introduction to Psychology' by Charles Stangor to schools and libraries. This insightful textbook delves into the fascinating world of human behavior and cognition, offering students a foundational understanding of psychological principles and theories to navigate the complexities of the human psyche.",
        "tags": {
        "Category": "School Supplies",
        "Subcategory": "Books"
        },
        "imgURL": "https://example.com/school-supplies.jpg",
        "required_amount": "10 textbooks",
        "type": "Textbook",
        "progress": 55,
        "book_details": {
        "Title": "Introduction to Psychology",
        "Author": "Charles Stangor",
        "Edition": "7th Edition",
        "Language": "English"
        }
    },

    // Toys ----------------------------------------------------------------------------------------------------------------------------
    {
        "title": "Fun Board Games for Ages 5-11",
        "subtitle": "Playtime Paradise Foundation",
        "description": "Fuel the laughter and learning with our collection of captivating board games tailored for ages 5 to 11! From strategic challenges to adventurous quests, these games promise endless fun while nurturing essential cognitive skills. Help us reach our goal of 20 games and bring joy to young minds eager for playful exploration!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Board games",
        "Age": "6-12",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "20 games",
        "progress": 30,
        "type": "Ticket to Ride"
    },
    {
        "title": "Soft Stuffed Toys for Toddlers",
        "subtitle": "Tender Hugs Charity",
        "description": "Wrap toddlers in the warmth of affection with our collection of soft stuffed toys! Designed for ages 1 to 5, these cuddly companions offer comfort, companionship, and endless moments of tender hugs. Contribute towards our goal of 30 toys and bring smiles to little faces, one cozy embrace at a time!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Stuffed toys",
        "Age": "1-5",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "30 toys",
        "progress": 50,
        "type": "Fisher-Price Plush Animals"
    },
    {
        "title": "Diverse Dolls for Inclusive Playtime",
        "subtitle": "Diversity Play Initiative",
        "description": "Embrace the beauty of diversity with our collection of inclusive dolls, tailored for ages 6 to 11! Representing various cultures, abilities, and backgrounds, these dolls inspire empathy, understanding, and joyful play. Contribute towards our goal of 25 dolls and nurture inclusive playtime where every child feels seen, valued, and celebrated!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Dolls",
        "Age": "6-12",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "25 dolls",
        "progress": 40,
        "type": "Barbie Fashionista dolls"
    },
    {
        "title": "Outdoor Sports Equipment for Teens",
        "subtitle": "Active Youth Foundation",
        "description": "Elevate outdoor recreation for teens with our premium sports equipment! Tailored for ages 12 to 18, these sets offer excitement and physical activity, from exhilarating team sports to solo challenges. Contribute towards our goal of 15 sets and empower teens to stay active, healthy, and engaged in outdoor adventures!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Sports",
        "Age": "13-18",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "15 sets",
        "progress": 60,
        "type": "Basketball hoop set"
    },
    {
        "title": "Toy Cars for Kids",
        "subtitle": "Speedy Wheels Charity",
        "description": "Ignite the thrill of the race with our collection of toy cars, perfect for kids aged 6 to 11! From sleek sports cars to rugged off-roaders, these miniature marvels promise endless adventures on imaginary roads. Join us in providing 20 cars and fuel the joy of speed and imagination in young hearts!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Cars",
        "Age": "6-12",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "20 cars",
        "progress": 70,
        "type": "Hot wheels"
    },
    {
        "title": "Outdoor Adventure Toys for Teens",
        "subtitle": "Adventure Seekers Foundation",
        "description": "Elevate outdoor escapades for teens with our thrilling adventure toys! Tailored for ages 12 to 18, these sets offer excitement and exploration, from adrenaline-pumping challenges to nature-inspired activities. Contribute towards our goal of 40 sets and empower teens to embark on unforgettable adventures, fostering courage, and camaraderie along the way!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Outdoor",
        "Age": "13-18",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "40 sets",
        "progress": 80,
        "type": "Portable slackline kit"
    },
    {
        "title": "Educational Board Games for Family Fun",
        "subtitle": "Family Bonding Foundation",
        "description": "Strengthen family ties and minds with our collection of educational board games, designed for ages 12 to 18! From strategic challenges to brain-teasing puzzles, these games offer enriching entertainment and foster meaningful connections. Contribute towards our goal of 25 games and create unforgettable moments of family bonding and fun!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Board games",
        "Age": "13-18",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "25 games",
        "progress": 45,
        "type": "Scrabble"
    },
    {
        "title": "Outdoor Exploration Kits for Young Adventurers",
        "subtitle": "Nature Explorers Foundation",
        "description": "Embark on thrilling journeys of discovery with our outdoor exploration kits, tailored for young adventurers aged 6 to 12! Packed with tools and resources, these kits ignite curiosity and foster a deep connection with nature. Help us provide 30 kits and empower the next generation of nature enthusiasts to explore, learn, and protect our planet!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Outdoor",
        "Age": "6-12",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "30 kits",
        "progress": 50,
        "type": "Nature discovery kit"
    },
    {
        "title": "Gardening Kits for Budding Gardeners",
        "subtitle": "Green Thumb Foundation",
        "description": "Nurture the green thumb in every child with our engaging gardening kits, tailored for budding gardeners aged 6 to 12! From planting seeds to watching them bloom, these kits inspire hands-on learning and a deep appreciation for nature. Contribute towards our goal of 30 kits and cultivate a love for gardening in young hearts!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Outdoor",
        "Age": "6-12",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "30 kits",
        "progress": 65,
        "type": "Gardening kit"
    },
    {
        "title": "Adventure Play Tents for Imaginative Explorers",
        "subtitle": "Exploration Zone Foundation",
        "description": "Unleash the spirit of adventure with our exciting play tents, perfect for imaginative explorers aged 6 to 12! Transform any outdoor space into a realm of endless possibilities, where young minds can embark on thrilling journeys and create unforgettable memories. Join us in providing 20 tents and nurturing the spirit of exploration in every child!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Outdoor",
        "Age": "6-12",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "20 tents",
        "progress": 75,
        "type": "Pop-up play tent"
    },
    {
        "title": "Snuggly Teddy Bears for Comfort and Joy",
        "subtitle": "Bear Hugs Charity",
        "description": "Wrap little ones in the warmth of affection and joy with our snuggly teddy bears! Designed for ages 1 to 5, these fuzzy companions offer endless comfort and companionship, soothing tender hearts with every embrace. Help us reach our goal of 30 bears and spread love through the magic of cuddly companions!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Stuffed toys",
        "Age": "1-5",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "30 bears",
        "progress": 50,
        "type": "Teddy bears"
    },
    {
        "title": "Adorable Plush Animals for Endless Cuddles",
        "subtitle": "Plush Pals Foundation",
        "description": "Embrace the warmth of compassion and comfort with our delightful collection of plush animals, designed for ages 1 to 5! Each cuddly friend offers endless snuggles and companionship, fostering a sense of security and joy in young hearts. Contribute towards our goal of 25 animals and spread love through the power of soft embraces!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Stuffed toys",
        "Age": "1-5",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "25 animals",
        "progress": 65,
        "type": "Beanie Babies"
    },
    {
        "title": "Fashionable Barbie Dolls for Creative Play",
        "subtitle": "Barbie Dreamworld Charity",
        "description": "Barbie Dreamworld Charity is collecting fashionable Barbie dolls for creative play. Inspire imagination, storytelling, and self-expression in children with your donations, providing them with stylish dolls to role-play and explore diverse worlds. Let's empower children to dream big and be anything they aspire to be!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Dolls",
        "Age": "6-12",
        "Gender": "Girls"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "20 dolls",
        "progress": 40,
        "type": "Barbie"
    },
    {
        "title": "Soccer Balls for Thrilling Matches",
        "subtitle": "Soccer Stars Foundation",
        "description": "Join the Soccer Stars Foundation in providing soccer balls for thrilling matches. Promote teamwork, physical fitness, and sportsmanship in children with your donations, allowing them to enjoy the excitement of soccer games and friendly competition. Let's kick off the fun and score goals together!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Sports",
        "Age": "6-12",
        "Gender": "Unisex"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "25 soccer balls",
        "progress": 75,
        "type": "Soccer balls"
    },
    {
        "title": "Speedy Remote-Controlled Cars for Exciting Races",
        "subtitle": "Racing Champions Foundation",
        "description": "Racing Champions Foundation is seeking speedy remote-controlled cars for exciting races. Fuel adrenaline, speed, and excitement in children with your donations, allowing them to experience the thrill of high-speed racing and epic competitions. Let's rev up the engines and race toward thrilling victories!",
        "tags": {
        "Category": "Toys",
        "Subcategory": "Cars",
        "Age": "6-12",
        "Gender": "Boys"
        },
        "imgURL": "https://example.com/toys.jpg",
        "required_amount": "20 cars",
        "progress": 60,
        "type": "Remote-controlled cars"
    },

    // Food ----------------------------------------------------------------------------------------------------------------------------
    {
        "title": "Fresh Vegetables for Nutritious Meals",
        "subtitle": "Healthy Harvest Charity",
        "description": "Healthy Harvest Charity is collecting fresh vegetables for nutritious meals. Provide essential vitamins, minerals, and nutrients to families in need with your donations, promoting healthy eating habits and well-being. Let's cultivate a community of health and vitality through the goodness of nature!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Fruits and vegetables"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "50 KG",
        "progress": 30,
        "type": "Leafy greens"
    },
    {
        "title": "Nourishing Canned Foods for Pantry Stocking",
        "subtitle": "Food Bank Relief",
        "description": "Join the Food Bank Relief in providing nourishing canned foods for pantry stocking. Ensure food security and support families facing hunger with your donations, providing them with essential canned goods for nutritious meals. Let's stock pantries with love, compassion, and sustenance!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Canned foods"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "100 units",
        "progress": 40,
        "type": "Beans"
    },
    {
        "title": "Wholesome Fresh Meals for Hungry Individuals",
        "subtitle": "Meal Assistance Initiative",
        "description": "Meal Assistance Initiative is seeking wholesome fresh meals for hungry individuals. Provide nourishment, comfort, and support to those facing food insecurity with your donations, ensuring they have access to nutritious and satisfying meals. Let's fill empty stomachs with warmth, care, and hope!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Fresh meals"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "200 servings",
        "progress": 50,
        "type": "Rice"
    },
    {
        "title": "Delicious Baked Goods for Sweet Moments",
        "subtitle": "Bake for Love Foundation",
        "description": "Bake for Love Foundation is collecting delicious baked goods for sweet moments. Spread joy, comfort, and happiness with your donations, providing freshly baked treats to brighten someone's day. Let's share the warmth and sweetness of homemade goodies!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Baked goods"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "50 units",
        "progress": 60,
        "type": "Croissants"
    },
    {
        "title": "Fresh Fruits and Vegetables for Healthy Snacking",
        "subtitle": "Nutrition Boost Charity",
        "description": "Nutrition Boost Charity is seeking fresh fruits for healthy snacking. Provide children and families with nutritious options for snacking, promoting healthy eating habits and wellness. Let's fuel bodies and minds with the goodness of nature!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Fruits and vegetables"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "40 KG",
        "progress": 25,
        "type": "Berries"
    },
    {
        "title": "Assorted Canned Foods for Emergency Relief",
        "subtitle": "Emergency Aid Foundation",
        "description": "Emergency Aid Foundation is collecting assorted canned foods for emergency relief. Ensure preparedness and support disaster-affected communities with your donations, providing essential canned goods for immediate nourishment. Let's stand together and extend a helping hand in times of crisis!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Canned foods"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "150 units",
        "progress": 35,
        "type": "Beans"
    },
    {
        "title": "Ready-to-Eat Fresh Meals for Homeless Shelters",
        "subtitle": "Shelter Support Initiative",
        "description": "Shelter Support Initiative is seeking ready-to-eat fresh meals for homeless shelters. Provide comfort, sustenance, and dignity to individuals experiencing homelessness with your donations, ensuring they have access to nutritious and convenient meals. Let's offer warmth, nourishment, and hope to those in need!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Fresh meals"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "250 servings",
        "progress": 45,
        "type": "Salad"
    },
    {
        "title": "Homemade Baked Goods for Community Events",
        "subtitle": "Community Gathering Project",
        "description": "Join the Community Gathering Project in providing homemade baked goods for community events. Foster connections, joy, and unity with your donations, sharing delicious treats to enhance the spirit of togetherness. Let's bake memories and create cherished moments together!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Baked goods"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "75 units",
        "progress": 55,
        "type": "Bread"
    },
    {
        "title": "Variety of Fresh Fruits for School Nutrition Programs",
        "subtitle": "School Health Initiative",
        "description": "School Health Initiative is seeking a variety of fresh fruits for school nutrition programs. Support children's health, learning, and development with your donations, providing them with nutritious fruits to fuel their day. Let's nourish young minds and bodies for a brighter future!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Fruits and vegetables"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "60 KG",
        "progress": 60,
        "type": "Citrus fruits"
    },
    {
        "title": "Essential Canned Foods for Food Banks",
        "subtitle": "Food Bank Network",
        "description": "Food Bank Network is collecting essential canned foods for food banks. Alleviate hunger, food insecurity, and poverty in communities with your donations, providing individuals and families with essential pantry staples. Let's fill empty plates and hearts with hope and nourishment!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Canned foods"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "200 units",
        "progress": 70,
        "type": "Beans"
    },
    {
        "title": "Freshly Prepared Meals for Elderly Care Centers",
        "subtitle": "Elderly Care Foundation",
        "description": "Elderly Care Foundation is seeking freshly prepared meals for elderly care centers. Ensure seniors receive nutritious, delicious, and comforting meals with your donations, promoting their health, well-being, and happiness. Let's show gratitude and care for our elderly loved ones!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Fresh meals"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "150 servings",
        "progress": 80,
        "type": "Grilled chicken salad"
    },
    {
        "title": "Wholesome Baked Goods for Community Outreach",
        "subtitle": "Community Care Project",
        "description": "Join the Community Care Project in providing wholesome baked goods for community outreach. Share warmth, kindness, and nourishment with your donations, spreading joy and comfort to individuals and families in need. Let's bake a difference and touch hearts with every bite!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Baked goods"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "100 units",
        "progress": 90,
        "type": "Cupcakes"
    },
    {
        "title": "Seasonal Fresh Produce for Community Gardens",
        "subtitle": "Community Green Initiative",
        "description": "Community Green Initiative is seeking seasonal fresh produce for community gardens. Support urban agriculture, sustainability, and food security with your donations, providing communities with access to locally grown, nutritious fruits and vegetables. Let's cultivate thriving green spaces and healthy communities!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Fruits and vegetables"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "70 KG",
        "progress": 75,
        "type": "Tomatoes"
    },
    {
        "title": "Nutritious Canned Foods for Disaster Relief Efforts",
        "subtitle": "Disaster Response Alliance",
        "description": "Disaster Response Alliance is collecting nutritious canned foods for disaster relief efforts. Provide essential sustenance and support to communities affected by natural disasters with your donations, ensuring they have access to nutritious and shelf-stable foods. Let's provide hope and nourishment in times of crisis!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Canned foods"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "120 units",
        "progress": 80,
        "type": "Beans"
    },
    {
        "title": "Wholesome Fresh Meals for Community Soup Kitchens",
        "subtitle": "Soup Kitchen Support",
        "description": "Soup Kitchen Support is seeking wholesome fresh meals for community soup kitchens. Provide warmth, nourishment, and compassion to individuals experiencing homelessness and food insecurity with your donations, ensuring they have access to nutritious and comforting meals. Let's serve hope and dignity, one meal at a time!",
        "tags": {
        "Category": "Food",
        "Subcategory": "Fresh meals"
        },
        "imgURL": "https://example.com/food.jpg",
        "required_amount": "300 servings",
        "progress": 85,
        "type": "Soup"
    },

    // Medical Supplies ----------------------------------------------------------------------------------------------------------------------------
    {
        "title": "Digital Blood Pressure Monitor",
        "subtitle": "Healthcare Solutions Inc.",
        "description": "Healthcare Solutions Inc. is seeking digital blood pressure monitors for patient care. These devices are essential for monitoring blood pressure levels accurately and efficiently. Let's ensure patients receive the vital medical attention they need!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "Blood pressure monitor",
        "Medical_Equipment": "",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "10 units",
        "use": "Monitoring blood pressure levels",
        "progress": 20
    },
    {
        "title": "Sterile Gauze Pads",
        "subtitle": "Emergency Relief Organization",
        "description": "Emergency Relief Organization urgently needs sterile gauze pads for wound care and dressing. These medical supplies are crucial for preventing infections and promoting healing in patients with injuries. Let's provide comfort and support to those in need!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "Gauze pads",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "500 units",
        "use": "Wound care and dressing",
        "progress": 30
    },
    {
        "title": "Ciprofloxacin Tablets",
        "subtitle": "Health Clinic Initiative",
        "description": "Health Clinic Initiative requires Ciprofloxacin tablets for treating bacterial infections in patients. These medications are essential for combating various bacterial illnesses and improving patient outcomes. Let's support the fight against infectious diseases!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "",
        "Medication": "Ciprofloxacin tablets"
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "200 tablets",
        "use": "Treatment of bacterial infections",
        "progress": 40
    },
    {
        "title": "Oxygen Concentrator",
        "subtitle": "Respiratory Care Foundation",
        "description": "Respiratory Care Foundation is in need of oxygen concentrators to support patients with respiratory conditions. These medical devices deliver oxygen therapy to individuals with compromised respiratory function, helping them breathe more easily. Let's ensure access to life-saving respiratory support!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "Oxygen concentrator",
        "Medical_Equipment": "",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "5 units",
        "use": "Oxygen therapy for respiratory patients",
        "progress": 50
    },
    {
        "title": "Disposable Syringes",
        "subtitle": "Healthcare Outreach Program",
        "description": "Healthcare Outreach Program is requesting disposable syringes for administering medications and vaccines to patients. These medical supplies are essential for ensuring accurate dosing and preventing the spread of infections. Let's support safe and effective healthcare delivery!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "Disposable syringes",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "1000 units",
        "use": "Administering medications and vaccines",
        "progress": 60
    },
    {
        "title": "Ultrasound Machine",
        "subtitle": "Maternity Health Clinic",
        "description": "Maternity Health Clinic urgently requires two ultrasound machines for prenatal care and diagnostics. This medical device is essential for monitoring fetal development and detecting any potential complications during pregnancy. Let's ensure the health and well-being of expectant mothers and their babies!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "Ultrasound machine",
        "Medical_Equipment": "",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "2 units",
        "use": "Prenatal care and diagnostics",
        "progress": 50
    },
    {
        "title": "Bandages and Dressings",
        "subtitle": "Emergency Care Initiative",
        "description": "Emergency Care Initiative is seeking bandages and dressings for wound care and first aid. These medical supplies are essential for treating injuries and providing immediate relief to patients in emergency situations. Let's provide comfort and support to those in urgent need!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "Bandages, dressings",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "300 units",
        "use": "Wound care and first aid",
        "progress": 80
    },
    {
        "title": "Acetaminophen Tablets",
        "subtitle": "Community Health Center",
        "description": "Community Health Center requires acetaminophen tablets for pain relief and fever reduction in patients. These medications are essential for alleviating various types of pain and reducing fever symptoms. Let's provide comfort and relief to individuals experiencing pain and discomfort!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "",
        "Medication": "Acetaminophen tablets"
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "500 tablets",
        "use": "Pain relief and fever reduction",
        "progress": 85
    },
    {
        "title": "Wheelchairs",
        "subtitle": "Mobility Assistance Program",
        "description": "Mobility Assistance Program is in need of wheelchairs to provide mobility support to individuals with disabilities. These medical devices enable freedom of movement and independence for individuals with limited mobility. Let's empower individuals to navigate the world with dignity and ease!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "Wheelchairs",
        "Medical_Equipment": "",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "10 units",
        "use": "Mobility support for individuals with disabilities",
        "progress": 90
    },
    {
        "title": "Insulin Syringes",
        "subtitle": "Diabetes Care Foundation",
        "description": "Diabetes Care Foundation urgently requires insulin syringes for insulin administration in diabetic patients. These medical supplies are vital for individuals with diabetes to manage their blood sugar levels effectively. Let's support diabetes care and improve the quality of life for those living with the condition!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "Insulin syringes",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "200 units",
        "use": "Insulin administration",
        "progress": 95
    },
    {
        "title": "Sterile Gauze Pads",
        "subtitle": "Emergency Relief Organization",
        "description": "Emergency Relief Organization urgently needs sterile gauze pads for wound care and dressing. These medical supplies are crucial for preventing infections and promoting healing in patients with injuries. Let's provide comfort and support to those in need!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "Gauze pads",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "500 units",
        "use": "Wound care and dressing",
        "progress": 30
    },
    {
        "title": "Acetaminophen Tablets",
        "subtitle": "Community Health Center",
        "description": "Community Health Center requires acetaminophen tablets for pain relief and fever reduction in patients. These medications are essential for alleviating various types of pain and reducing fever symptoms. Let's provide comfort and relief to individuals experiencing pain and discomfort!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "",
        "Medication": "Acetaminophen tablets"
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "500 tablets",
        "use": "Pain relief and fever reduction",
        "progress": 40
    },
    {
        "title": "Disposable Syringes",
        "subtitle": "Healthcare Outreach Program",
        "description": "Healthcare Outreach Program is requesting disposable syringes for administering medications and vaccines to patients. These medical supplies are essential for ensuring accurate dosing and preventing the spread of infections. Let's support safe and effective healthcare delivery!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "Disposable syringes",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "1000 units",
        "use": "Administering medications and vaccines",
        "progress": 50
    },
    {
        "title": "Wheelchairs",
        "subtitle": "Mobility Assistance Program",
        "description": "Mobility Assistance Program is in need of wheelchairs to provide mobility support to individuals with disabilities. These medical devices enable freedom of movement and independence for individuals with limited mobility. Let's empower individuals to navigate the world with dignity and ease!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "Wheelchairs",
        "Medical_Equipment": "",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "10 units",
        "use": "Mobility support for individuals with disabilities",
        "progress": 60
    },
    {
        "title": "Insulin Syringes",
        "subtitle": "Diabetes Care Foundation",
        "description": "Diabetes Care Foundation urgently requires insulin syringes for insulin administration in diabetic patients. These medical supplies are vital for individuals with diabetes to manage their blood sugar levels effectively. Let's support diabetes care and improve the quality of life for those living with the condition!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "Insulin syringes",
        "Medication": ""
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "200 units",
        "use": "Insulin administration",
        "progress": 70
    },
    {
        "title": "Ibuprofen Tablets",
        "subtitle": "Community Health Clinic",
        "description": "Community Health Clinic urgently requires ibuprofen tablets for pain relief and inflammation reduction in patients. These medications are essential for alleviating various types of pain, including headaches, toothaches, and muscle aches. Let's provide comfort and relief to individuals in need!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "",
        "Medication": "Ibuprofen tablets"
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "500 tablets",
        "use": "Pain relief and inflammation reduction",
        "progress": 30
    },
    {
        "title": "Cough Syrup",
        "subtitle": "Healthcare Outreach Program",
        "description": "Healthcare Outreach Program is requesting cough syrup for alleviating cough symptoms in patients. This medication is essential for providing relief from dry, irritating coughs and promoting restful sleep. Let's support respiratory health and comfort for individuals experiencing cough symptoms!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "",
        "Medication": "Cough syrup"
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "50 bottles",
        "use": "Alleviating cough symptoms",
        "progress": 40
    },
    {
        "title": "Antihistamine Tablets",
        "subtitle": "Allergy Relief Foundation",
        "description": "Allergy Relief Foundation urgently requires antihistamine tablets for treating allergy symptoms in patients. These medications are essential for relieving sneezing, itching, watery eyes, and other allergy symptoms. Let's provide relief and comfort to individuals affected by allergies!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "",
        "Medication": "Antihistamine tablets"
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "200 tablets",
        "use": "Treating allergy symptoms",
        "progress": 50
    },
    {
        "title": "Antacid Tablets",
        "subtitle": "Digestive Health Center",
        "description": "Digestive Health Center requires antacid tablets for relieving heartburn and indigestion in patients. These medications are essential for neutralizing stomach acid and providing relief from discomfort caused by digestive issues. Let's support digestive health and well-being for individuals experiencing GI discomfort!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "",
        "Medication": "Antacid tablets"
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "100 tablets",
        "use": "Relieving heartburn and indigestion",
        "progress": 60
    },
    {
        "title": "Aspirin Tablets",
        "subtitle": "Cardiovascular Care Foundation",
        "description": "Cardiovascular Care Foundation urgently requires aspirin tablets for preventing blood clots and reducing the risk of heart attacks and strokes in patients. These medications are essential for cardiovascular health and reducing the incidence of cardiovascular events. Let's support heart health and save lives!",
        "tags": {
        "Category": "Medical Supplies",
        "Medical_Device": "",
        "Medical_Equipment": "",
        "Medication": "Aspirin tablets"
        },
        "imgURL": "https://example.com/medical-supplies.jpg",
        "required_amount": "300 tablets",
        "use": "Preventing blood clots and reducing cardiovascular risk",
        "progress": 70
    },

    // Blood drives ----------------------------------------------------------------------------------------------------------------------------
    {
        "title": "Urgent Blood Donation Needed",
        "subtitle": "General Hospital",
        "description": "General Hospital urgently requires blood donations to support patients in critical condition. Your donation can save lives and make a significant difference for individuals in need of blood transfusions. Let's come together to help those in our community!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "General Hospital",
        "Governorate": "Cairo",
        "Area": "Nasr City"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "10 units",
        "hospital_address": "123 Main Street, Nasr City, Cairo",
        "patient_name": "Ahmed Ali",
        "blood_type": "O+",
        "progress": 80
    },
    {
        "title": "Emergency Blood Drive",
        "subtitle": "City Hospital",
        "description": "City Hospital is hosting an emergency blood drive to address a shortage of blood supplies. Your generous donation can help replenish our blood bank and ensure that patients receive the life-saving transfusions they urgently need. Join us in making a difference!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "City Hospital",
        "Governorate": "Alexandria",
        "Area": "Al Azarita"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "15 units",
        "hospital_address": "456 Elm Street, Al Azarita, Alexandria",
        "patient_name": "Fatma Hassan",
        "blood_type": "A+",
        "progress": 20
    },
    {
        "title": "Community Blood Donation Event",
        "subtitle": "Central Blood Bank",
        "description": "Central Blood Bank is organizing a community blood donation event to support patients in need of transfusions. Your blood donation can help save lives and provide hope to individuals facing medical emergencies. Join us in giving the gift of life!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "Central Blood Bank",
        "Governorate": "Giza",
        "Area": "Dokki"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "20 units",
        "hospital_address": "789 Oak Avenue, Dokki, Giza",
        "patient_name": "Mariam Ahmed",
        "blood_type": "B-",
        "progress": 25
    },
    {
        "title": "Blood Donors Needed",
        "subtitle": "Regional Medical Center",
        "description": "Regional Medical Center urgently needs blood donors to meet the demand for blood transfusions. Your donation can provide hope and healing to patients undergoing surgery, cancer treatment, and other medical procedures. Let's unite to save lives!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "Regional Medical Center",
        "Governorate": "Qalyubia",
        "Area": "Banha"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "12 units",
        "hospital_address": "101 Pine Avenue, Banha, Qalyubia",
        "patient_name": "Hassan Mahmoud",
        "blood_type": "AB-",
        "progress": 90
    },
    {
        "title": "Blood Drive for Pediatric Patients",
        "subtitle": "Children's Hospital",
        "description": "Children's Hospital is organizing a blood drive to support pediatric patients in need of transfusions. Your donation can provide hope and healing to children battling serious illnesses and medical conditions. Join us in making a difference in the lives of young patients!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "Children's Hospital",
        "Governorate": "Sharqia",
        "Area": "Zagazig"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "8 units",
        "hospital_address": "202 Maple Street, Zagazig, Sharqia",
        "patient_name": "Sara Ahmed",
        "blood_type": "A-",
        "progress": 80
    },
    {
        "title": "Emergency Blood Appeal",
        "subtitle": "City Medical Center",
        "description": "City Medical Center issues an urgent appeal for blood donations to save lives. Your generous contribution can make a significant difference in providing vital transfusions to patients in critical condition. Join us in this lifesaving effort!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "City Medical Center",
        "Governorate": "Luxor",
        "Area": "Luxor City"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "15 units",
        "hospital_address": "321 Cedar Street, Luxor City, Luxor",
        "patient_name": "Amira Mohamed",
        "blood_type": "B+",
        "progress": 5
    },
    {
        "title": "Community Blood Drive",
        "subtitle": "Regional Blood Bank",
        "description": "Regional Blood Bank hosts a community blood drive to address a critical shortage of blood supplies. Your donation can provide hope and healing to patients in need of transfusions. Join us in saving lives and making a positive impact!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "Regional Blood Bank",
        "Governorate": "Assiut",
        "Area": "Assiut City"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "20 units",
        "hospital_address": "456 Maple Avenue, Assiut City, Assiut",
        "patient_name": "Khaled Hassan",
        "blood_type": "O-",
        "progress": 85
    },
    {
        "title": "Blood Donor Recruitment Drive",
        "subtitle": "National Blood Center",
        "description": "National Blood Center launches a recruitment drive to encourage blood donors to come forward and save lives. Your donation can ensure a steady supply of blood for patients undergoing medical treatment and surgery. Join us in this lifesaving mission!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "National Blood Center",
        "Governorate": "Suez",
        "Area": "Suez City"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "30 units",
        "hospital_address": "789 Elm Street, Suez City, Suez",
        "patient_name": "Fatma Ali",
        "blood_type": "A-",
        "progress": 60
    },
    {
        "title": "Blood Donation Campaign",
        "subtitle": "Community Health Clinic",
        "description": "Community Health Clinic launches a blood donation campaign to replenish its blood bank and support patients in need of transfusions. Your donation can make a lifesaving difference and provide hope to individuals battling illness and injury. Join us in giving the gift of life!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "Community Health Clinic",
        "Governorate": "Aswan",
        "Area": "Aswan City"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "25 units",
        "hospital_address": "101 Oak Street, Aswan City, Aswan",
        "patient_name": "Mohamed Ali",
        "blood_type": "AB+",
        "progress": 80
    },
    {
        "title": "Blood Drive for Cancer Patients",
        "subtitle": "Oncology Center",
        "description": "Oncology Center organizes a blood drive to support cancer patients undergoing treatment. Your donation can provide vital transfusions and support to individuals fighting cancer. Join us in this compassionate effort to make a difference in the lives of cancer patients!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "Oncology Center",
        "Governorate": "Port Said",
        "Area": "Port Said City"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "10 units",
        "hospital_address": "202 Cedar Avenue, Port Said City, Port Said",
        "patient_name": "Nadia Mahmoud",
        "blood_type": "O-",
        "progress": 65
    },
    {
        "title": "Urgent Blood Drive",
        "subtitle": "Community Medical Center",
        "description": "Community Medical Center is organizing an urgent blood drive to address a critical shortage of blood supplies. Your donation can save lives and provide hope to patients in need of transfusions. Join us in this lifesaving effort!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "Community Medical Center",
        "Governorate": "Beni Suef",
        "Area": "Beni Suef City"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "20 units",
        "hospital_address": "123 Pine Street, Beni Suef City, Beni Suef",
        "patient_name": "Fatma Hassan",
        "blood_type": "A+",
        "progress": 90
    },
    {
        "title": "Blood Donation Rally",
        "subtitle": "Regional Hospital",
        "description": "Regional Hospital is hosting a blood donation rally to rally the community in support of patients in need of blood transfusions. Your donation can make a significant impact and save lives. Join us in this compassionate endeavor!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "Regional Hospital",
        "Governorate": "Red Sea",
        "Area": "Hurghada"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "25 units",
        "hospital_address": "456 Elm Street, Hurghada, Red Sea",
        "patient_name": "Ahmed Mahmoud",
        "blood_type": "B-",
        "progress": 40
    },
    {
        "title": "Emergency Blood Appeal",
        "subtitle": "District Medical Center",
        "description": "District Medical Center issues an emergency blood appeal to meet the urgent need for blood transfusions. Your generous donation can help save lives and provide hope to patients facing medical emergencies. Join us in this critical effort!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "District Medical Center",
        "Governorate": "Faiyum",
        "Area": "Faiyum City"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "15 units",
        "hospital_address": "789 Oak Avenue, Faiyum City, Faiyum",
        "patient_name": "Nour Hassan",
        "blood_type": "O-",
        "progress": 20
    },
    {
        "title": "Blood Donor Recruitment Campaign",
        "subtitle": "National Blood Bank",
        "description": "National Blood Bank launches a recruitment campaign to encourage blood donors to come forward and save lives. Your donation can ensure a steady supply of blood for patients in need of transfusions. Join us in this lifesaving mission!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "National Blood Bank",
        "Governorate": "Matrouh",
        "Area": "Marsa Matrouh"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "30 units",
        "hospital_address": "101 Cedar Street, Marsa Matrouh, Matrouh",
        "patient_name": "Youssef Ali",
        "blood_type": "AB+",
        "progress": 25
    },
    {
        "title": "Community Blood Donation Event",
        "subtitle": "Healthcare Center",
        "description": "Healthcare Center is organizing a community blood donation event to support patients in need of blood transfusions. Your donation can make a lifesaving difference and provide hope to individuals facing medical emergencies. Join us in giving the gift of life!",
        "tags": {
        "Category": "Blood Donations",
        "Hospital": "Healthcare Center",
        "Governorate": "Minya",
        "Area": "Minya City"
        },
        "imgURL": "https://example.com/blood-drive.jpg",
        "required_amount": "35 units",
        "hospital_address": "202 Pine Avenue, Minya City, Minya",
        "patient_name": "Mariam Ahmed",
        "blood_type": "A-",
        "progress": 75
    }      
];

export default donationsData;