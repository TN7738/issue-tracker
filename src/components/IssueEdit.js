import { useEffect, useState } from "react";

const IssueEdit = ({ editIssue, setIssueList, setEditIssue }) => {
    const [newIssue, setNewIssue] = useState({
        id: editIssue.id,
        status: editIssue.status,
        owner: editIssue.owner,
        effort: editIssue.effort,
        created: editIssue.created,
        due: editIssue.due,
        title: editIssue.title,
    });

    const [todo, setTodo] = useState({});

    const handleOnSubmit = (evt) => {
        evt.preventDefault();

        setIssueList((currIssueList) => {
            return currIssueList.map((issue) => {
                if (issue.id === newIssue.id) {
                    return newIssue;
                } else {
                    return issue;
                }
            });
        });

        setEditIssue(null);
    };

    useEffect(() => {
        const fetchTodo = async () => {
            const data = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            const json = await data.json();
            setTodo(json);
        };

        fetchTodo();

        return () => {
            console.log("component unmounted");
        };
    }, []);

    console.log("componentDidMount");

    console.log(todo);

    return (
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
                        value={
                            newIssue.created
                                ? newIssue.created.toISOString().split("T")[0]
                                : ""
                        }
                        onChange={(e) =>
                            setNewIssue((currNewIssue) => {
                                return {
                                    ...currNewIssue,
                                    created: new Date(e.target.value),
                                };
                            })
                        }
                    />
                </div>
                <div>
                    <label>Due</label>
                    <input
                        type="date"
                        value={
                            newIssue.due
                                ? newIssue.due.toISOString().split("T")[0]
                                : ""
                        }
                        onChange={(e) =>
                            setNewIssue((currNewIssue) => {
                                return {
                                    ...currNewIssue,
                                    due: new Date(e.target.value),
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

export default IssueEdit;
