import React, { useEffect } from "react";
function Filter({filteringOptions, setFilteringOptions, currentData, setCurrentCardSet}) {
    const [tags, setTags] = React.useState(new Set());
    useEffect(() => {
        const tagsSet = new Set(currentData.map(item => item.tags).flat());
        setTags(Array.from(tagsSet));
		if (filteringOptions.length === 0) {
			setCurrentCardSet(currentData);
		  } else {
			const filteredData = currentData.filter(item =>
			  item.tags.some(tag => filteringOptions.includes(tag))
			);
			setCurrentCardSet(filteredData);
		  }
		}, [filteringOptions]);
	const handleFilterChange = (e) => {
		const { value, checked } = e.target;
		setFilteringOptions(prevOptions => {
			if (checked) {
				return [...prevOptions, value];
			} else {
				return prevOptions.filter(option => option !== value);
			}
		});
	};
    const renderTags = () => {
        return (
            <div>
                {tags ? (
                    <div>
                        {Array.from(tags).map((tag) => {
                            return (
                                <div key={tag}>
                                    <input type="checkbox" id={tag} name={tag} value={tag} onClick={handleFilterChange} className="accent-gray-700"/>
                                    <h1 className="text-farahgray-500 mx-4 rounded-lg inline">
                                        {tag}
                                    </h1>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div>
                        <h1>
                            No tags available
                        </h1>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {renderTags()}	
		</div>
    );
}
export default Filter;