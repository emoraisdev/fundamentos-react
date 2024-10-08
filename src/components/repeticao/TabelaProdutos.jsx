import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css"

export default function TabelaProdutos(props) {
  const lista = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{lista}</tbody>
      </table>
    </div>
  );
}
