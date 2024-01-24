import React, { useState } from "react";

const IssueSearch = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleSearch(searchText);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default IssueSearch;
