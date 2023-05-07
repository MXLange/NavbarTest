import "./nav-menu.css";
import Image from "next/image";
import x from "../../images/x.png";
import arrow from "../../images/arrow.png";
import { useState } from "react";

const listItems = [
    {
        name: "Home",
        href: "/home2"
    },
    {
        name: "Home",
        href: "/home2"
    },
    {
        name: "Link",
        href: "/link"
    }
];

const dropdownItems = [
    {
        name: "Home",
        href: "/home2"
    },
    {
        name: "Home",
        href: "/home2"
    },
    {
        name: "Link",
        href: "/link"
    }
];

export default function NavMenu(props: any) {
    const [isDropCollapsed, setIsDropCollapsed] = useState<boolean>(true);

    function closeMenu() {
        props.handleShow(false);
    }

    function openDropdown() {
        setIsDropCollapsed(!isDropCollapsed);
    }
    return (
        <div className="menu">
            <div className="main">
                <header>
                    <h5>Dark offcanvas</h5>
                    <button onClick={() => closeMenu()}>
                        <Image src={x} alt="Botão de fechar" />
                    </button>
                </header>
                <div className="list">
                    <ul>
                        {listItems.map((item) => {
                            const { name, href } = item;
                            return (
                                <li>
                                    <a href={href}>{name}</a>
                                </li>
                            );
                        })}
                        <li className="list-drop">
                            <button
                                type="button"
                                onClick={() => openDropdown()}
                            >
                                Dropdown{" "}
                                <Image
                                    src={arrow}
                                    alt="Seta do menu dropdown"
                                ></Image>
                            </button>
                        </li>
                        <ul className="drop" data-collapse={isDropCollapsed}>
                            {dropdownItems.map((item) => {
                                const { name, href } = item;
                                return (
                                    <li>
                                        <a href={href}>{name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </ul>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <button type="button">Search</button>
                </div>
            </div>
        </div>
    );
}
