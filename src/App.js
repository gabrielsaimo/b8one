import React from "react";
import Card from "./components/card";
import "./components/laylout/card.css"
function app() {
  const arry = [{ id: 1, img:"https://www.girafa.com.br/visao/default/img/produtos/Informatica/Monitores/monitor-gamer-curvo-samsung-odyssey-24-lc24rg50fqlmzd-hdmi-4ms-144hz-amd-free-sync-98964-1620672206-6.jpg", nome: "Monitor LED 27'' Gamer", oferta: 3000, preco: 2117.59 },
  { id: 2,img:"https://www.girafa.com.br/visao/default/img/produtos/Informatica/Acessorios-de-informatica/teclado-gamer-logitech-g213-prodigy-99371-1620837501-5.jpg", nome: "Teclado Gamer ", oferta: 3000, preco: 100.59 },
  { id: 3,img:"https://http2.mlstatic.com/D_NQ_NP_2X_741089-MLB41130091861_032020-F.webp 2x", nome: 'Mouse Gamer', oferta: 3000, preco: 250.59 }]
  return (<div className="App">

    <Card set={arry}></Card>

  </div>)
}
export default app

