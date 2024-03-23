import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_ISSUE } from "../mutations/issueMutation";
import { useParams } from "react-router-dom";
import { GET_ISSUE } from "./IssuePage";
import { useNavigate } from "react-router-dom";

const IssueEdit = () => {
    const navigate = useNavigate();
    const { issueid } = useParams();

    const { error, loading, data } = useQuery(GET_ISSUE, {
        variables: { id: issueid },
    });

    const [newIssue, setNewIssue] = useState({});

    const [updateIssue] = useMutation(UPDATE_ISSUE, {
        variables: {
            id: newIssue.id,
            status: newIssue.status,
            owner: newIssue.owner,
            effort: parseInt(newIssue.effort),
            created: newIssue.created,
            due: newIssue.due,
            title: newIssue.title,
        },
        update: (cache, { data: { addIssue } }) => {
            const { issue } = cache.readQuery({
                query: GET_ISSUE,
                variables: {
                    id: newIssue.id,
                },
            });
            cache.writeQuery({
                query: GET_ISSUE,
                data: { issue },
            });
        },
    });

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        updateIssue();
        navigate("/issuelist");
        // setIssueList((currIssueList) => {
        //     return currIssueList.map((issue) => {
        //         if (issue.id === newIssue.id) {
        //             return newIssue;
        //         } else {
        //             return issue;
        //         }
        //     });
        // });

        // setEditIssue(null);
    };

    useEffect(() => {
        if (data && "issue" in data) {
            setNewIssue({
                id: data.issue.id,
                status: data.issue.status,
                owner: data.issue.owner,
                effort: data.issue.effort,
                created: data.issue.created,
                due: data.issue.due,
                title: data.issue.title,
            });
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <>
            {!loading && !error && newIssue.id !== undefined && (
                <div className="edit-wrapper">
                    <h3>IssueEdit</h3>
                    <form onSubmit={(e) => handleOnSubmit(e)}>
                        <div>
                            <label>Status</label>
                            <input
                                type="text"
                                value={newIssue.status}
                                onChange={(e) =>
                                    setNewIssue((currNewIssue) => {
                                        return {
                                            ...currNewIssue,
                                            status: e.target.value,
                                        };
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Owner</label>
                            <input
                                type="text"
                                value={newIssue.owner}
                                onChange={(e) =>
                                    setNewIssue((currNewIssue) => {
                                        return {
                                            ...currNewIssue,
                                            owner: e.target.value,
                                        };
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Effort</label>
                            <input
                                type="number"
                                value={newIssue.effort}
                                onChange={(e) =>
                                    setNewIssue((currNewIssue) => {
                                        return {
                                            ...currNewIssue,
                                            effort: e.target.value,
                                        };
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Created</label>
                            <input
                                type="date"
                                value={newIssue.created}
                                onChange={(e) =>
                                    setNewIssue((currNewIssue) => {
                                        return {
                                            ...currNewIssue,
                                            created: e.target.value,
                                        };
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Due</label>
                            <input
                                type="date"
                                value={newIssue.due}
                                onChange={(e) =>
                                    setNewIssue((currNewIssue) => {
                                        return {
                                            ...currNewIssue,
                                            due: e.target.value,
                                        };
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Title</label>
                            <input
                                type="text"
                                value={newIssue.title}
                                onChange={(e) =>
                                    setNewIssue((currNewIssue) => {
                                        return {
                                            ...currNewIssue,
                                            title: e.target.value,
                                        };
                                    })
                                }
                            />
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default IssueEdit;
