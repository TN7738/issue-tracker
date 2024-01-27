import { useState } from "react";
import IssueRow from "./IssueRow";

const IssueTable = ({ issueList, setEditIssue }) => {
    const rowStyle = { border: "1px solid silver", padding: 4 };

    const issueRows = issueList.map((issue) => (
        <IssueRow
            key={issue.id}
            rowStyle={rowStyle}
            issue={issue}
            setEditIssue={setEditIssue}
        />
    ));
    // [<IssueRow rowStyle={rowStyle} issue={issue} />,
    // <IssueRow rowStyle={rowStyle} issue={issue} />]

    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(issueList[0]).map((title) => (
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
