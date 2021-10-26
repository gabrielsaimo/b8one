import React from "react";
import products from "../data/products";
export default props =>
{
    function getProdutos(){
        return products.map(prod =>{
            return <li key={prod.id}> {prod.nome} - {prod.descricao} - R$ {prod.preco} </li>
        })
    }
    return(
        <div>
            <h2>repetição</h2>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}