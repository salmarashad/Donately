import React, { useState } from "react";
import OrganizationCard from "../Components/OrganizationCard";
import Filter from "../Components/Filter";

const OrganizationsView = () => {
  const [organizations, setOrganizations] = useState([
    {
      title: "Dar Al Fouad Hospital",
      subtitle: "Hospital",
      description:
        "Dar Al Fouad Hospital is a leading hospital in Egypt, offering a wide range of medical services.",
      tags: {
        governorate: "Giza",
        area: "6th of October",
        type: "Hospital",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/DarAlFouadHospital.png`,
    },
    {
      title: "Cleopatra Hospital",
      subtitle: "Hospital",
      description:
        "Cleopatra Hospital is a renowned healthcare facility known for its quality medical care.",
      tags: {
        governorate: "Cairo",
        area: "Nasr City",
        type: "Hospital",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/CleopatraHospital.jpeg`,
    },
    {
      title: "Elite International School",
      subtitle: "School",
      description:
        "Elite International School offers quality education for students from diverse backgrounds.",
      tags: {
        governorate: "Cairo",
        area: "New Cairo",
        type: "School",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/EliteSchool.jpeg`,
    },
    {
      title: "Saudi German Hospital",
      subtitle: "Hospital",
      description:
        "Saudi German Hospital provides comprehensive healthcare services with a focus on patient satisfaction.",
      tags: {
        governorate: "Giza",
        area: "Mohandessin",
        type: "Hospital",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/SaudiGermanHospital.jpeg`,
    },
    {
      title: "Resala",
      subtitle: "Charity",
      description:
        "Resala is a charitable organization dedicated to helping those in need through various initiatives.",
      tags: {
        governorate: "Cairo",
        area: "Maadi",
        type: "Charity",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/Resala.png`,
    },
    {
      title: "Resala",
      subtitle: "Charity",
      description:
        "Resala is a charitable organization dedicated to helping those in need through various initiatives.",
      tags: {
        governorate: "Cairo",
        area: "Zamalek",
        type: "Charity",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/Resala.png`,
    },
    {
      title: "Resala",
      subtitle: "Charity",
      description:
        "Resala is a charitable organization dedicated to helping those in need through various initiatives.",
      tags: {
        governorate: "Cairo",
        area: "Heliopolis",
        type: "Charity",
      },
      imgURL: `${process.env.PUBLIC_URL}/organizationImages/Resala.png`,
    },
  ]);
  const [filteredOrganizations, setFilteredOrganizations] = useState([]);

  const handleFilterChange = (filteredData) => {
    setFilteredOrganizations(filteredData);
  };

  return (
    <div className="grid grid-cols-5 max-w-7xl w-full mx-auto">
      <div className="col-span-1">
        {/* You can put the Filter component here */}
        <Filter data={organizations} setCurrentCardSet={handleFilterChange} />
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-4">
          {/* Render the filtered organizations */}
          {filteredOrganizations.map((organization) => (
            <OrganizationCard
              key={organization.id}
              organization={organization}
            />
          ))}
        </div>
      </div>
      <div className="col-span-1">
        {/* Add any content you want to display in the third column here */}
      </div>
    </div>
  );
};

export default OrganizationsView;
