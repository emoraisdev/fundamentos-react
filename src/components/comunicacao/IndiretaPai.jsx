import React from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {

    function fornecerInformacoes(nome, idade, nerd){
        console.log(nome, idade, nerd);

    }

    return (
        <div>
            Pai
            <IndiretaFilho onClick={fornecerInformacoes}/>
        </div>
    )
}

export default IndiretaPai;