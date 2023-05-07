"use client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { ReactNode } from "react";
import NavMenuBootstrap from "../NavMenuBootstrap/NavMenuBootstrap";

interface Props {
    children: ReactNode | ReactNode[];
}

const listItems = [
    {
        name: "Home2",
        href: "/home2"
    },
    {
        name: "Link",
        href: "/link"
    },
    {
        name: "Usuários",
        href: "/users"
    }
];

export default function BaseLayoutBootStrap({ children }: Props) {
    return (
        <div className="row d-flex flex-wrap">
            <div className="col-12">
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            Offcanvas dark navbar
                        </a>
                    </div>
                    <NavMenuBootstrap></NavMenuBootstrap>
                </nav>
            </div>
            <div className="col-12 bg-primary ">{children}</div>
        </div>
    );
}
