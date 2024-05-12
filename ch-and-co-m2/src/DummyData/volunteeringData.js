const volunteeringData = [
    {
        "title": "Math Tutor Needed for High School Students",
        "description": "Looking for an experienced math tutor to assist high school students with algebra and calculus. Must be patient and have excellent communication skills.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Mathematics",
        "Area": "Nasr City",
        "Governorate": "Cairo"
        },
        "num_students": 12,
        "address": "123 ABC Street, Nasr City, Cairo"
    },
    {
        "title": "English Literature Teacher Required",
        "description": "Seeking an English literature teacher to conduct advanced literature classes for college students. Candidate should have a strong background in literary analysis and interpretation.",
        "tags": {
        "Category": "Teacher",
        "Subject": "English Literature",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 8,
        "address": "456 XYZ Street, Zamalek, Cairo"
    },
    {
        "title": "Biology Teacher Wanted",
        "description": "Looking for a biology teacher to teach high school students about cellular biology, genetics, and ecology. Prior teaching experience preferred.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Biology",
        "Area": "Heliopolis",
        "Governorate": "Cairo"
        },
        "num_students": 15,
        "address": "789 PQR Street, Heliopolis, Cairo"
    },
    {
        "title": "Physics Instructor Needed",
        "description": "Urgently seeking a physics instructor to teach university-level physics courses. Must be familiar with classical mechanics, electromagnetism, and thermodynamics.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Physics",
        "Area": "Maadi",
        "Governorate": "Cairo"
        },
        "num_students": 10,
        "address": "1011 LMN Street, Maadi, Cairo"
    },
    {
        "title": "Arabic Language Teacher Required",
        "description": "Looking for a qualified Arabic language teacher to teach non-native speakers. Must have experience teaching grammar, syntax, and literature.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Arabic Language",
        "Area": "Dokki",
        "Governorate": "Cairo"
        },
        "num_students": 6,
        "address": "1213 RST Street, Dokki, Cairo"
    },
    {
        "title": "History Teacher Needed",
        "description": "Seeking a history teacher to deliver engaging history lessons to secondary school students. Familiarity with Egyptian history is a plus.",
        "tags": {
        "Category": "Teacher",
        "Subject": "History",
        "Area": "Mohandessin",
        "Governorate": "Giza"
        },
        "num_students": 18,
        "address": "1415 UVW Street, Mohandessin, Giza"
    },
    {
        "title": "Chemistry Tutor Wanted",
        "description": "Looking for a chemistry tutor to assist students with understanding chemical reactions, stoichiometry, and atomic structure.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Chemistry",
        "Area": "Shubra",
        "Governorate": "Cairo"
        },
        "num_students": 7,
        "address": "1617 XYZ Street, Shubra, Cairo"
    },
    {
        "title": "French Language Teacher Required",
        "description": "Seeking a French language teacher to conduct language classes for beginners. Must be fluent in French and have experience teaching language skills.",
        "tags": {
        "Category": "Teacher",
        "Subject": "French Language",
        "Area": "Maadi",
        "Governorate": "Cairo"
        },
        "num_students": 14,
        "address": "1819 ABC Street, Maadi, Cairo"
    },
    {
        "title": "Computer Science Instructor Needed",
        "description": "Urgently hiring a computer science instructor to teach programming and computer concepts. Must be proficient in languages such as Python and Java.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Computer Science",
        "Area": "New Cairo",
        "Governorate": "Cairo"
        },
        "num_students": 11,
        "address": "2021 PQR Street, New Cairo, Cairo"
    },
    {
        "title": "Geography Teacher Wanted",
        "description": "Looking for a geography teacher to teach physical and human geography. Experience with GIS and mapping software is a plus.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Geography",
        "Area": "Helwan",
        "Governorate": "Cairo"
        },
        "num_students": 16,
        "address": "2223 LMN Street, Helwan, Cairo"
    },
    {
        "title": "Art Teacher Needed",
        "description": "Seeking an art teacher to teach drawing, painting, and sculpture techniques to students of all ages. Must have a strong portfolio and teaching experience.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Art",
        "Area": "Mohandessin",
        "Governorate": "Giza"
        },
        "num_students": 9,
        "address": "2425 RST Street, Mohandessin, Giza"
    },
    {
        "title": "Music Instructor Required",
        "description": "Looking for a music instructor to teach piano and music theory. Must be proficient in music notation and have experience teaching individual and group lessons.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Music",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 5,
        "address": "2627 UVW Street, Zamalek, Cairo"
    },
    {
        "title": "Physical Education Teacher Wanted",
        "description": "Seeking a physical education teacher to develop and implement a comprehensive physical education curriculum. Must be certified and have experience teaching sports and fitness.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Physical Education",
        "Area": "Maadi",
        "Governorate": "Cairo"
        },
        "num_students": 13,
        "address": "2829 JKL Street, Maadi, Cairo"
    },
    {
        "title": "Special Education Teacher Needed",
        "description": "Urgently hiring a special education teacher to work with students with diverse learning needs. Must be patient, compassionate, and skilled in individualized instruction.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Special Education",
        "Area": "Nasr City",
        "Governorate": "Cairo"
        },
        "num_students": 19,
        "address": "3031 EFG Street, Nasr City, Cairo"
    },
    {
        "title": "Psychology Teacher Wanted",
        "description": "Looking for a psychology teacher to teach high school students about human behavior, cognition, and mental health. Experience with counseling is a plus.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Psychology",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 20,
        "address": "3233 MNO Street, Zamalek, Cairo"
    },
    {
        "title": "Business Studies Teacher Required",
        "description": "Seeking a business studies teacher to teach economics, entrepreneurship, and business management. Must have experience teaching business concepts and practical skills.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Business Studies",
        "Area": "Heliopolis",
        "Governorate": "Cairo"
        },
        "num_students": 17,
        "address": "3435 GHI Street, Heliopolis, Cairo"
    },
    {
        "title": "Religious Studies Teacher Needed",
        "description": "Urgently hiring a religious studies teacher to teach Islamic studies. Must have a deep understanding of Islamic theology, history, and jurisprudence.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Religious Studies",
        "Area": "Nasr City",
        "Governorate": "Cairo"
        },
        "num_students": 4,
        "address": "3637 STU Street, Nasr City, Cairo"
    },
    {
        "title": "Health Education Instructor Wanted",
        "description": "Looking for a health education instructor to teach students about nutrition, fitness, and disease prevention. Must be knowledgeable about public health principles.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Health Education",
        "Area": "Maadi",
        "Governorate": "Cairo"
        },
        "num_students": 14,
        "address": "3839 WXY Street, Maadi, Cairo"
    },
    {
        "title": "Environmental Science Teacher Required",
        "description": "Seeking an environmental science teacher to teach ecology, conservation, and sustainability. Experience with fieldwork and outdoor education is desirable.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Environmental Science",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 10,
        "address": "4041 NOP Street, Zamalek, Cairo"
    },
    {
        "title": "Drama Teacher Needed",
        "description": "Urgently hiring a drama teacher to teach acting, improvisation, and theatrical techniques. Must have experience directing student performances.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Drama",
        "Area": "Mohandessin",
        "Governorate": "Giza"
        },
        "num_students": 15,
        "address": "4243 HIJ Street, Mohandessin, Giza"
    },
    {
        "title": "Social Studies Teacher Wanted",
        "description": "Looking for a social studies teacher to teach anthropology, sociology, and political science. Must have a passion for social justice and global issues.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Social Studies",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 7,
        "address": "4445 EFG Street, Zamalek, Cairo"
    },
    {
        "title": "Home Economics Teacher Required",
        "description": "Seeking a home economics teacher to teach cooking, nutrition, and household management. Must be skilled in meal planning and food safety.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Home Economics",
        "Area": "Maadi",
        "Governorate": "Cairo"
        },
        "num_students": 12,
        "address": "4647 KLM Street, Maadi, Cairo"
    },
    {
        "title": "IT Instructor Needed",
        "description": "Urgently hiring an IT instructor to teach computer skills and digital literacy. Must be proficient in Microsoft Office and internet applications.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Information Technology",
        "Area": "Nasr City",
        "Governorate": "Cairo"
        },
        "num_students": 9,
        "address": "4849 RST Street, Nasr City, Cairo"
    },
    {
        "title": "Language Arts Teacher Wanted",
        "description": "Looking for a language arts teacher to teach reading, writing, and communication skills. Must have experience with language acquisition and literacy development.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Language Arts",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 6,
        "address": "5051 UVW Street, Zamalek, Cairo"
    },
    {
        "title": "Sociology Teacher Required",
        "description": "Seeking a sociology teacher to teach sociological theories, research methods, and social issues. Must have experience with experiential learning and group projects.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Sociology",
        "Area": "Heliopolis",
        "Governorate": "Cairo"
        },
        "num_students": 11,
        "address": "5253 JKL Street, Heliopolis, Cairo"
    },
    {
        "title": "Agriculture Teacher Needed",
        "description": "Urgently hiring an agriculture teacher to teach crop production, animal husbandry, and agricultural economics. Must have experience with farm management.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Agriculture",
        "Area": "Maadi",
        "Governorate": "Cairo"
        },
        "num_students": 8,
        "address": "5455 MNO Street, Maadi, Cairo"
    },
    {
        "title": "Physical Science Instructor Wanted",
        "description": "Looking for a physical science instructor to teach chemistry and physics concepts. Must be proficient in laboratory techniques and safety procedures.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Physical Science",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 16,
        "address": "5657 PQR Street, Zamalek, Cairo"
    },
    {
        "title": "Economics Teacher Required",
        "description": "Seeking an economics teacher to teach microeconomics, macroeconomics, and economic policy. Must have a strong understanding of economic principles.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Economics",
        "Area": "Heliopolis",
        "Governorate": "Cairo"
        },
        "num_students": 5,
        "address": "5859 STU Street, Heliopolis, Cairo"
    },
    {
        "title": "Philosophy Teacher Needed",
        "description": "Urgently hiring a philosophy teacher to teach philosophical theories, ethics, and critical thinking. Must have experience with philosophical discourse.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Philosophy",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 20,
        "address": "6061 VWX Street, Zamalek, Cairo"
    },
    {
        "title": "Engineering Instructor Wanted",
        "description": "Looking for an engineering instructor to teach engineering fundamentals and design principles. Must be proficient in mathematics and physics.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Engineering",
        "Area": "Maadi",
        "Governorate": "Cairo"
        },
        "num_students": 13,
        "address": "6263 GHI Street, Maadi, Cairo"
    },
    {
        "title": "Government Teacher Required",
        "description": "Seeking a government teacher to teach civics, political ideologies, and government structures. Must have a passion for democracy and citizenship education.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Government",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 19,
        "address": "6465 NOP Street, Zamalek, Cairo"
    },
    {
        "title": "Health Sciences Teacher Needed",
        "description": "Urgently hiring a health sciences teacher to teach anatomy, physiology, and medical terminology. Must have experience with health education and patient care.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Health Sciences",
        "Area": "Mohandessin",
        "Governorate": "Giza"
        },
        "num_students": 8,
        "address": "6667 JKL Street, Mohandessin, Giza"
    },
    {
        "title": "Literacy Instructor Wanted",
        "description": "Looking for a literacy instructor to teach reading and writing skills to adults. Must have experience with literacy assessments and remediation strategies.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Literacy",
        "Area": "Nasr City",
        "Governorate": "Cairo"
        },
        "num_students": 11,
        "address": "6869 EFG Street, Nasr City, Cairo"
    },
    {
        "title": "Media Studies Teacher Required",
        "description": "Seeking a media studies teacher to teach mass communication, media theory, and digital media production. Must have experience with media literacy and analysis.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Media Studies",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 12,
        "address": "7071 KLM Street, Zamalek, Cairo"
    },
    {
        "title": "Nutrition Education Instructor Needed",
        "description": "Urgently hiring a nutrition education instructor to teach healthy eating habits and nutrition science. Must have a background in dietetics or nutrition science.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Nutrition Education",
        "Area": "Maadi",
        "Governorate": "Cairo"
        },
        "num_students": 9,
        "address": "7273 OPQ Street, Maadi, Cairo"
    },
    {
        "title": "Technology Education Teacher Wanted",
        "description": "Looking for a technology education teacher to teach computer applications, digital citizenship, and technology integration. Must have experience with educational technology.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Technology Education",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 15,
        "address": "7475 RST Street, Zamalek, Cairo"
    },
    {
        "title": "Vocational Training Instructor Required",
        "description": "Seeking a vocational training instructor to teach job skills and vocational competencies. Must have experience with vocational assessments and career development.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Vocational Training",
        "Area": "Nasr City",
        "Governorate": "Cairo"
        },
        "num_students": 7,
        "address": "7677 UVW Street, Nasr City, Cairo"
    },
    {
        "title": "Youth Development Teacher Needed",
        "description": "Urgently hiring a youth development teacher to provide mentoring and life skills education to adolescents. Must have experience with youth empowerment programs.",
        "tags": {
        "Category": "Teacher",
        "Subject": "Youth Development",
        "Area": "Zamalek",
        "Governorate": "Cairo"
        },
        "num_students": 6,
        "address": "7879 HIJ Street, Zamalek, Cairo"
    },
];

export default volunteeringData;