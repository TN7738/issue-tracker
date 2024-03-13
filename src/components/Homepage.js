import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <p>Homepage</p>
            <Link to="/issuelist">Issue List - Link</Link>
            <br></br>
            {/* <a href="/issueList">Issue List - anchor</a> */}
        </div>
    );
};

export default Homepage;
