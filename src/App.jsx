import React from "react";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css"

export default function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#01 - Primeiro">
          <Primeiro />
        </Card>
        <Card titulo="#02 - Desafio Aleatório">
          <Aleatorio min={1} max={60} />
        </Card>
        <Card titulo="#03 - Fragmento">
          <Fragmento />
        </Card>
        <Card titulo="#04 - Com Parâmetro">
          <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" />
        </Card>
      </div>
    </div>
  );
}
