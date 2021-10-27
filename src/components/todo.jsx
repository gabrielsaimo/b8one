import React from "react";
import products from "../data/products";
export default props =>
{
    function getProdutos(){
        return products.map(prod =>{
            return <li key={prod.id}> {prod.nome} - {prod.descricao} <del>{prod.oferta} </del>R$ {prod.preco} </li>
        })
    }
    return(
        <div>
            <ul>
                {getProdutos()}
            </ul>
        </div>
    )
}