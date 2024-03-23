import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const headerBtns = [
        {
            link: "/",
            text: "Home",
        },
        {
            link: "/issuelist",
            text: "View Issues",
        },
        {
            link: "/issueadd",
            text: "Add Issue",
        },
    ];

    return (
        <header className="header-wrap">
            <ul>
                {headerBtns.map((headerBtn) => (
                    <li key={headerBtn.link}>
                        <Link to={headerBtn.link}>{headerBtn.text}</Link>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
