import { useState } from "react";
import IssueAdd from "./IssueAdd";
import IssueFilter from "./IssueFilter";
import IssueTable from "./IssueTable";

const IssueList = () => {
    let num = 10;
    // console.log("Number before", num);

    const [number, setNumber] = useState(num);

    const incrementNum = () => {
        // num++;
        // console.log("Number after", num);
        setNumber(number + 1);
    };

    return (
        <>
            <h2>Issue List</h2>
            <IssueTable />
            <IssueFilter />
            <IssueAdd />
            <p>Number: {number}</p>
            <button onClick={incrementNum}>Increment</button>
        </>
    );
};

export default IssueList;
