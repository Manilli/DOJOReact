import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Bd from './bd';
class App extends Component {

constructor(props){
  super(props);
  this.state={nombre:""}
  this.buscar=this.buscar.bind(this);
}

buscar(articulo){
  var bandera= 0;
  for (var i = 0; i < Bd.length; i++) {

    if(articulo.target.value == Bd[i].codigo)      {
        this.setState({nombre: "Se encontro el usuario con codigo " + Bd[i].codigo +  ", su nombre es " + Bd[i].nombre})
        bandera=1;
        }
        if (bandera == 0) {
          this.setState({nombre: "No se encontro el usuario :("})
        }
  }
}


  render() {
    return (
      <div>
      <h1>Buscar Usuarios por codigo</h1>
      <input type="text" placeholder="codigo" onChange={this.buscar}></input>
        <p>{this.state.nombre}</p>
      </div>
    );
  }
}

export default App;
