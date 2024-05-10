import React, { useState } from "react";
import TeacherRequestCard from "../Components/TeacherRequestCard";

function TeacherRequestsView() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Ms. Sarah Johnson",
      gender: "Female",
      address: "123 Teacher Street",
      governorate: "Local",
      area: "Community",
      email: "sarah@example.com",
      contactNumber: "123-456-7890",
    },
    {
      id: 2,
      name: "Mr. David Smith",
      gender: "Male",
      address: "456 Teacher Avenue",
      governorate: "State",
      area: "City",
      email: "david@example.com",
      contactNumber: "987-654-3210",
    },
    {
      id: 3,
      name: "Ms. Emily Brown",
      gender: "Female",
      address: "789 Education Boulevard",
      governorate: "National",
      area: "Rural",
      email: "emily@example.com",
      contactNumber: "567-890-1234",
    },
    // Add more teachers here
  ]);

  const handleAccept = (teacherId) => {
    setTeachers((prevTeachers) =>
      prevTeachers.filter((teacher) => teacher.id !== teacherId)
    );
  };

  const handleReject = (teacherId) => {
    setTeachers((prevTeachers) =>
      prevTeachers.filter((teacher) => teacher.id !== teacherId)
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-56">
      {teachers.map((teacher) => (
        <TeacherRequestCard
          key={teacher.id}
          teacher={teacher}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      ))}
    </div>
  );
}

export default TeacherRequestsView;
