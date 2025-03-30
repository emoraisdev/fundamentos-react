import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {

    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [isNerd, setIsNerd] = useState(false);

    function fornecerInformacoes(nome, idade, isNerd){
        setNome(nome);
        setIdade(idade);
        setIsNerd(isNerd);
    }

    return (
        <div>
            <div>
                <span>{nome}</span>
                <span> {idade}</span>
                <span> {isNerd ? 'É Nerd' : 'Não é Nerd'}</span>
            </div>
            <IndiretaFilho onClick={fornecerInformacoes}/>
        </div>
    )
}

export default IndiretaPai;