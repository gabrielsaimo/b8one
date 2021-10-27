import React from "react";
import Card from './components/layout/Card';
import Repeticao from "./components/todo";
export default props =>
  <div className="App">
    <Card >
      <Repeticao></Repeticao>
    </Card>
    <Card >
      <Repeticao ></Repeticao>
    </Card>
  </div>
