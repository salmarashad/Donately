import React from "react";

const OrganizationCard = ({ organization }) => {
  const renderTags = (tags) => {
    const TAG_WIDTH = 90;
    const maxCharacters = Math.round(window.innerWidth / TAG_WIDTH);
    const tagsArray = Object.values(tags).filter((tag) => tag !== "");

    let renderedTags = [];
    let totalCharacters = 0;

    for (const tag of tagsArray) {
      if (totalCharacters + tag.length <= maxCharacters) {
        renderedTags.push(tag);
        totalCharacters += tag.length;
      } else {
        break;
      }
    }

    return renderedTags.map((tag, index) => (
      <span
        key={index}
        className="inline-block text-sm bg-farahgreen-300 text-farahgreen-700 px-3 py-1 rounded-xl font-bold whitespace-nowrap mr-2"
      >
        {tag}
      </span>
    ));
  };

  const { name, type, imgURL, tags } = organization;

  return (
    <div className="organization-card bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between h-full p-4 ">
      <div className="flex justify-center mt-6">
        {imgURL && (
          <img
            src={imgURL}
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
      <div className="flex justify-center my-2">{renderTags(tags)}</div>
      <div className="flex justify-center my-2">
        <button className="text-sm italic border border-farahgreen-300 text-farahgreen-300 px-4 py-1 rounded-xl cursor-pointer mb-6">
          View Details {">"}
        </button>
      </div>
    </div>
  );
};

export default OrganizationCard;
