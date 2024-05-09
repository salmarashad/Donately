import React, { useState } from "react";
import VerificationOrganizationCard from "../Components/VerificationOrganizationCard";

function VerificationPage() {
  const [organizations, setOrganizations] = useState([
    {
      id: 1,
      name: "Charity Foundation",
      type: "Non-profit",
      address: "123 Charity Street",
      government: "Local",
      area: "Community",
      email: "charity@example.com",
      contactNumber: "123-456-7890",
      firstName: "John",
      lastName: "Doe",
    },
    {
      id: 2,
      name: "Education Initiative",
      type: "Education",
      address: "456 Education Avenue",
      government: "State",
      area: "City",
      email: "education@example.com",
      contactNumber: "987-654-3210",
      firstName: "Jane",
      lastName: "Smith",
    },
    {
      id: 3,
      name: "Healthcare Trust",
      type: "Healthcare",
      address: "789 Health Boulevard",
      government: "National",
      area: "Rural",
      email: "health@example.com",
      contactNumber: "567-890-1234",
      firstName: "Mike",
      lastName: "Johnson",
    },
    // Add more organizations here
    {
      id: 4,
      name: "Environmental Conservation Society",
      type: "Environment",
      address: "10 Green Lane",
      government: "Local",
      area: "Suburban",
      email: "environment@example.com",
      contactNumber: "111-222-3333",
      firstName: "Emily",
      lastName: "Brown",
    },
    {
      id: 5,
      name: "Animal Rescue Association",
      type: "Animal Welfare",
      address: "20 Paw Avenue",
      government: "Local",
      area: "Urban",
      email: "animalrescue@example.com",
      contactNumber: "444-555-6666",
      firstName: "Alex",
      lastName: "Wilson",
    },
    {
      id: 6,
      name: "Community Development Initiative",
      type: "Community Development",
      address: "30 Community Drive",
      government: "Local",
      area: "Suburban",
      email: "community@example.com",
      contactNumber: "777-888-9999",
      firstName: "Emily",
      lastName: "Johnson",
    },
    {
      id: 7,
      name: "Senior Citizens Support Group",
      type: "Elderly Care",
      address: "40 Senior Avenue",
      government: "National",
      area: "Rural",
      email: "seniorcare@example.com",
      contactNumber: "222-333-4444",
      firstName: "James",
      lastName: "Smith",
    },
    {
      id: 8,
      name: "Environmental Conservation Society",
      type: "Environment",
      address: "50 Green Street",
      government: "Local",
      area: "Urban",
      email: "environment@example.com",
      contactNumber: "111-222-3333",
      firstName: "Sophia",
      lastName: "Miller",
    },
    {
      id: 9,
      name: "Youth Empowerment Program",
      type: "Youth Development",
      address: "60 Youth Avenue",
      government: "National",
      area: "Urban",
      email: "youthempowerment@example.com",
      contactNumber: "333-444-5555",
      firstName: "Ethan",
      lastName: "Brown",
    },
    {
      id: 10,
      name: "Food Bank Foundation",
      type: "Food Aid",
      address: "70 Hunger Street",
      government: "Local",
      area: "Urban",
      email: "foodbank@example.com",
      contactNumber: "999-888-7777",
      firstName: "Olivia",
      lastName: "Garcia",
    },
  ]);

  const handleAccept = (organizationId) => {
    setOrganizations((prevOrganizations) =>
      prevOrganizations.filter((org) => org.id !== organizationId)
    );
  };

  const handleReject = (organizationId) => {
    setOrganizations((prevOrganizations) =>
      prevOrganizations.filter((org) => org.id !== organizationId)
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-64">
      {organizations.map((org) => (
        <VerificationOrganizationCard
          key={org.id}
          organization={org}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      ))}
    </div>
  );
}

export default VerificationPage;
