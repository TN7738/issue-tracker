const IssueRow = (props) => {
    const rowStyle = props.rowStyle;
    const issue = props.issue;

    const created =
        issue.created !== undefined
            ? issue.created.toDateString()
            : "Date not defined";

    const due = issue.due ? issue.due.toDateString() : "Date not defined";

    // const {rowStyle, issue} = props;

    if (props.issue === undefined) return <h3>IssueRow</h3>;
    return (
        <tr>
            {Object.entries(issue).map((value, i) => {
                if (value[0] === "created") {
                    return (
                        <td key={i} style={rowStyle}>
                            {created}
                        </td>
                    );
                }
                if (value[0] === "due") {
                    return (
                        <td key={i} style={rowStyle}>
                            {due}
                        </td>
                    );
                }
                return (
                    <td key={i} style={rowStyle}>
                        {value[1]}
                    </td>
                );
            })}
            {/* <td style={rowStyle}>{issue.id}</td>
            <td style={rowStyle}>{issue.status}</td>
            <td style={rowStyle}>{issue.owner}</td>
            <td style={rowStyle}>{issue.effort}</td>
            <td style={rowStyle}>{created}</td>
            <td style={rowStyle}>{due}</td>
            <td style={rowStyle}>{issue.title}</td> */}
        </tr>
    );
};

export default IssueRow;
