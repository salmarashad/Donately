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

  const { title, subtitle, imgURL, tags } = organization;

  return (
    <div className="organization-card bg-white shadow-md rounded-md overflow-hidden flex flex-col justify-between h-full p-5">
      <div className="flex flex-col items-center w-36 h-full justify-between">
        <div className="flex flex-col items-center gap-0.5">
          {imgURL && (
            <img
              src={imgURL}
              alt={title}
              className="w-full aspect-square object-cover rounded-md border mb-1"
            />
          )}
          <p className="text-center font-semibold leading-[18px]">{title}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        {/* <div className="flex justify-center my-2">{renderTags(tags)}</div> */}
        <button className="text-sm italic border border-farahgreen-300 text-farahgreen-300 px-3 py-1 mt-4 rounded-xl self-center">
          View Details {">"}
        </button>
      </div>
    </div>
  );
};

export default OrganizationCard;
