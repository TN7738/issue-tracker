import { useEffect, useState } from "react";
import IssueTable from "./IssueTable";
import IssueSearch from "./IssueSearch";
import IssueAdd from "./IssueAdd";
import IssueEdit from "./IssueEdit";
import IssueFilter from "./IssueFilter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { FILTERED_ISSUES } from "../mutations/issueMutation";

export const GET_ISSUES = gql`
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
    const [issueList, setIssueList] = useState([]);
    const [copyIssueList, setCopyIssueList] = useState([]);

    const [issueFilter, setIssueFilter] = useState({
        status: "",
        owner: "",
    });

    const { loading, error, data } = useQuery(GET_ISSUES, {
        onCompleted: (data) => {
            setIssueList(data.issues);
            setCopyIssueList(data.issues);
        },
    });

    const [filterIssues] = useMutation(FILTERED_ISSUES, {
        variables: {
            status: issueFilter.status,
            owner: issueFilter.owner,
        },
        update: (cache, { data: { filterIssues } }) => {
            console.log(filterIssues);
            cache.writeQuery({
                query: GET_ISSUES,
                data: { issues: filterIssues },
            });
        },
    });

    const [editIssue, setEditIssue] = useState(null);

    const handleSearch = (text) => {
        // const filteredIssueList = copyIssueList.filter((issue) =>
        //     issue.owner.toLowerCase().includes(text.toLowerCase())
        // );
        // setIssueList(filteredIssueList);

        setIssueFilter((currIssueFilter) => ({
            ...currIssueFilter,
            owner: text,
        }));
    };

    const handleFilter = (status) => {
        // if (status) {
        //     const filteredIssueList = copyIssueList.filter(
        //         (issue) => issue.status.toLowerCase() === status.toLowerCase()
        //     );
        //     setIssueList(filteredIssueList);
        // } else {
        //     setIssueList(copyIssueList);
        // }

        setIssueFilter((currIssueFilter) => ({
            ...currIssueFilter,
            status: status,
        }));
    };

    useEffect(() => {
        filterIssues();
    }, [issueFilter]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <>
            {!loading && !error && (
                <>
                    <IssueSearch handleSearch={handleSearch} />
                    <IssueFilter handleFilter={handleFilter} />
                    <IssueTable issueList={data.issues} />
                    {/* <IssueAdd setIssueList={setIssueList} /> */}
                    {/* {editIssue !== null ? (
                        <IssueEdit
                            editIssue={editIssue}
                            setIssueList={setIssueList}
                            setEditIssue={setEditIssue}
                        />
                    ) : null} */}
                </>
            )}
        </>
    );
};

export default IssueList;
