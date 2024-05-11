import React, { useState } from "react";
import cv from "../PDFs/cv.pdf";
import { ReactComponent as Download } from "../SVGs/Download.svg";
import { ReactComponent as SpinnerSVG } from "../SVGs/spinner.svg";

function VerificationOrganizationCard({ organization, onAccept, onReject }) {
  const {
    name,
    type,
    address,
    governorate,
    area,
    email,
    contactNumber,
    firstName,
    lastName,
  } = organization;

  const downloadCv = (e) => {
    e.preventDefault();
    const pdfUrl = cv;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Farah Ahmad - CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [loadingAccept, setLoadingAccept] = useState(false);
  const [loadingReject, setLoadingReject] = useState(false);

  function timeout(delay) {
      return new Promise( res => setTimeout(res, delay) );
  }

  const accept = async (organizationId) => {
    if(!loadingAccept && !loadingReject) {
      setLoadingAccept(true);
      await timeout(1000);
      setLoadingAccept(false);
      onAccept(organizationId);
    }
  };

  const reject = async (organizationId) => {
    if(!loadingAccept && !loadingReject) {
      setLoadingReject(true);
      await timeout(1000);
      setLoadingReject(false);
      onReject(organizationId);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6 mb-4 flex flex-col h-full">
      <div className="mb-4 flex-grow">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-farahgray-500">{type}</p>
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
          <p>
            <strong>Contact Person:</strong> {firstName} {lastName}
          </p>
        </div>
      </div>
      <div className="mt-auto flex items-center">
        <button
          className="py-1 px-3 bg-accept-400 text-white rounded-md hover:bg-accept-500 mr-2 h-[32px] w-[74px]"
          onClick={() => accept(organization.id)}
        >
          {loadingAccept ? <SpinnerSVG className="w-full"/> : "Accept"}
        </button>
        <button
          className="py-1 px-3 bg-reject-500 text-white rounded-md hover:bg-reject-600 mr-2 h-[32px] w-[70px]"
          onClick={() => reject(organization.id)}
        >
          {loadingReject ? <SpinnerSVG className="w-full"/> : "Reject"}
        </button>
        <div>
          <button
            className="hover:text-blue-500 mt-2"
            onClick={downloadCv}
          >
            <Download className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificationOrganizationCard;
