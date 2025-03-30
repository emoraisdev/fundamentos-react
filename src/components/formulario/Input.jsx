import React, { useState } from "react";
import "./Input.css"

const Input = () => {

    const [valor, setValor] = useState('Inicial');

    return (
        <div className="Input">
            <input value={valor} onChange={(e) => {
                setValor(e.target.value);
            }}/>
            <input value={valor} readOnly />
            <input value={undefined} />
        </div>
    )
}

export default Input;