import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {

    return (
        <div>
            <DiretaFilho texto='Filho 1' numero={20} bool={true}/>
            <DiretaFilho texto='Filho 2' numero={35} bool={false}/>
        </div>
    )
}

export default DiretaPai;