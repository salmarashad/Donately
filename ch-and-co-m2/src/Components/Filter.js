import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

function Filter({data, setCurrentCardSet }) {
    const [categoriesArray, setCategoriesArray] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);
    const [appliedFilters, setAppliedFilters] = useState({});
    const [searchQuery, setSearchQuery] = useState("");
    const [isFulfilled, setIsFulfilled] = useState(false);

    const handleCategoryCheckboxChange = (category, isChecked) => {
        if (isChecked) {
            setAppliedFilters(prevFilters => ({
                ...prevFilters,
                [category]: {}
            }));
            setCheckedCategories([...checkedCategories, category]);
        } else {
            setAppliedFilters(prevFilters => {
                const updatedFilters = { ...prevFilters };
                delete updatedFilters[category];
                return updatedFilters;
            }); 
            setCheckedCategories(checkedCategories.filter((item) => item !== category));
        }
    };

    useEffect(() => {
        setCategoriesArray(parseData(data));
    }, [data]);

    useEffect(() => {
        applyFilters();
    }, [appliedFilters, searchQuery]);

    function parseData(data) {
        const categoriesObj = {};
        data.forEach(item => {
            const { Category, ...tags } = item.tags;
            if (!categoriesObj[Category]) {
                categoriesObj[Category] = {};
            }
            Object.keys(tags).forEach(tag => {
                if (!categoriesObj[Category][tag]) {
                    categoriesObj[Category][tag] = [];
                }
                if (!categoriesObj[Category][tag].includes(tags[tag]) && tags[tag] !== "") {
                    categoriesObj[Category][tag].push(tags[tag]);
                }
            });
        });
        const categoriesArray = Object.keys(categoriesObj).map(category => ({
            category,
            parameters: categoriesObj[category]
        }));
        return categoriesArray;
    }

    const handleFilterChange = (selectedOptions, category, param) => {
        const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setAppliedFilters(prevFilters => ({
            ...prevFilters,
            [category]: {
                ...prevFilters[category],
                [param]: values 
            }
        }));
    };

    function applyFilters() {
        let filteredData = data;

        if (checkedCategories.length > 0) {
            filteredData = filteredData.filter(item => {
                return checkedCategories.includes(item.tags.Category) &&
                    Object.entries(appliedFilters[item.tags.Category] || {}).every(([param, values]) => {
                        return values.length === 0 || values.includes(item.tags[param]);
                    });
            });
        }

        if (isFulfilled) {
            filteredData = filteredData.filter(item => item.tags.isFulfilled === "true");
        }

        if (searchQuery.trim() !== "") {
            filteredData = filteredData.filter(item =>
                Object.entries(item).some(([key, value]) =>
                    key !== 'imgURL' && typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }
    
        setCurrentCardSet(filteredData);
    }

    const handleIsFulfilledChange = (value, param) => {
        const updatedFilters = {};
        if (value === "true") {
            categoriesArray.forEach(category => {
                updatedFilters[category.category] = {
                    ...appliedFilters[category.category],
                    [param]: value
                };
            });
            setIsFulfilled(true)
        }
        else {
            categoriesArray.forEach(category => {
                updatedFilters[category.category] = {
                    ...appliedFilters[category.category],
                    [param]: ""
                };
            });
            setIsFulfilled(false)
        }
        setAppliedFilters(updatedFilters);
    };
    function renderCategories(categories, checkedCategories) {
        return (
            <div className="bg-farahgreen-100 p-3 rounded-md flex flex-col gap-2 w-64 shadow-md mr-1">
                    {categories.some(category => category.parameters.isFulfilled) && <div className="bg-white py-2 px-4 rounded-md">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="isFulfilledCheckbox"      
                                className="mr-2 accent-farahgray-700"
                                value={isFulfilled}
                                onClick={(e) => handleIsFulfilledChange(e.target.checked ? "true" : "false", "isFulfilled")}
                            />
                            <label htmlFor="isFulfilledCheckbox" className="font-medium">Is Fulfilled</label>
                        </div>
                    </div>}
                {categories.map((category, index) => (
                    <div className="bg-white py-2 px-4 rounded-md" key={index}>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id={`category-${index}`}
                                checked={checkedCategories.includes(category.category)}
                                onChange={(e) => handleCategoryCheckboxChange(category.category, e.target.checked)}
                                className="mr-2 accent-farahgray-700"
                            />
                            <label htmlFor={`category-${index}`} className="font-medium">{category.category}</label>
                        </div>
                        {checkedCategories.includes(category.category) && (
                            <div className="flex flex-col gap-4 mt-4 pb-4">
                                {Object.entries(category.parameters).map(([param, values]) => (
                                    <div key={param}>
                                        {param !== "isFulfilled" && (
                                            <>
                                                <label className="block font-medium" htmlFor={param.replace(/_/g, ' ')}>{param.replace(/_/g, ' ')}</label>
                                                <Dropdown
                                                    options={values.map((value) => ({ value, "label": value }))}
                                                    onChange={(selectedOption) => handleFilterChange(selectedOption, category.category, param)}
                                                    multi={true}
                                                />
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-2 px-3 py-2 w-64 rounded-md border border-gray-400 focus:outline-none focus:ring-1 focus:ring-farahgreen-400"
            />
            <div className="sticky top-16 -mb-8 rounded-md filter-scrollbar overflow-y-auto" style={{ maxHeight: 'calc(100vh - 11.1rem)'}}>
                {renderCategories(categoriesArray, checkedCategories)}
            </div>
        </div>
    );
}

export default Filter;
