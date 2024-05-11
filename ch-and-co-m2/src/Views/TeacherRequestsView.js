import React, { useState } from "react";
import TeacherRequestCard from "../Components/TeacherRequestCard";

function TeacherRequestsView() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Ms. Sarah Johnson",
      gender: "Female",
      address: "123 Teacher Street",
      governorate: "Cairo",
      area: "Nasr City",
      email: "sarah@example.com",
      contactNumber: "+20 100 222 3333",
    },
    {
      id: 2,
      name: "Mr. David Smith",
      gender: "Male",
      address: "456 Teacher Avenue",
      governorate: "Alexandria",
      area: "Smouha",
      email: "david@example.com",
      contactNumber: "+20 100 444 5555",
    },
    {
      id: 3,
      name: "Ms. Emily Brown",
      gender: "Female",
      address: "789 Education Boulevard",
      governorate: "Giza",
      area: "Dokki",
      email: "emily@example.com",
      contactNumber: "+20 100 666 7777",
    },
    {
      id: 4,
      name: "Mr. Ahmed Hassan",
      gender: "Male",
      address: "101 Teacher Lane",
      governorate: "Luxor",
      area: "Luxor City",
      email: "ahmed@example.com",
      contactNumber: "+20 100 888 9999",
    },
    {
      id: 5,
      name: "Ms. Fatima Ali",
      gender: "Female",
      address: "246 Teacher Road",
      governorate: "Aswan",
      area: "Aswan City",
      email: "fatima@example.com",
      contactNumber: "+20 100 123 4567",
    },
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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[1000px] mx-auto auto-rows-fr">
      {teachers.length === 0 ? (
        <div className="col-span-3 flex justify-center items-center mt-56">
          <p className="text-center text-gray-600">
            No more requests to process :D
          </p>
        </div>
      ) : (
        teachers.map((teacher) => (
          <TeacherRequestCard
            key={teacher.id}
            teacher={teacher}
            onAccept={handleAccept}
            onReject={handleReject}
          />
        ))
      )}
    </div>
  );
}

export default TeacherRequestsView;
