import React, { useState } from "react";

const Filter2 = ({ data, setCurrentCardSet }) => {
  const [filters, setFilters] = useState({
    governorate: [],
    area: [],
    type: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedSections, setCollapsedSections] = useState({
    type: true,
    area: true,
    governorate: true,
  });

  const handleCheckboxChange = (filterType, value) => {
    const newFilters = { ...filters };
    const index = newFilters[filterType].indexOf(value);

    if (index === -1) {
      newFilters[filterType].push(value);
    } else {
      newFilters[filterType].splice(index, 1);
    }

    setFilters(newFilters);

    applyFilters(newFilters);
  };

  const applyFilters = (filters) => {
    let filteredData = data.filter((organization) => {
      if (
        filters.governorate.length === 0 ||
        filters.governorate.includes(organization.tags.Governorate)
      ) {
        if (
          filters.area.length === 0 ||
          filters.area.includes(organization.tags.Area)
        ) {
          if (
            filters.type.length === 0 ||
            filters.type.includes(organization.tags.Type)
          ) {
            return true;
          }
        }
      }
      return false;
    });

    setCurrentCardSet(filteredData);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredData = data.filter((organization) => {
      return (
        organization.title.toLowerCase().includes(query) ||
        organization.subtitle.toLowerCase().includes(query) ||
        organization.description.toLowerCase().includes(query)
      );
    });
    setCurrentCardSet(filteredData);
  };

  const toggleSection = (section) => {
    setCollapsedSections({
      ...collapsedSections,
      [section]: !collapsedSections[section],
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="mb-2 px-3 py-2 w-64 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-farahgreen-400"
      />
      <div className="bg-farahgreen-100 p-3 rounded-md flex flex-col gap-2 w-64 shadow-md mr-1">
        <div className="bg-white py-2 px-4 rounded-md">
          <input
            type="checkbox"
            id="governorate-header"
            checked={!collapsedSections["governorate"]}
            onChange={() => toggleSection("governorate")}
            className="mr-2 accent-farahgray-700"
          />
          <label htmlFor="governorate-header">Governorate</label>
          {!collapsedSections["governorate"] && (
            <>
              {Array.from(new Set(data.map((org) => org.tags.Governorate))).map(
                (gov) => (
                  <div key={gov} className="bg-white py-2 px-4 rounded-md">
                    <input
                      type="checkbox"
                      id={`governorate-${gov}`}
                      value={gov}
                      onChange={() => handleCheckboxChange("governorate", gov)}
                      className="mr-2 accent-farahgray-700"
                    />
                    <label htmlFor={`governorate-${gov}`}>{gov}</label>
                  </div>
                )
              )}
            </>
          )}
        </div>
        <div className="bg-white py-2 px-4 rounded-md">
          <input
            type="checkbox"
            id="area-header"
            checked={!collapsedSections["area"]}
            onChange={() => toggleSection("area")}
            className="mr-2 accent-farahgray-700"
          />
          <label htmlFor="area-header">Area</label>
          {!collapsedSections["area"] && (
            <>
              {Array.from(new Set(data.map((org) => org.tags.Area))).map(
                (area) => (
                  <div key={area} className="bg-white py-2 px-4 rounded-md">
                    <input
                      type="checkbox"
                      id={`area-${area}`}
                      value={area}
                      onChange={() => handleCheckboxChange("area", area)}
                      className="mr-2 accent-farahgray-700"
                    />
                    <label htmlFor={`area-${area}`}>{area}</label>
                  </div>
                )
              )}
            </>
          )}
        </div>
        <div className="bg-white py-2 px-4 rounded-md">
          <input
            type="checkbox"
            id="type-header"
            checked={!collapsedSections["type"]}
            onChange={() => toggleSection("type")}
            className="mr-2 accent-farahgray-700"
          />
          <label htmlFor="type-header">Type</label>
          {!collapsedSections["type"] && (
            <>
              {Array.from(new Set(data.map((org) => org.tags.Type))).map(
                (type) => (
                  <div key={type} className="bg-white py-2 px-4 rounded-md">
                    <input
                      type="checkbox"
                      id={`type-${type}`}
                      value={type}
                      onChange={() => handleCheckboxChange("type", type)}
                      className="mr-2 accent-farahgray-700"
                    />
                    <label htmlFor={`type-${type}`}>{type}</label>
                  </div>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter2;
