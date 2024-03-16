import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_ISSUE = gql`
    query getIssue($id: ID!) {
        issue(id: $id) {
            id
            status
            owner
            effort
            created
            due
            title
        }
    }
`;

const IssuePage = () => {
    const { issueid } = useParams();

    const { error, loading, data } = useQuery(GET_ISSUE, {
        variables: { id: issueid },
    });

    if (error) return <p>Error!!!</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <>
            {!loading && !error && (
                <div className="issue-table-wrapper">
                    <table>
                        {Object.entries(data.issue).map((issueData) => {
                            if (
                                issueData[0] !== "__typename" &&
                                issueData[0] !== "id"
                            ) {
                                return (
                                    <tr key={issueData[0]}>
                                        <th>{issueData[0]}</th>
                                        <td>{issueData[1]}</td>
                                    </tr>
                                );
                            }
                        })}
                    </table>
                </div>
            )}
        </>
    );
};

export default IssuePage;
