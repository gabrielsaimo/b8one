import React from "react";
import'./Card.css'
export default props =>
<div className="Card" >
    <div className="Conteudo">
        {props.children}
    </div>
    <div className="footer">
        {props.titulo}
    </div>
</div>