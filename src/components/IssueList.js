import { useState } from "react";
import IssueTable from "./IssueTable";
import IssueSearch from "./IssueSearch";
import IssueAdd from "./IssueAdd";
import IssueEdit from "./IssueEdit";
import IssueFilter from "./IssueFilter";
import { gql, useQuery } from "@apollo/client";

const GET_ISSUES = gql`
    query getIssues {
        issues {
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

const IssueList = () => {
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
        {
            id: 3,
            status: "Assigned",
            owner: "Hally",
            effort: 14,
            created: new Date("2018-08-16"),
            due: new Date("2018-08-30"),
            title: "Missing bottom border on panel",
        },
        {
            id: 4,
            status: "Complete",
            owner: "edger",
            effort: 14,
            created: new Date("2018-08-16"),
            due: new Date("2018-08-30"),
            title: "Missing bottom border on panel",
        },
    ];

    const [issueList, setIssueList] = useState([]);

    const { loading, error, data } = useQuery(GET_ISSUES, {
        onCompleted: (data) => {
            setIssueList(data.issues);
        },
    });

    const [editIssue, setEditIssue] = useState(null);

    // console.log(editIssue);

    const handleSearch = (text) => {
        const filteredIssueList = issues.filter((issue) =>
            issue.owner.toLowerCase().includes(text.toLowerCase())
        );
        setIssueList(filteredIssueList);
    };

    const handleFilter = (status) => {
        if (status) {
            const filteredIssueList = issues.filter(
                (issue) => issue.status === status
            );
            setIssueList(filteredIssueList);
        } else {
            setIssueList(issues);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <>
            {!loading && !error && issueList.length !== 0 && (
                <>
                    {console.log(issueList)}
                    <IssueSearch handleSearch={handleSearch} />
                    <IssueFilter handleFilter={handleFilter} />
                    <IssueTable
                        issueList={issueList}
                        setEditIssue={setEditIssue}
                        setIssueList={setIssueList}
                    />
                    <IssueAdd setIssueList={setIssueList} />
                    {editIssue !== null ? (
                        <IssueEdit
                            editIssue={editIssue}
                            setIssueList={setIssueList}
                            setEditIssue={setEditIssue}
                        />
                    ) : null}
                </>
            )}
        </>
    );
};

export default IssueList;
