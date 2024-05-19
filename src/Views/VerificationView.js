import React, { useState } from "react";
import VerificationOrganizationCard from "../Components/VerificationOrganizationCard";

function VerificationPage() {
  const [organizations, setOrganizations] = useState([
    {
      id: 1,
      name: "Charity Foundation",
      type: "Non-profit",
      address: "123 Charity Street",
      governorate: "Cairo",
      area: "Nasr City",
      email: "charity@example.com",
      contactNumber: "+20 100 222 3333",
      firstName: "John",
      lastName: "Doe",
    },
    {
      id: 2,
      name: "Hope Orphanage",
      type: "Orphanage",
      address: "456 Orphan Street",
      governorate: "Giza",
      area: "Dokki",
      email: "hope@example.com",
      contactNumber: "+20 100 444 5555",
      firstName: "Jane",
      lastName: "Smith",
    },
    {
      id: 3,
      name: "Education Initiative",
      type: "School",
      address: "789 School Avenue",
      governorate: "Alexandria",
      area: "Smouha",
      email: "education@example.com",
      contactNumber: "+20 100 666 7777",
      firstName: "Ahmed",
      lastName: "Ali",
    },
    {
      id: 4,
      name: "Healthcare Center",
      type: "Hospital",
      address: "101 Hospital Road",
      governorate: "Luxor",
      area: "Luxor City",
      email: "healthcare@example.com",
      contactNumber: "+20 100 888 9999",
      firstName: "Fatima",
      lastName: "Khalid",
    },
    {
      id: 5,
      name: "Good Shepherd Church",
      type: "Church",
      address: "321 Church Lane",
      governorate: "Sohag",
      area: "Sohag City",
      email: "church@example.com",
      contactNumber: "+20 100 111 2222",
      firstName: "David",
      lastName: "Johnson",
    },
    {
      id: 6,
      name: "Masjid Al-Salam",
      type: "Mosque",
      address: "567 Mosque Street",
      governorate: "Aswan",
      area: "Aswan City",
      email: "mosque@example.com",
      contactNumber: "+20 100 333 4444",
      firstName: "Mohamed",
      lastName: "Ahmed",
    },
    {
      id: 7,
      name: "Community Support Organization",
      type: "Non-profit",
      address: "246 Community Street",
      governorate: "Qena",
      area: "Qena City",
      email: "community@example.com",
      contactNumber: "+20 100 555 6666",
      firstName: "Sarah",
      lastName: "Garcia",
    },
    {
      id: 8,
      name: "Future Stars School",
      type: "School",
      address: "135 School Avenue",
      governorate: "Port Said",
      area: "Port Fouad",
      email: "futurestars@example.com",
      contactNumber: "+20 100 777 8888",
      firstName: "Adam",
      lastName: "Taylor",
    },
    {
      id: 9,
      name: "Healing Hands Hospital",
      type: "Hospital",
      address: "369 Hospital Road",
      governorate: "Damietta",
      area: "New Damietta",
      email: "healinghands@example.com",
      contactNumber: "+20 100 999 0000",
      firstName: "Lina",
      lastName: "Martinez",
    },
    {
      id: 10,
      name: "Unity Orphanage",
      type: "Orphanage",
      address: "579 Orphan Street",
      governorate: "Beni Suef",
      area: "Beni Suef City",
      email: "unity@example.com",
      contactNumber: "+20 100 123 4567",
      firstName: "Omar",
      lastName: "Chen",
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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[1000px] mx-auto auto-rows-fr">
      {organizations.length === 0 ? (
        <div className="col-span-3 flex justify-center items-center mt-56">
          <p className="text-center text-gray-600">
            No more requests to process :D
          </p>
        </div>
      ) : (
        organizations.map((org) => (
          <VerificationOrganizationCard
            key={org.id}
            organization={org}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        ))
      )}
    </div>
  );
}

export default VerificationPage;
