import React, { useEffect, useState } from "react";

function Filter({ filteringOptions, setFilteringOptions, data, setCurrentCardSet }) {
    const [categoriesArray, setCategoriesArray] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);
    const [appliedFilters, setAppliedFilters] = useState({});

    const handleCategoryCheckboxChange = (category, isChecked) => {
        if (isChecked) {
            setCheckedCategories([...checkedCategories, category]);
        } else {
            setCheckedCategories(checkedCategories.filter((item) => item !== category));
        }
    };

    useEffect(() => {
        setCategoriesArray(parseData(data));
    }, [data]);

    useEffect(() => {
        applyFilters();
    }, [appliedFilters]);

    function parseData(data) {
        const categoriesObj = {};
        data.forEach(item => {
            const { type, ...tags } = item.tags;
            if (!categoriesObj[type]) {
                categoriesObj[type] = {};
            }
            Object.keys(tags).forEach(tag => {
                if (!categoriesObj[type][tag]) {
                    categoriesObj[type][tag] = [];
                }
                if (!categoriesObj[type][tag].includes(tags[tag])) {
                    categoriesObj[type][tag].push(tags[tag]);
                }
            });
        });
        const categoriesArray = Object.keys(categoriesObj).map(category => ({
            category,
            parameters: categoriesObj[category]
        }));
        return categoriesArray;
    }

    const handleFilterChange = (e, category, param) => {
        const value = e.target.value;
        setAppliedFilters(prevFilters => ({
            ...prevFilters,
            [category]: {
                ...prevFilters[category],
                [param]: value
            }
        }));
    };

    function applyFilters() {
        const filteredData = data.filter(item => {
            return checkedCategories.includes(item.tags.type) &&
                Object.entries(appliedFilters[item.tags.type] || {}).every(([param, value]) => {
                    return value === "" || item.tags[param] === value;
                });
        });
        setCurrentCardSet(filteredData);
    }

    function renderCategories(categories, checkedCategories) {
        return (
            <div className="bg-gray-100 p-4 rounded-md">
                {categories.map((category, index) => (
                    <div className="bg-white p-4 rounded-md mb-4" key={index}>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id={`category-${index}`}
                                checked={checkedCategories.includes(category.category)}
                                onChange={(e) => handleCategoryCheckboxChange(category.category, e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor={`category-${index}`} className="text-lg font-semibold">{category.category}</label>
                        </div>
                        {checkedCategories.includes(category.category) && (
                            <div className="mt-4">
                                {Object.entries(category.parameters).map(([param, values]) => (
                                    <div className="mt-2" key={param}>
                                        <label className="block font-medium" htmlFor={param}>{param}</label>
                                        <select
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            id={param}
                                            name={param}
                                            onChange={(e) => handleFilterChange(e, category.category, param)}
                                        >
                                            <option value="">All</option>
                                            {values.map((value, index) => (
                                                <option key={index} value={value}>{value}</option>
                                            ))}
                                        </select>
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
            {renderCategories(categoriesArray, checkedCategories)}
        </div>
    );
}

export default Filter;
