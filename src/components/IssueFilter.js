const IssueFilter = ({ handleFilter }) => {
    return (
        <>
            <h3>IssueFilter</h3>
            <select
                name="statuses"
                onChange={(e) => handleFilter(e.target.value)}
            >
                <option value=""></option>
                <option value="New">New</option>
                <option value="Assigned">Assigned</option>
                <option value="Complete">Complete</option>
            </select>
        </>
    );
};

export default IssueFilter;
