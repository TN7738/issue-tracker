const IssueRow = ({ rowStyle, issue }) => {
    const created = issue.created
        ? issue.created.toDateString()
        : "Date not defined";
    const due = issue.due ? issue.due.toDateString() : "Date not defined";
    return (
        <tr>
            {Object.entries(issue).map((value) => {
                if (value[0] === "created") {
                    return (
                        <td key={value[0]} style={rowStyle}>
                            {created}
                        </td>
                    );
                } else if (value[0] === "due") {
                    return (
                        <td key={value[0]} style={rowStyle}>
                            {due}
                        </td>
                    );
                }
                return (
                    <td key={value[0]} style={rowStyle}>
                        {value[1]}
                    </td>
                );
            })}
        </tr>
    );
};

export default IssueRow;
