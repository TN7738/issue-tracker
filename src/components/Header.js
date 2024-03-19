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
    ];

    return (
        <header className="header-wrap">
            <ul>
                {headerBtns.map((headeBtn) => (
                    <li key={headerBtns.link}>
                        <Link to={headeBtn.link}>{headeBtn.text}</Link>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
