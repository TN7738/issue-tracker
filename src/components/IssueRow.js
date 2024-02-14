const IssueRow = (props) => {
    const rowStyle = props.rowStyle;
    const issue = props.issue;
    const setEditIssue = props.setEditIssue;
    const setIssueList = props.setIssueList;

    // const created =
    //     issue.created !== undefined
    //         ? issue.created.toDateString()
    //         : "Date not defined";

    // const due = issue.due ? issue.due.toDateString() : "Date not defined";

    // const {rowStyle, issue} = props;

    const handleOnEdit = () => {
        setEditIssue(issue);
    };

    const handleOnDelete = () => {
        setIssueList((currIssueList) => {
            return currIssueList.filter(
                (currIssue) => currIssue.id !== issue.id
            );
        });
    };

    if (props.issue === undefined) return <h3>IssueRow</h3>;
    return (
        <tr>
            {Object.entries(issue).map((value, i) => {
                // if (value[0] === "created") {
                //     return (
                //         <td key={i} style={rowStyle}>
                //             {created}
                //         </td>
                //     );
                // }
                // if (value[0] === "due") {
                //     return (
                //         <td key={i} style={rowStyle}>
                //             {due}
                //         </td>
                //     );
                // }
                if (value[0] !== "__typename") {
                    return (
                        <td key={i} style={rowStyle}>
                            {value[1]}
                        </td>
                    );
                }
            })}
            <td style={rowStyle}>
                <button onClick={handleOnEdit}>Edit</button>
            </td>
            <td style={rowStyle}>
                <button onClick={handleOnDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default IssueRow;
