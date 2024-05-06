import React from "react";

const OrganizationCard = ({ organization }) => {
  // Check if organization object is defined
  if (!organization) {
    return <div>No organization data available</div>;
  }

  // Check if name, image, and type properties exist before accessing
  const { name, image, type } = organization;

  return (
    <div className="organization-card bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full p-4 ">
      <div className="flex justify-center mt-6">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-32 h-32 object-cover rounded-md mb-4 "
            style={{ borderRadius: "8px" }}
          />
        )}
      </div>
      <div className="flex justify-center my-1">
        <p className="text-lg text-center font-semibold">{name}</p>
      </div>
      <div className="flex justify-center mt-1 mb-4">
        <p className="text-sm text-gray-500">{type}</p>
      </div>
      <div className="flex justify-center my-2">
        <button className="text-sm italic border border-farahgreen-300 text-farahgreen-300 px-4 py-1 rounded-xl cursor-pointer mb-6">
          View Details {">"}
        </button>
      </div>
    </div>
  );
};

export default OrganizationCard;
