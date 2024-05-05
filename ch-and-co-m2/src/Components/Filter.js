import React, { useEffect } from "react";
function Filter({filteringOptions, setFilteringOptions, currentData, setCurrentCardSet}) {
    const [categories, setCategories] = React.useState(new Set());
    const [clothesAge, setClothesAge] = React.useState(new Set());
    const [clothesSeason, setClothesSeason] = React.useState(new Set());
    const [clothesGender, setClothesGender] = React.useState(new Set());
    const [toysAge, setToysAge] = React.useState(new Set());
    const [toysGender, setToysGender] = React.useState(new Set());
    const [toysCategory, setToysCategory] = React.useState(new Set());
    const [foodType, setFoodType] = React.useState(new Set());
    const [medicalDevices, setMedicalDevices] = React.useState(new Set());
    const [medicalEquipment, setMedicalEquipment] = React.useState(new Set());
    const [medicalMedication, setMedicalMedication] = React.useState(new Set());
    const [schoolType, setSchoolType] = React.useState(new Set());
    const [bloodHospital, setBloodHospital] = React.useState(new Set());
    const [bloodGovernorate, setBloodGovernorate] = React.useState(new Set());
    const [bloodArea, setBloodArea] = React.useState(new Set());

    


    useEffect(() => {
        const categories = new Set(currentData.map(item => item.tags.type));
        setCategories(Array.from(categories));
        let clothesAgeSet = new Set();
        let clothesSeasonSet = new Set();
        let clothesGenderSet = new Set();
        let toysAgeSet = new Set();
        let toysGenderSet = new Set();
        let toysCategorySet = new Set();
        let foodTypeSet = new Set();
        let medicalDevicesSet = new Set();
        let medicalEquipmentSet = new Set();
        let medicalMedicationSet = new Set();
        let schoolTypeSet = new Set();
        let bloodHospitalSet = new Set();
        let bloodGovernorateSet = new Set();
        let bloodAreaSet = new Set();

        for (let data of currentData) {
            if (data.tags.type.includes("Clothes")) {
                clothesAgeSet.add(data.tags.age);
                clothesSeasonSet.add(data.tags.season);
                clothesGenderSet.add(data.tags.gender);
            }
            if (data.tags.type.includes("Toys")) {
                toysAgeSet.add(data.tags.age);
                toysGenderSet.add(data.tags.age); // Should this be data.tags.gender?
                toysCategorySet.add(data.tags.category);
            }
            if (data.tags.type.includes("Food")) {
                foodTypeSet.add(data.tags.type);
            }
            if (data.tags.type.includes("Medical Supplies")) {
                medicalDevicesSet.add(data.tags.medicaldevice);
                medicalEquipmentSet.add(data.tags.medicalequipment);
                medicalMedicationSet.add(data.tags.medication);
            }
            if (data.tags.type.includes("School Supplies")) {
                schoolTypeSet.add(data.tags.type);
            }
            if (data.tags.type.includes("Blood donations")) {
                bloodHospitalSet.add(data.tags.Hospital);
                bloodGovernorateSet.add(data.tags.Governorate);
                bloodAreaSet.add(data.tags.Area);
            }
        }
        setClothesAge(new Set(Array.from(clothesAgeSet).sort()));
        setClothesSeason(new Set(Array.from(clothesSeasonSet).sort()));
        setClothesGender(new Set(Array.from(clothesGenderSet).sort()));
        setToysAge(new Set(Array.from(toysAgeSet).sort()));
        setToysGender(new Set(Array.from(toysGenderSet).sort()));
        setToysCategory(new Set(Array.from(toysCategorySet).sort()));
        setFoodType(new Set(Array.from(foodTypeSet).sort()));
        setMedicalDevices(new Set(Array.from(medicalDevicesSet).sort()));
        setMedicalEquipment(new Set(Array.from(medicalEquipmentSet).sort()));
        setMedicalMedication(new Set(Array.from(medicalMedicationSet).sort()));
        setSchoolType(new Set(Array.from(schoolTypeSet).sort()));
        setBloodHospital(new Set(Array.from(bloodHospitalSet).sort()));
        setBloodGovernorate(new Set(Array.from(bloodGovernorateSet).sort()));
        setBloodArea(new Set(Array.from(bloodAreaSet).sort()));

    }, [currentData]);

    useEffect(() => {
        if (filteringOptions.length === 0) {
            setCurrentCardSet(currentData);
        }
        else {

        }
    }, [filteringOptions]);

	const handleFilterChange = (e) => {
		const { value, checked } = e.target;

		setFilteringOptions(prevOptions => {
			if (checked) {
				return [...prevOptions, value];
			} else {
				return prevOptions.filter(option => option !== value);
			}
		});
	};
    const renderTags = () => {
        return (
            <div>
                {Array.from(categories).map((category, index) => (
                    <div key={index}>
                        <input type="checkbox" id={category} name={category} value={category} onChange={handleFilterChange} />
                        <label htmlFor={category}>{category}</label>
                        {category === "Clothes" && 
                            <>
                                <>
                                    <h3>Age</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(clothesAge).map((age, index) => (
                                            age !== "" && <option key={index} value={age}>{age}</option>
                                        ))}
                                    </select>
                                </>
                                <>
                                    <h3>Season</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(clothesSeason).map((season, index) => (
                                            season !== "" && <option key={index} value={season}>{season}</option>
                                        ))}
                                    </select>
                                </>
                                <>
                                    <h3>Gender</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(clothesGender).map((gender, index) => (
                                            gender !== "" && <option key={index} value={gender}>{gender}</option>
                                        ))}
                                    </select>
                                </>
                            </>
                        }
                        {category === "Toys" &&
                            <>
                                <>
                                    <h3>Age</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(toysAge).map((age, index) => (
                                            age !== "" && <option key={index} value={age}>{age}</option>
                                        ))}
                                    </select>
                                </>
                                <>
                                    <h3>Gender</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(toysGender).map((gender, index) => (
                                            gender !== "" && <option key={index} value={gender}>{gender}</option>
                                        ))}
                                    </select>
                                </>
                                <>
                                    <h3>Category</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(toysCategory).map((category, index) => (
                                            category !== "" && <option key={index} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </>
                                
                            </>
                        }
                        {category === "Food" &&
                            <>
                                <>
                                    <h3>Type</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(foodType).map((type, index) => (
                                            type !== "" && <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </>
                            </>
                        }
                        {category === "Medical Supplies" &&
                            <>
                                <>
                                    <h3>Medical Devices</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(medicalDevices).map((device, index) => (
                                            device !== "" && <option key={index} value={device}>{device}</option>
                                        ))}
                                    </select>
                                </>
                                <>
                                    <h3>Medical Equipment</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(medicalEquipment).map((equipment, index) => (
                                            equipment !== "" && <option key={index} value={equipment}>{equipment}</option>
                                        ))}
                                    </select>
                                </>
                                <>
                                    <h3>Medication</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(medicalMedication).map((medication, index) => (
                                            medication !== "" && <option key={index} value={medication}>{medication}</option>
                                        ))}
                                    </select>
                                </>
                            </>
                        }
                        {category === "School Supplies" &&
                            <>
                                <>
                                    <h3>Type</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(schoolType).map((type, index) => (
                                            type !== "" && <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </>
                            </>
                        }
                        {category === "Blood donations" &&
                            <>
                                <>
                                    <h3>Hospital</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(bloodHospital).map((hospital, index) => (
                                            hospital !== "" && <option key={index} value={hospital}>{hospital}</option>
                                        ))}
                                    </select>
                                </>
                                <>
                                    <h3>Governorate</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(bloodGovernorate).map((governorate, index) => (
                                            governorate !== "" && <option key={index} value={governorate}>{governorate}</option>
                                        ))}
                                    </select>
                                </>
                                <>
                                    <h3>Area</h3>
                                    <select onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        {Array.from(bloodArea).map((area, index) => (
                                            area !== "" && <option key={index} value={area}>{area}</option>
                                        ))}
                                    </select>
                                </>
                            </>

                        }
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {renderTags()}	
		</div>
    );
}
export default Filter;

// Clothes
//   - Age
// 	a. Kids, Teens, Adults
//   - Gender
// 	a. Male, Female, Unisex
//   - Season
// 	a. Summer, Winter, Spring, Fall
// Toys
//   - Age
// 	a. 1-5, 5-11, 12-18, 18+
//   - Gender
// 	a. Male, Female, Unisex
//   - Category
// 	a. Board games
// 	b. stuffed toys 
// 	c. dolls
// 	d. sports cars 
// 	e. outdoor
// Food
//   - Type
//   	a. Fruits and vegetables
//   	b. Canned foods
//   	c. Fresh meals
//   	d. Baked goods
// Medical Supplies
//   - Medical devices
    // 	a. blood O2 saturation
    // 	b. blood pressure
    // 	c. glucometers
//   - Medical Equipment
    // 	a. MRI machines
    // 	b. CT machines
    // 	c. EKG machines
//   - Filter medication on "medical use"
    // 	a. Cough medicine
    // 	b. Pain Killers
    // 	c. etc?
// School Supplies
//   - Books
//   - Stationery
// Blood donations
//   - Hospital
// 	a. i guess just the name?
//   - Governorate
// 	a. i guess just the governorate?
//   - Area
// 	a. i guess just the area?