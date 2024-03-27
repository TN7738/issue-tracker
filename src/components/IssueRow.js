import { useMutation } from "@apollo/client";
import { DELETE_ISSUE } from "../mutations/issueMutation";
import { Link } from "react-router-dom";
import { GET_ISSUES } from "./IssueList";
import { Button } from "react-bootstrap";

const IssueRow = (props) => {
    const rowStyle = props.rowStyle;
    const issue = props.issue;

    const [deletIssue] = useMutation(DELETE_ISSUE, {
        variables: { id: issue.id },
        update: (cache, { data: { deleteIssue } }) => {
            const { issues } = cache.readQuery({ query: GET_ISSUES });
            cache.writeQuery({
                query: GET_ISSUES,
                data: {
                    issues: issues.filter(
                        (issue) => issue.id !== deleteIssue.id
                    ),
                },
            });
        },
    });

    // const created =
    //     issue.created !== undefined
    //         ? issue.created.toDateString()
    //         : "Date not defined";

    // const due = issue.due ? issue.due.toDateString() : "Date not defined";

    // const {rowStyle, issue} = props;

    const handleOnEdit = () => {
        // setEditIssue(issue);
    };

    const handleOnDelete = () => {
        deletIssue();
        // setIssueList((currIssueList) => {
        //     return currIssueList.filter(
        //         (currIssue) => currIssue.id !== issue.id
        //     );
        // });
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
                if (value[0] !== "__typename" && value[0] !== "id") {
                    return (
                        <td key={i} style={rowStyle}>
                            {value[1]}
                        </td>
                    );
                }
            })}
            <td style={rowStyle}>
                <Link to={`/issueedit/${issue.id}`}>Edit</Link>
            </td>
            <td style={rowStyle}>
                <Button variant="danger" onClick={handleOnDelete}>
                    Delete
                </Button>
                {/* <button onClick={handleOnDelete}>Delete</button> */}
            </td>
            <td style={rowStyle}>
                <Link to={`/issuelist/${issue.id}`}>Details</Link>
            </td>
        </tr>
    );
};

export default IssueRow;
