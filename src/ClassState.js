import React, { Component } from 'react';

class ClassState extends Component {
  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>Por favor, escriba el código de seguridad</p>
        <input type='text' placeholder='código de seguridad'/>
        <button>Comprobar</button>
      </div>
    );
  }
}

export {ClassState};

