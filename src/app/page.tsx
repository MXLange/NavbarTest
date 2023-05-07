"use client";
import "./login.css";
import { useState } from "react";
import BaseLayout from "@/components/BaseLayout/base-layout";

export interface User {
    nome?: string;
    idade?: number;
}

export default function Home() {
    const [teste, setTeste] = useState<User | null>();

    function handleChange(e: any) {
        const { name, value } = e.target;
        setTeste({ ...teste, [name]: value });
    }

    function submit() {
        console.log(teste?.nome);
        console.log(teste?.idade);
    }
    return (
        <BaseLayout>
            <div className="login">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    placeholder="Escreva seu nome"
                    name="nome"
                    onChange={(e) => handleChange(e)}
                />
                <input
                    type="number"
                    placeholder="Escreva seu nome"
                    name="idade"
                    onChange={(e) => handleChange(e)}
                />
                <button type="button" onClick={() => submit()}>
                    Enviar
                </button>
            </div>
        </BaseLayout>
    );
}
