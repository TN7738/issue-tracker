import { useState } from "react";
import IssueRow from "./IssueRow";

const IssueTable = ({ issueList }) => {
    const rowStyle = { border: "1px solid silver", padding: 4 };

    if (issueList.length === 0) {
        return <h3>No Data Found.</h3>;
    }

    const issueRows = issueList.map((issue) => (
        <IssueRow key={issue.id} rowStyle={rowStyle} issue={issue} />
    ));
    // [<IssueRow rowStyle={rowStyle} issue={issue} />,
    // <IssueRow rowStyle={rowStyle} issue={issue} />]

    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(issueList[0]).map((title) => {
                        if (title !== "__typename" && title !== "id") {
                            return (
                                <th key={title} style={rowStyle}>
                                    {title}
                                </th>
                            );
                        }
                    })}
                </tr>
            </thead>
            <tbody>{issueRows}</tbody>
        </table>
    );
};

export default IssueTable;
