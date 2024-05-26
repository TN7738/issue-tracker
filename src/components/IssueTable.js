import IssueRow from "./IssueRow";

const IssueTable = () => {
    const issues = [
        {
            id: 1,
            status: "New",
            owner: "Ravan",
            effort: 5,
            created: new Date("2018-08-15"),
            due: undefined,
            title: "Error in console when clicking Add",
        },
        {
            id: 2,
            status: "Assigned",
            owner: "Eddie",
            effort: 14,
            created: new Date("2018-08-16"),
            due: new Date("2018-08-30"),
            title: "Missing bottom border on panel",
        },
    ];
    const rowStyle = { border: "1px solid silver", padding: 4 };

    const issueRows = issues.map((issue) => (
        <IssueRow key={issue.id} rowStyle={rowStyle} issue={issue} />
    ));
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(issues[0]).map((title) => (
                        <th key={title} style={rowStyle}>
                            {title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{issueRows}</tbody>
        </table>
    );
};

export default IssueTable;
