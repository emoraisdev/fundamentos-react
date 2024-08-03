import React from 'react'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Primeiro from './components/basicos/Primeiro'
import Aleatorio from './components/basicos/Aleatorio'

export default function App(props){

    return (
        <div>
            <h1>Fundamentos React</h1>
            <Aleatorio min={1} max={60}/>
            <Fragmento/>
            <ComParametro
                titulo="Segundo Componente"
                subtitulo="Muito legal!"/>
            <Primeiro/>
        </div>
    )
}