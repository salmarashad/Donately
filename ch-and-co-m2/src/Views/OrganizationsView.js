import React, { useState, useEffect } from "react";
import OrganizationCard from "../Components/OrganizationCard";

const OrganizationsView = () => {
  const [organizations, setOrganizations] = useState([
    {
      id: 1,
      name: "Dar Al Fouad Hospital",
      type: "Hospital",
      image: `${process.env.PUBLIC_URL}/organizationImages/DarAlFouadHospital.png`,
    },
    {
      id: 2,
      name: "Cleopatra Hospital",
      type: "Hospital",
      image: `${process.env.PUBLIC_URL}/organizationImages/CleopatraHospital.jpeg`,
    },
    {
      id: 3,
      name: "Elite International School",
      type: "School",
      image: `${process.env.PUBLIC_URL}/organizationImages/EliteSchool.jpeg`,
    },
    {
      id: 4,
      name: "Saudi German Hospital",
      type: "Hospital",
      image: `${process.env.PUBLIC_URL}/organizationImages/SaudiGermanHospital.jpeg`,
    },
    {
      id: 5,
      name: "Resala",
      type: "Charity",
      image: `${process.env.PUBLIC_URL}/organizationImages/Resala.png`,
    },
    {
      id: 6,
      name: "Resala",
      type: "Charity",
      image: `${process.env.PUBLIC_URL}/organizationImages/Resala.png`,
    },
    {
      id: 7,
      name: "Cleopatra Hospital",
      type: "Hospital",
      image: `${process.env.PUBLIC_URL}/organizationImages/CleopatraHospital.jpeg`,
    },
    {
      id: 8,
      name: "Resala",
      type: "Charity",
      image: `${process.env.PUBLIC_URL}/organizationImages/Resala.png`,
    },
    {
      id: 9,
      name: "Cleopatra Hospital",
      type: "Hospital",
      image: `${process.env.PUBLIC_URL}/organizationImages/CleopatraHospital.jpeg`,
    },
  ]);

  return (
    <div className="grid grid-cols-5 max-w-7xl w-full mx-auto">
      <div className="col-span-1">
        {/* Add any content you want to display in the first column here */}
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-4">
          {organizations.map((organization) => (
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
