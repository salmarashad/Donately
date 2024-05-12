import React, { useState } from "react";
import Dropdown from "./Dropdown"; // Assuming the Dropdown component is in a separate file

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
  const [checkedSections, setCheckedSections] = useState({
    type: false,
    area: false,
    governorate: false,
  });

  const handleSelectChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
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

  const handleCheckboxChange = (section) => {
    setCheckedSections({
      ...checkedSections,
      [section]: !checkedSections[section],
    });
    toggleSection(section);
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
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="governorate-checkbox"
              checked={checkedSections["governorate"]}
              onChange={() => handleCheckboxChange("governorate")}
              className="mr-2 accent-farahgray-700"
            />
            <label htmlFor="governorate-checkbox" className="font-medium">Governorate</label>
          </div>
          {!collapsedSections["governorate"] && (
            <Dropdown
              options={Array.from(new Set(data.map((org) => org.tags.Governorate))).map(gov => ({ value: gov, label: gov }))}
              onChange={(selectedOption) => handleSelectChange("governorate", selectedOption.map(option => option.value))}
              multi={true}
            />
          )}
        </div>
        <div className="bg-white py-2 px-4 rounded-md">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="area-checkbox"
              checked={checkedSections["area"]}
              onChange={() => handleCheckboxChange("area")}
              className="mr-2 accent-farahgray-700"
            />
            <label htmlFor="area-checkbox" className="font-medium">Area</label>
          </div>
          {!collapsedSections["area"] && (
            <Dropdown
              options={Array.from(new Set(data.map((org) => org.tags.Area))).map(area => ({ value: area, label: area }))}
              onChange={(selectedOption) => handleSelectChange("area", selectedOption.map(option => option.value))}
              multi={true}
            />
          )}
        </div>
        <div className="bg-white py-2 px-4 rounded-md">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="type-checkbox"
              checked={checkedSections["type"]}
              onChange={() => handleCheckboxChange("type")}
              className="mr-2 accent-farahgray-700"
            />
            <label htmlFor="type-checkbox" className="font-medium">Type</label>
          </div>
          {!collapsedSections["type"] && (
            <Dropdown
              options={Array.from(new Set(data.map((org) => org.tags.Type))).map(type => ({ value: type, label: type }))}
              onChange={(selectedOption) => handleSelectChange("type", selectedOption.map(option => option.value))}
              multi={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter2;
