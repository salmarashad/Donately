const volunteeringOld = [
    {
      "title": "Math Tutor Needed for High School Students",
      "description": "Looking for an experienced math tutor to assist high school students with algebra and calculus. Must be patient and have excellent communication skills.",
      "tags": {
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
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
        "Type": "Teacher",
        "Subject": "Youth Development",
        "Area": "Zamalek",
        "Governorate": "Cairo"
      },
      "num_students": 6,
      "address": "7879 HIJ Street, Zamalek, Cairo"
    },
    {
        "title": "Medical Doctor - Cardiologist Needed",
        "description": "We are looking for a skilled cardiologist to join our medical team. The ideal candidate should have expertise in diagnosing and treating heart conditions.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Cardiology",
            "Organization": "Egyptian Heart Institute",
            "Area": "Dokki",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "John Smith",
            "age": 55,
            "gender": "Male",
            "weight": 75,
            "address": "123 Main Street, Dokki, Cairo",
            "case_description": "Experiencing chest pain and shortness of breath"
        },
        "hospital_address": "456 Nile Avenue, Dokki, Cairo"
    },
    {
        "title": "Pediatrician Required",
        "description": "Seeking a compassionate pediatrician to provide healthcare services to infants, children, and adolescents. Must be skilled in pediatric diagnosis, treatment, and care.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Pediatrics",
            "Organization": "Nile Hospital",
            "Area": "Maadi",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Emily Johnson",
            "age": 8,
            "gender": "Female",
            "weight": 25,
            "address": "789 Elm Street, Maadi, Cairo",
            "case_description": "Fever and cough for the past three days"
        },
        "hospital_address": "101 Nile Road, Maadi, Cairo"
    },
    {
        "title": "General Surgeon Needed",
        "description": "Urgently hiring a general surgeon to perform surgical procedures and provide pre- and post-operative care. Must have excellent surgical skills and clinical judgment.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "General Surgery",
            "Organization": "Al Salam International Hospital",
            "Area": "Nasr City",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "David Brown",
            "age": 40,
            "gender": "Male",
            "weight": 85,
            "address": "456 Oak Street, Nasr City, Cairo",
            "case_description": "Appendicitis requiring emergency surgery"
        },
        "hospital_address": "789 Salam Street, Nasr City, Cairo"
    },
    {
        "title": "Family Medicine Physician Wanted",
        "description": "Looking for a family medicine physician to provide comprehensive primary care services to individuals and families. Must be skilled in preventive medicine and chronic disease management.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Family Medicine",
            "Organization": "Cairo Family Clinic",
            "Area": "Zamalek",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Sarah Miller",
            "age": 35,
            "gender": "Female",
            "weight": 60,
            "address": "101 Pine Street, Zamalek, Cairo",
            "case_description": "Routine check-up and management of hypertension"
        },
        "hospital_address": "123 Elm Road, Zamalek, Cairo"
    },
    {
        "title": "Obstetrician-Gynecologist Required",
        "description": "Seeking an obstetrician-gynecologist to provide women's healthcare services including prenatal care, labor and delivery, and gynecological procedures.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Obstetrics and Gynecology",
            "Organization": "Nasr City Women's Hospital",
            "Area": "Nasr City",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Anna Wilson",
            "age": 28,
            "gender": "Female",
            "weight": 65,
            "address": "789 Maple Avenue, Nasr City, Cairo",
            "case_description": "Prenatal visit for second trimester ultrasound"
        },
        "hospital_address": "456 Cedar Street, Nasr City, Cairo"
    },
    {
        "title": "Orthopedic Surgeon Needed",
        "description": "Urgently hiring an orthopedic surgeon to diagnose and treat musculoskeletal injuries and conditions. Must have expertise in surgical and non-surgical orthopedic interventions.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Orthopedic Surgery",
            "Organization": "Cairo Orthopedic Center",
            "Area": "Mohandessin",
            "Governorate": "Giza"
        },
        "patient_details": {
            "name": "Michael Clark",
            "age": 45,
            "gender": "Male",
            "weight": 80,
            "address": "101 Walnut Street, Mohandessin, Giza",
            "case_description": "Fractured ankle requiring surgical repair"
        },
        "hospital_address": "789 Oak Lane, Mohandessin, Giza"
    },
    {
        "title": "Ophthalmologist Wanted",
        "description": "Looking for an ophthalmologist to diagnose and treat eye diseases and perform eye surgeries. Must have experience with comprehensive eye exams and specialized testing.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Ophthalmology",
            "Organization": "Egyptian Eye Institute",
            "Area": "Heliopolis",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Jennifer White",
            "age": 50,
            "gender": "Female",
            "weight": 70,
            "address": "123 Chestnut Avenue, Heliopolis, Cairo",
            "case_description": "Cataract evaluation and surgery"
        },
        "hospital_address": "456 Pine Street, Heliopolis, Cairo"
    },
    {
        "title": "Dermatologist Required",
        "description": "Seeking a dermatologist to diagnose and treat skin, hair, and nail disorders. Must have expertise in dermatological procedures and cosmetic dermatology.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Dermatology",
            "Organization": "Cairo Skin Clinic",
            "Area": "Zamalek",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Mark Taylor",
            "age": 30,
            "gender": "Male",
            "weight": 75,
            "address": "789 Maple Avenue, Zamalek, Cairo",
            "case_description": "Acne treatment and skincare consultation"
        },
        "hospital_address": "101 Cedar Lane, Zamalek, Cairo"
    },
    {
        "title": "Neurologist Needed",
        "description": "Urgently hiring a neurologist to diagnose and treat disorders of the nervous system. Must have expertise in neurological examination, imaging, and diagnostic tests.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Neurology",
            "Organization": "Nile Neurological Center",
            "Area": "Maadi",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Daniel Green",
            "age": 60,
            "gender": "Male",
            "weight": 70,
            "address": "456 Oak Street, Maadi, Cairo",
            "case_description": "Evaluation for suspected neuropathy"
        },
        "hospital_address": "789 Pine Road, Maadi, Cairo"
    },
    {
        "title": "Psychiatrist Wanted",
        "description": "Looking for a psychiatrist to diagnose and treat mental illnesses and emotional disorders. Must have expertise in psychotherapy and psychopharmacology.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Psychiatry",
            "Organization": "Cairo Psychiatry Clinic",
            "Area": "Nasr City",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Emma Davis",
            "age": 25,
            "gender": "Female",
            "weight": 55,
            "address": "101 Elm Avenue, Nasr City, Cairo",
            "case_description": "Depression and anxiety management"
        },
        "hospital_address": "123 Cedar Street, Nasr City, Cairo"
    },
    {
        "title": "Radiologist Required",
        "description": "Seeking a radiologist to interpret medical images and perform diagnostic imaging procedures. Must have expertise in X-ray, CT, MRI, and ultrasound.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Radiology",
            "Organization": "Egyptian Diagnostic Imaging Center",
            "Area": "Zamalek",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "James Wilson",
            "age": 45,
            "gender": "Male",
            "weight": 80,
            "address": "789 Pine Street, Zamalek, Cairo",
            "case_description": "CT scan for abdominal pain evaluation"
        },
        "hospital_address": "101 Cedar Lane, Zamalek, Cairo"
    },
    {
        "title": "Anesthesiologist Needed",
        "description": "Urgently hiring an anesthesiologist to administer anesthesia and monitor patients during surgery. Must have expertise in pain management and critical care.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Anesthesiology",
            "Organization": "Cairo Anesthesia Group",
            "Area": "Heliopolis",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Linda Brown",
            "age": 35,
            "gender": "Female",
            "weight": 65,
            "address": "456 Oak Street, Heliopolis, Cairo",
            "case_description": "Scheduled for knee arthroscopy"
        },
        "hospital_address": "789 Pine Road, Heliopolis, Cairo"
    },
    {
        "title": "Urologist Wanted",
        "description": "Looking for a urologist to diagnose and treat disorders of the urinary tract and male reproductive system. Must have expertise in urological surgery and minimally invasive procedures.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Urology",
            "Organization": "Nile Urology Clinic",
            "Area": "Maadi",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Steven Johnson",
            "age": 50,
            "gender": "Male",
            "weight": 75,
            "address": "101 Elm Street, Maadi, Cairo",
            "case_description": "Evaluation for urinary tract infection"
        },
        "hospital_address": "123 Cedar Road, Maadi, Cairo"
    },
    {
        "title": "Emergency Medicine Physician Required",
        "description": "Seeking an emergency medicine physician to provide urgent medical care in emergency departments. Must have expertise in trauma management and resuscitation.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Emergency Medicine",
            "Organization": "Cairo Emergency Hospital",
            "Area": "Nasr City",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Andrew Smith",
            "age": 40,
            "gender": "Male",
            "weight": 80,
            "address": "789 Pine Avenue, Nasr City, Cairo",
            "case_description": "Motor vehicle accident with multiple injuries"
        },
        "hospital_address": "101 Oak Street, Nasr City, Cairo"
    },
    {
        "title": "Endocrinologist Needed",
        "description": "Urgently hiring an endocrinologist to diagnose and treat hormonal disorders and metabolic diseases. Must have expertise in endocrine testing and hormone therapy.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Endocrinology",
            "Organization": "Egyptian Endocrine Clinic",
            "Area": "Zamalek",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Michelle Garcia",
            "age": 55,
            "gender": "Female",
            "weight": 65,
            "address": "456 Pine Road, Zamalek, Cairo",
            "case_description": "Diabetes management and thyroid disorder evaluation"
        },
        "hospital_address": "789 Cedar Lane, Zamalek, Cairo"
    },
    {
        "title": "Hematologist-Oncologist Wanted",
        "description": "Looking for a hematologist-oncologist to diagnose and treat blood disorders and cancer. Must have expertise in chemotherapy, immunotherapy, and hematological testing.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Hematology-Oncology",
            "Organization": "Nile Cancer Center",
            "Area": "Mohandessin",
            "Governorate": "Giza"
        },
        "patient_details": {
            "name": "Robert Martinez",
            "age": 60,
            "gender": "Male",
            "weight": 70,
            "address": "101 Oak Avenue, Mohandessin, Giza",
            "case_description": "Chemotherapy session for lymphoma"
        },
        "hospital_address": "123 Cedar Road, Mohandessin, Giza"
    },
    {
        "title": "Pulmonologist Required",
        "description": "Seeking a pulmonologist to diagnose and treat respiratory diseases and disorders. Must have expertise in pulmonary function testing and respiratory therapy.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Pulmonology",
            "Organization": "Cairo Pulmonary Clinic",
            "Area": "Heliopolis",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Maria Rodriguez",
            "age": 50,
            "gender": "Female",
            "weight": 60,
            "address": "789 Pine Street, Heliopolis, Cairo",
            "case_description": "Chronic obstructive pulmonary disease (COPD) exacerbation"
        },
        "hospital_address": "101 Elm Road, Heliopolis, Cairo"
    },
    {
        "title": "Rheumatologist Needed",
        "description": "Urgently hiring a rheumatologist to diagnose and treat autoimmune and musculoskeletal disorders. Must have expertise in rheumatologic examination and joint injections.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Rheumatology",
            "Organization": "Egyptian Rheumatology Center",
            "Area": "Maadi",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Daniel Harris",
            "age": 45,
            "gender": "Male",
            "weight": 70,
            "address": "456 Cedar Avenue, Maadi, Cairo",
            "case_description": "Evaluation for rheumatoid arthritis"
        },
        "hospital_address": "789 Oak Lane, Maadi, Cairo"
    },
    {
        "title": "Infectious Disease Specialist Wanted",
        "description": "Looking for an infectious disease specialist to diagnose and treat infectious diseases and manage infection control. Must have expertise in epidemiology and antimicrobial therapy.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Infectious Diseases",
            "Organization": "Nile Infectious Disease Clinic",
            "Area": "Zamalek",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Susan Thompson",
            "age": 40,
            "gender": "Female",
            "weight": 60,
            "address": "101 Cedar Street, Zamalek, Cairo",
            "case_description": "Fever and recent travel history"
        },
        "hospital_address": "123 Pine Road, Zamalek, Cairo"
    },
    {
        "title": "Geriatrician Required",
        "description": "Seeking a geriatrician to provide healthcare services to elderly patients. Must have expertise in geriatric assessment, dementia care, and palliative medicine.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Geriatrics",
            "Organization": "Cairo Geriatric Clinic",
            "Area": "Nasr City",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Patricia Anderson",
            "age": 70,
            "gender": "Female",
            "weight": 65,
            "address": "789 Oak Street, Nasr City, Cairo",
            "case_description": "Evaluation for memory loss and cognitive decline"
        },
        "hospital_address": "101 Elm Lane, Nasr City, Cairo"
    },
    {
        "title": "Neonatologist Needed",
        "description": "Urgently hiring a neonatologist to provide medical care to newborn infants, especially those who are premature or ill. Must have expertise in neonatal intensive care.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Neonatology",
            "Organization": "Nile Neonatal Center",
            "Area": "Zamalek",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Laura Brown",
            "age": 1,
            "gender": "Female",
            "weight": 3,
            "address": "456 Pine Avenue, Zamalek, Cairo",
            "case_description": "Preterm infant requiring specialized care"
        },
        "hospital_address": "789 Cedar Road, Zamalek, Cairo"
    },
    {
        "title": "Nephrologist Wanted",
        "description": "Looking for a nephrologist to diagnose and treat kidney diseases and disorders. Must have expertise in dialysis, kidney transplantation, and renal biopsy.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Nephrology",
            "Organization": "Egyptian Nephrology Center",
            "Area": "Maadi",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Kevin Wilson",
            "age": 60,
            "gender": "Male",
            "weight": 75,
            "address": "101 Oak Street, Maadi, Cairo",
            "case_description": "Chronic kidney disease management"
        },
        "hospital_address": "123 Elm Lane, Maadi, Cairo"
    },
    {
        "title": "Pathologist Required",
        "description": "Seeking a pathologist to diagnose diseases by examining tissues, cells, and body fluids. Must have expertise in histopathology, cytopathology, and molecular pathology.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Pathology",
            "Organization": "Cairo Pathology Laboratory",
            "Area": "Nasr City",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Christopher Martin",
            "age": 50,
            "gender": "Male",
            "weight": 80,
            "address": "789 Cedar Street, Nasr City, Cairo",
            "case_description": "Biopsy for suspected malignancy"
        },
        "hospital_address": "101 Pine Road, Nasr City, Cairo"
    },
    {
        "title": "Plastic Surgeon Needed",
        "description": "Urgently hiring a plastic surgeon to perform cosmetic and reconstructive surgeries. Must have expertise in aesthetic surgery, microsurgery, and tissue grafting.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Plastic Surgery",
            "Organization": "Nile Plastic Surgery Clinic",
            "Area": "Zamalek",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "Jessica Taylor",
            "age": 35,
            "gender": "Female",
            "weight": 60,
            "address": "456 Pine Avenue, Zamalek, Cairo",
            "case_description": "Breast augmentation surgery"
        },
        "hospital_address": "789 Cedar Road, Zamalek, Cairo"
    },
    {
        "title": "Radiation Oncologist Wanted",
        "description": "Looking for a radiation oncologist to treat cancer patients with radiation therapy. Must have expertise in radiation treatment planning and delivery.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Radiation Oncology",
            "Organization": "Egyptian Cancer Institute",
            "Area": "Maadi",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "John Davis",
            "age": 55,
            "gender": "Male",
            "weight": 70,
            "address": "101 Elm Street, Maadi, Cairo",
            "case_description": "Radiotherapy for prostate cancer"
        },
        "hospital_address": "123 Oak Lane, Maadi, Cairo"
    },
    {
        "title": "Thoracic Surgeon Needed",
        "description": "Urgently hiring a thoracic surgeon to perform surgeries on organs within the chest cavity, including the heart, lungs, and esophagus. Must have expertise in thoracic surgical procedures.",
        "tags": {
            "Type": "Doctor",
            "Specialty": "Thoracic Surgery",
            "Organization": "Nile Thoracic Surgery Center",
            "Area": "Heliopolis",
            "Governorate": "Cairo"
        },
        "patient_details": {
            "name": "William Anderson",
            "age": 60,
            "gender": "Male",
            "weight": 75,
            "address": "789 Pine Street, Heliopolis, Cairo",
            "case_description": "Lung cancer surgery"
        },
        "hospital_address": "101 Cedar Road, Heliopolis, Cairo"
    }
]
   

export default volunteeringOld;