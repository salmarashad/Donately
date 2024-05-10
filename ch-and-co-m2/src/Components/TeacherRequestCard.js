import React from "react";
import cv from "../PDFs/cv.pdf";
import { ReactComponent as Download } from "../SVGs/Download.svg";

function TeacherRequestCard({ teacher, onAccept, onReject }) {
  const { id, name, gender, address, governorate, area, email, contactNumber } =
    teacher;

  const downloadCv = (e) => {
    e.preventDefault();
    const pdfUrl = cv;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Teacher CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-4 flex flex-col h-full">
      <div className="mb-4 flex-grow">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{gender}</p>
        <div className="mt-4">
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>Governorate:</strong> {governorate}
          </p>
          <p>
            <strong>Area:</strong> {area}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Contact Number:</strong> {contactNumber}
          </p>
        </div>
      </div>
      <div className="mt-auto flex items-center">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 mr-2"
          onClick={() => onAccept(id)}
        >
          Accept
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-2"
          onClick={() => onReject(id)}
        >
          Reject
        </button>

        <div>
          <button
            className="text-blue-500 hover:text-blue-600 focus:outline-none"
            onClick={downloadCv}
          >
            <Download className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherRequestCard;
