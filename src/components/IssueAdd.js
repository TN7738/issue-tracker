import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ISSUE } from "../mutations/issueMutation";

const IssueAdd = ({ setIssueList }) => {
    const [newIssue, setNewIssue] = useState({
        id: "",
        status: "",
        owner: "",
        effort: 0,
        created: "",
        due: "",
        title: "",
    });

    const [addIssue] = useMutation(ADD_ISSUE, {
        variables: {
            status: newIssue.status,
            owner: newIssue.owner,
            effort: parseInt(newIssue.effort),
            created: newIssue.created,
            due: newIssue.due,
            title: newIssue.title,
        },
        onCompleted: (newValue) => {
            setNewIssue((currIssueList) => {
                return {
                    ...currIssueList,
                    id: newValue.addIssue.id,
                };
            });
        },
    });

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        addIssue();
        setIssueList((currIssueList) => {
            return [
                ...currIssueList,
                {
                    id: newIssue.id,
                    status: newIssue.status,
                    owner: newIssue.owner,
                    effort: newIssue.effort,
                    created: newIssue.created,
                    due: newIssue.due,
                    title: newIssue.title,
                },
            ];
        });

        setNewIssue({
            status: "",
            owner: "",
            effort: 0,
            created: "",
            due: "",
            title: "",
        });
    };

    return (
        <div>
            <h3>IssueAdd</h3>
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
    );
};

export default IssueAdd;
