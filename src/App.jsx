import React from "react";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

function App() {

  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        
        <Card titulo="#13 - Mega" color="#420d44ff">
          <Mega qtd={6}/>
        </Card>

        <Card titulo="#12 - Contador" color="#477219ff">
          <Contador numeroInicial={10}></Contador>
        </Card>
        <Card titulo="#11 - Componente Controlado" color="#951113">
          <Input />
        </Card>
        <Card titulo="#10 - Comunicação Indireta" color="#9512B3">
          <IndiretaPai />
        </Card>
        <Card titulo="#09 - Comunicação Direta" color="#1512B3">
          <DiretaPai></DiretaPai>
        </Card>
        <Card titulo="#08 - Renderização Condicional" color="#1558B3">
          <ParOuImpar numero={20}></ParOuImpar>
          <ParOuImpar numero={21}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: "Fernando" }} />
          <UsuarioInfo />
          <UsuarioInfo />
        </Card>
        <Card titulo="#07 - Desafio Repetição" color="#8458B3">
          <TabelaProdutos></TabelaProdutos>
        </Card>
        <Card titulo="#06 - Repetição" color="#875a33">
          <ListaAlunos></ListaAlunos>
        </Card>
        <Card titulo="#05 - Componentes com Filhos" color="#cfe5f4">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro"></FamiliaMembro>
            <FamiliaMembro nome="Ana"></FamiliaMembro>
            <FamiliaMembro nome="Gustavo"></FamiliaMembro>
          </Familia>
        </Card>
        <Card titulo="#01 - Primeiro" color="#769a6e">
          <Primeiro />
        </Card>
        <Card titulo="#02 - Desafio Aleatório" color="#fdd0e4">
          <Aleatorio min={1} max={60} />
        </Card>
        <Card titulo="#03 - Fragmento" color="#51074a">
          <Fragmento />
        </Card>
        <Card titulo="#04 - Com Parâmetro" color="#8f83d8">
          <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" />
        </Card>
      </div>
    </div>
  );
}

export default App
