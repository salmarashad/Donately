import React, { useState } from "react";
import DoctorRequestCard from "../Components/DoctorRequestCard";

function DoctorRequestsView() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      gender: "Male",
      address: "123 Doctor Street",
      governorate: "Cairo",
      area: "Nasr City",
      email: "john@example.com",
      contactNumber: "+20 100 222 3333",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      gender: "Female",
      address: "456 Doctor Avenue",
      governorate: "Alexandria",
      area: "Smouha",
      email: "jane@example.com",
      contactNumber: "+20 100 444 5555",
    },
    {
      id: 3,
      name: "Dr. Mike Johnson",
      gender: "Male",
      address: "789 Health Boulevard",
      governorate: "Giza",
      area: "Dokki",
      email: "mike@example.com",
      contactNumber: "+20 100 666 7777",
    },
  ]);

  const handleAccept = (doctorId) => {
    setDoctors((prevDoctors) =>
      prevDoctors.filter((doc) => doc.id !== doctorId)
    );
  };

  const handleReject = (doctorId) => {
    setDoctors((prevDoctors) =>
      prevDoctors.filter((doc) => doc.id !== doctorId)
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[1000px] mx-auto auto-rows-fr">
      {doctors.map((doc) => (
        <DoctorRequestCard
          key={doc.id}
          doctor={doc}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      ))}
    </div>
  );
}

export default DoctorRequestsView;
