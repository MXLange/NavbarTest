"use client";
import "./base.css";

import { ReactNode } from "react";
import { useEffect, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import Image from "next/image";

import menu from "../../images/sandwitch-menu.png";
interface Props {
    children: ReactNode | ReactNode[];
}

interface Teste {
    nome?: string;
}

export default function BaseLayout({ children }: Props) {
    const [isShowing, setIsShowing] = useState<boolean>(false);

    function handleMenu(): void {
        setIsShowing(!isShowing);
    }

    const closeMenu = (data: boolean): void => {
        setIsShowing(data);
    };

    useEffect(() => {
        console.log(isShowing);
    }, [isShowing]);

    return (
        <nav className="navbar">
            <div className="main">
                <header className="header">
                    <button onClick={() => handleMenu()}>
                        <Image
                            src={menu}
                            alt="Ícone sanduíche para menu"
                        ></Image>
                    </button>
                    <a href="#">Offcanvas dark navbar</a>
                </header>
            </div>
            {isShowing && <NavMenu handleShow={closeMenu} />}
        </nav>
    );
}

//https://getbootstrap.com/docs/5.3/components/navbar/
