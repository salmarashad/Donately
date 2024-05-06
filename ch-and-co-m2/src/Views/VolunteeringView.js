import { useContext } from "react";
import { useState } from "react";
import { DetailedContext } from "../App";
import CardRenderer from "../Components/CardRenderer";
import Filter from "../Components/Filter";
import DetailsView from "../Components/DetailsView";

function VolunteeringView(props) {
	const [currentCardSet, setCurrentCardSet] = useState([]);
	
	const data = [
		{
			title: "Math Tutor Needed for High School Students",
			description: "Looking for an experienced math tutor to assist high school students with algebra and calculus. Must be patient and have excellent communication skills.",
			tags: {
				type: "Teacher",
				subject: "Mathematics",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "English Literature Teacher Required",
			description: "Seeking an English literature teacher to conduct advanced literature classes for college students. Candidate should have a strong background in literary analysis and interpretation.",
			tags: {
				type: "Teacher",
				subject: "English Literature",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Biology Teacher Wanted",
			description: "Looking for a biology teacher to teach high school students about cellular biology, genetics, and ecology. Prior teaching experience preferred.",
			tags: {
				type: "Teacher",
				subject: "Biology",
				area: "Heliopolis",
				governorate: "Cairo"
			}
		},
		{
			title: "Physics Instructor Needed",
			description: "Urgently seeking a physics instructor to teach university-level physics courses. Must be familiar with classical mechanics, electromagnetism, and thermodynamics.",
			tags: {
				type: "Teacher",
				subject: "Physics",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Arabic Language Teacher Required",
			description: "Looking for a qualified Arabic language teacher to teach non-native speakers. Must have experience teaching grammar, syntax, and literature.",
			tags: {
				type: "Teacher",
				subject: "Arabic Language",
				area: "Dokki",
				governorate: "Cairo"
			}
		},
		{
			title: "History Teacher Needed",
			description: "Seeking a history teacher to deliver engaging history lessons to secondary school students. Familiarity with Egyptian history is a plus.",
			tags: {
				type: "Teacher",
				subject: "History",
				area: "Mohandessin",
				governorate: "Giza"
			}
		},
		{
			title: "Chemistry Tutor Wanted",
			description: "Looking for a chemistry tutor to assist students with understanding chemical reactions, stoichiometry, and atomic structure.",
			tags: {
				type: "Teacher",
				subject: "Chemistry",
				area: "Shubra",
				governorate: "Cairo"
			}
		},
		{
			title: "French Language Teacher Required",
			description: "Seeking a French language teacher to conduct language classes for beginners. Must be fluent in French and have experience teaching language skills.",
			tags: {
				type: "Teacher",
				subject: "French Language",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Computer Science Instructor Needed",
			description: "Urgently hiring a computer science instructor to teach programming and computer concepts. Must be proficient in languages such as Python and Java.",
			tags: {
				type: "Teacher",
				subject: "Computer Science",
				area: "New Cairo",
				governorate: "Cairo"
			}
		},
		{
			title: "Geography Teacher Wanted",
			description: "Looking for a geography teacher to teach physical and human geography. Experience with GIS and mapping software is a plus.",
			tags: {
				type: "Teacher",
				subject: "Geography",
				area: "Helwan",
				governorate: "Cairo"
			}
		},
		{
			title: "Art Teacher Needed",
			description: "Seeking an art teacher to teach drawing, painting, and sculpture techniques to students of all ages. Must have a strong portfolio and teaching experience.",
			tags: {
				type: "Teacher",
				subject: "Art",
				area: "Mohandessin",
				governorate: "Giza"
			}
		},
		{
			title: "Music Instructor Required",
			description: "Looking for a music instructor to teach piano and music theory. Must be proficient in music notation and have experience teaching individual and group lessons.",
			tags: {
				type: "Teacher",
				subject: "Music",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Physical Education Teacher Wanted",
			description: "Seeking a physical education teacher to develop and implement a comprehensive physical education curriculum. Must be certified and have experience teaching sports and fitness.",
			tags: {
				type: "Teacher",
				subject: "Physical Education",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Special Education Teacher Needed",
			description: "Urgently hiring a special education teacher to work with students with diverse learning needs. Must be patient, compassionate, and skilled in individualized instruction.",
			tags: {
				type: "Teacher",
				subject: "Special Education",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Psychology Teacher Wanted",
			description: "Looking for a psychology teacher to teach high school students about human behavior, cognition, and mental health. Experience with counseling is a plus.",
			tags: {
				type: "Teacher",
				subject: "Psychology",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Business Studies Teacher Required",
			description: "Seeking a business studies teacher to teach economics, entrepreneurship, and business management. Must have experience teaching business concepts and practical skills.",
			tags: {
				type: "Teacher",
				subject: "Business Studies",
				area: "Heliopolis",
				governorate: "Cairo"
			}
		},
		{
			title: "Religious Studies Teacher Needed",
			description: "Urgently hiring a religious studies teacher to teach Islamic studies. Must have a deep understanding of Islamic theology, history, and jurisprudence.",
			tags: {
				type: "Teacher",
				subject: "Religious Studies",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Health Education Instructor Wanted",
			description: "Looking for a health education instructor to teach students about nutrition, fitness, and disease prevention. Must be knowledgeable about public health principles.",
			tags: {
				type: "Teacher",
				subject: "Health Education",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Environmental Science Teacher Required",
			description: "Seeking an environmental science teacher to teach ecology, conservation, and sustainability. Experience with fieldwork and outdoor education is desirable.",
			tags: {
				type: "Teacher",
				subject: "Environmental Science",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Drama Teacher Needed",
			description: "Urgently hiring a drama teacher to teach acting, improvisation, and theatrical techniques. Must have experience directing student performances.",
			tags: {
				type: "Teacher",
				subject: "Drama",
				area: "Mohandessin",
				governorate: "Giza"
			}
		},
		{
			title: "Social Studies Teacher Wanted",
			description: "Looking for a social studies teacher to teach anthropology, sociology, and political science. Must have a passion for social justice and global issues.",
			tags: {
				type: "Teacher",
				subject: "Social Studies",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Home Economics Teacher Required",
			description: "Seeking a home economics teacher to teach cooking, nutrition, and household management. Must be skilled in meal planning and food safety.",
			tags: {
				type: "Teacher",
				subject: "Home Economics",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "IT Instructor Needed",
			description: "Urgently hiring an IT instructor to teach computer skills and digital literacy. Must be proficient in Microsoft Office and internet applications.",
			tags: {
				type: "Teacher",
				subject: "Information Technology",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Language Arts Teacher Wanted",
			description: "Looking for a language arts teacher to teach reading, writing, and communication skills. Must have experience with language acquisition and literacy development.",
			tags: {
				type: "Teacher",
				subject: "Language Arts",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Sociology Teacher Required",
			description: "Seeking a sociology teacher to teach sociological theories, research methods, and social issues. Must have experience with experiential learning and group projects.",
			tags: {
				type: "Teacher",
				subject: "Sociology",
				area: "Heliopolis",
				governorate: "Cairo"
			}
		},
		{
			title: "Agriculture Teacher Needed",
			description: "Urgently hiring an agriculture teacher to teach crop production, animal husbandry, and agricultural economics. Must have experience with farm management.",
			tags: {
				type: "Teacher",
				subject: "Agriculture",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Physical Science Instructor Wanted",
			description: "Looking for a physical science instructor to teach chemistry and physics concepts. Must be proficient in laboratory techniques and safety procedures.",
			tags: {
				type: "Teacher",
				subject: "Physical Science",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Economics Teacher Required",
			description: "Seeking an economics teacher to teach microeconomics, macroeconomics, and economic policy. Must have a strong understanding of economic principles.",
			tags: {
				type: "Teacher",
				subject: "Economics",
				area: "Heliopolis",
				governorate: "Cairo"
			}
		},
		{
			title: "Philosophy Teacher Needed",
			description: "Urgently hiring a philosophy teacher to teach philosophical theories, ethics, and critical thinking. Must have experience with philosophical discourse.",
			tags: {
				type: "Teacher",
				subject: "Philosophy",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Engineering Instructor Wanted",
			description: "Looking for an engineering instructor to teach engineering fundamentals and design principles. Must be proficient in mathematics and physics.",
			tags: {
				type: "Teacher",
				subject: "Engineering",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Government Teacher Required",
			description: "Seeking a government teacher to teach civics, political ideologies, and government structures. Must have a passion for democracy and citizenship education.",
			tags: {
				type: "Teacher",
				subject: "Government",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Health Sciences Teacher Needed",
			description: "Urgently hiring a health sciences teacher to teach anatomy, physiology, and medical terminology. Must have experience with health education and patient care.",
			tags: {
				type: "Teacher",
				subject: "Health Sciences",
				area: "Mohandessin",
				governorate: "Giza"
			}
		},
		{
			title: "Literacy Instructor Wanted",
			description: "Looking for a literacy instructor to teach reading and writing skills to adults. Must have experience with literacy assessments and remediation strategies.",
			tags: {
				type: "Teacher",
				subject: "Literacy",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Media Studies Teacher Required",
			description: "Seeking a media studies teacher to teach mass communication, media theory, and digital media production. Must have experience with media literacy and analysis.",
			tags: {
				type: "Teacher",
				subject: "Media Studies",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Nutrition Education Instructor Needed",
			description: "Urgently hiring a nutrition education instructor to teach healthy eating habits and nutrition science. Must have a background in dietetics or nutrition science.",
			tags: {
				type: "Teacher",
				subject: "Nutrition Education",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Technology Education Teacher Wanted",
			description: "Looking for a technology education teacher to teach computer applications, digital citizenship, and technology integration. Must have experience with educational technology.",
			tags: {
				type: "Teacher",
				subject: "Technology Education",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Vocational Training Instructor Required",
			description: "Seeking a vocational training instructor to teach job skills and vocational competencies. Must have experience with vocational assessments and career development.",
			tags: {
				type: "Teacher",
				subject: "Vocational Training",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Youth Development Teacher Needed",
			description: "Urgently hiring a youth development teacher to provide mentoring and life skills education to adolescents. Must have experience with youth empowerment programs.",
			tags: {
				type: "Teacher",
				subject: "Youth Development",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Medical Doctor - Cardiologist Needed",
			description: "We are looking for a skilled cardiologist to join our medical team. The ideal candidate should have expertise in diagnosing and treating heart conditions.",
			tags: {
				type: "Doctor",
				specialty: "Cardiology",
				organization: "Egyptian Heart Institute",
				area: "Dokki",
				governorate: "Cairo"
			}
		},
		{
			title: "Pediatrician Required",
			description: "Seeking a compassionate pediatrician to provide healthcare services to infants, children, and adolescents. Must be skilled in pediatric diagnosis, treatment, and care.",
			tags: {
				type: "Doctor",
				specialty: "Pediatrics",
				organization: "Nile Hospital",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "General Surgeon Needed",
			description: "Urgently hiring a general surgeon to perform surgical procedures and provide pre- and post-operative care. Must have excellent surgical skills and clinical judgment.",
			tags: {
				type: "Doctor",
				specialty: "General Surgery",
				organization: "Al Salam International Hospital",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Family Medicine Physician Wanted",
			description: "Looking for a family medicine physician to provide comprehensive primary care services to individuals and families. Must be skilled in preventive medicine and chronic disease management.",
			tags: {
				type: "Doctor",
				specialty: "Family Medicine",
				organization: "Cairo Family Clinic",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Obstetrician-Gynecologist Required",
			description: "Seeking an obstetrician-gynecologist to provide women's healthcare services including prenatal care, labor and delivery, and gynecological procedures.",
			tags: {
				type: "Doctor",
				specialty: "Obstetrics and Gynecology",
				organization: "Nasr City Women's Hospital",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Orthopedic Surgeon Needed",
			description: "Urgently hiring an orthopedic surgeon to diagnose and treat musculoskeletal injuries and conditions. Must have expertise in surgical and non-surgical orthopedic interventions.",
			tags: {
				type: "Doctor",
				specialty: "Orthopedic Surgery",
				organization: "Cairo Orthopedic Center",
				area: "Mohandessin",
				governorate: "Giza"
			}
		},
		{
			title: "Ophthalmologist Wanted",
			description: "Looking for an ophthalmologist to diagnose and treat eye diseases and perform eye surgeries. Must have experience with comprehensive eye exams and specialized testing.",
			tags: {
				type: "Doctor",
				specialty: "Ophthalmology",
				organization: "Egyptian Eye Institute",
				area: "Heliopolis",
				governorate: "Cairo"
			}
		},
		{
			title: "Dermatologist Required",
			description: "Seeking a dermatologist to diagnose and treat skin, hair, and nail disorders. Must have expertise in dermatological procedures and cosmetic dermatology.",
			tags: {
				type: "Doctor",
				specialty: "Dermatology",
				organization: "Cairo Skin Clinic",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Neurologist Needed",
			description: "Urgently hiring a neurologist to diagnose and treat disorders of the nervous system. Must have expertise in neurological examination, imaging, and diagnostic tests.",
			tags: {
				type: "Doctor",
				specialty: "Neurology",
				organization: "Nile Neurological Center",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Psychiatrist Wanted",
			description: "Looking for a psychiatrist to diagnose and treat mental illnesses and emotional disorders. Must have expertise in psychotherapy and psychopharmacology.",
			tags: {
				type: "Doctor",
				specialty: "Psychiatry",
				organization: "Cairo Psychiatry Clinic",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Radiologist Required",
			description: "Seeking a radiologist to interpret medical images and perform diagnostic imaging procedures. Must have expertise in X-ray, CT, MRI, and ultrasound.",
			tags: {
				type: "Doctor",
				specialty: "Radiology",
				organization: "Egyptian Diagnostic Imaging Center",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Anesthesiologist Needed",
			description: "Urgently hiring an anesthesiologist to administer anesthesia and monitor patients during surgery. Must have expertise in pain management and critical care.",
			tags: {
				type: "Doctor",
				specialty: "Anesthesiology",
				organization: "Cairo Anesthesia Group",
				area: "Heliopolis",
				governorate: "Cairo"
			}
		},
		{
			title: "Urologist Wanted",
			description: "Looking for a urologist to diagnose and treat disorders of the urinary tract and male reproductive system. Must have expertise in urological surgery and minimally invasive procedures.",
			tags: {
				type: "Doctor",
				specialty: "Urology",
				organization: "Nile Urology Clinic",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Emergency Medicine Physician Required",
			description: "Seeking an emergency medicine physician to provide urgent medical care in emergency departments. Must have expertise in trauma management and resuscitation.",
			tags: {
				type: "Doctor",
				specialty: "Emergency Medicine",
				organization: "Cairo Emergency Hospital",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Endocrinologist Needed",
			description: "Urgently hiring an endocrinologist to diagnose and treat hormonal disorders and metabolic diseases. Must have expertise in endocrine testing and hormone therapy.",
			tags: {
				type: "Doctor",
				specialty: "Endocrinology",
				organization: "Egyptian Endocrine Clinic",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Hematologist-Oncologist Wanted",
			description: "Looking for a hematologist-oncologist to diagnose and treat blood disorders and cancer. Must have expertise in chemotherapy, immunotherapy, and hematological testing.",
			tags: {
				type: "Doctor",
				specialty: "Hematology-Oncology",
				organization: "Nile Cancer Center",
				area: "Mohandessin",
				governorate: "Giza"
			}
		},
		{
			title: "Pulmonologist Required",
			description: "Seeking a pulmonologist to diagnose and treat respiratory diseases and disorders. Must have expertise in pulmonary function testing and respiratory therapy.",
			tags: {
				type: "Doctor",
				specialty: "Pulmonology",
				organization: "Cairo Pulmonary Clinic",
				area: "Heliopolis",
				governorate: "Cairo"
			}
		},
		{
			title: "Rheumatologist Needed",
			description: "Urgently hiring a rheumatologist to diagnose and treat autoimmune and musculoskeletal disorders. Must have expertise in rheumatologic examination and joint injections.",
			tags: {
				type: "Doctor",
				specialty: "Rheumatology",
				organization: "Egyptian Rheumatology Center",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Infectious Disease Specialist Wanted",
			description: "Looking for an infectious disease specialist to diagnose and treat infectious diseases and manage infection control. Must have expertise in epidemiology and antimicrobial therapy.",
			tags: {
				type: "Doctor",
				specialty: "Infectious Diseases",
				organization: "Nile Infectious Disease Clinic",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Geriatrician Required",
			description: "Seeking a geriatrician to provide healthcare services to elderly patients. Must have expertise in geriatric assessment, dementia care, and palliative medicine.",
			tags: {
				type: "Doctor",
				specialty: "Geriatrics",
				organization: "Cairo Geriatric Clinic",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Neonatologist Needed",
			description: "Urgently hiring a neonatologist to provide medical care to newborn infants, especially those who are premature or ill. Must have expertise in neonatal intensive care.",
			tags: {
				type: "Doctor",
				specialty: "Neonatology",
				organization: "Nile Neonatal Center",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Nephrologist Wanted",
			description: "Looking for a nephrologist to diagnose and treat kidney diseases and disorders. Must have expertise in dialysis, kidney transplantation, and renal biopsy.",
			tags: {
				type: "Doctor",
				specialty: "Nephrology",
				organization: "Egyptian Nephrology Center",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Pathologist Required",
			description: "Seeking a pathologist to diagnose diseases by examining tissues, cells, and body fluids. Must have expertise in histopathology, cytopathology, and molecular pathology.",
			tags: {
				type: "Doctor",
				specialty: "Pathology",
				organization: "Cairo Pathology Laboratory",
				area: "Nasr City",
				governorate: "Cairo"
			}
		},
		{
			title: "Plastic Surgeon Needed",
			description: "Urgently hiring a plastic surgeon to perform cosmetic and reconstructive surgeries. Must have expertise in aesthetic surgery, microsurgery, and tissue grafting.",
			tags: {
				type: "Doctor",
				specialty: "Plastic Surgery",
				organization: "Nile Plastic Surgery Clinic",
				area: "Zamalek",
				governorate: "Cairo"
			}
		},
		{
			title: "Radiation Oncologist Wanted",
			description: "Looking for a radiation oncologist to treat cancer patients with radiation therapy. Must have expertise in radiation treatment planning and delivery.",
			tags: {
				type: "Doctor",
				specialty: "Radiation Oncology",
				organization: "Egyptian Cancer Institute",
				area: "Maadi",
				governorate: "Cairo"
			}
		},
		{
			title: "Sleep Medicine Specialist Required",
			description: "Seeking a sleep medicine specialist to diagnose and treat sleep disorders such as sleep apnea, insomnia, and narcolepsy. Must have expertise in sleep studies and treatment modalities.",
			tags: {
				type: "Doctor",
				specialty: "Sleep Medicine",
				organization: "Cairo Sleep Clinic",
				area: "Nasr City",
				governorate: "Cairo"
			}
		}
	];
	
	  return (
		<div>
			<div className="grid grid-cols-4 max-w-7xl w-full mx-auto">
				<div className="col-span-1 justify-self-start">
					<div className="flex flex-col items-center justify-center gap-4 sticky top-24">
						<Filter data={data} setCurrentCardSet={setCurrentCardSet} />
					</div>
				</div>
				<div className="col-span-2">
					<div className="flex flex-col items-center justify-center gap-4">
						<CardRenderer currentCardSet={currentCardSet} />
					</div>
				</div>
				<div className="col-span-1"></div>
			</div>
		</div>
	);
}

export default VolunteeringView;