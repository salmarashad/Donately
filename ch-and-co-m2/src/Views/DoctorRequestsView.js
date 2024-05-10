import React, { useState } from "react";
import DoctorRequestCard from "../Components/DoctorRequestCard";

function DoctorRequestsView() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      gender: "Male",
      address: "123 Doctor Street",
      governorate: "Local",
      area: "Community",
      email: "john@example.com",
      contactNumber: "123-456-7890",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      gender: "Female",
      address: "456 Doctor Avenue",
      governorate: "State",
      area: "City",
      email: "jane@example.com",
      contactNumber: "987-654-3210",
    },
    {
      id: 3,
      name: "Dr. Mike Johnson",
      gender: "Male",
      address: "789 Health Boulevard",
      governorate: "National",
      area: "Rural",
      email: "mike@example.com",
      contactNumber: "567-890-1234",
    },
    // Add more doctors here
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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-56">
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
