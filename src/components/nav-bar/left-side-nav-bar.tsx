"use client";
import { useState, useEffect } from "react";
import "./left-side-nav-bar.css";

export default function LeftSideNavBar() {
    const [isHidden, setIsHidden] = useState<boolean>(true);

    function hide() {
        setIsHidden(!isHidden);
    }

    useEffect(() => {
        console.log(isHidden);
    }, [isHidden]);

    return (
        <div id="1" className="left-side-navbar" data-collapse={isHidden}>
            <div>
                <button onClick={() => hide()}>button</button>
                <ul>
                    <li>
                        <a href="/">Teste</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
