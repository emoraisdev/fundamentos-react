import React from "react";

const IndiretaFilho = (props) => {

    const gerarIdade = () => parseInt(Math.random() * 20) + 50;
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                () => {
                    props.onClick('João', gerarIdade(), true);
                }
            }>Fornecer Informações</button>
        </div>
    )
}

export default IndiretaFilho;