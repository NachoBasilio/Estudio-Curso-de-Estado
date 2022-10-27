import React, { Component } from 'react';

class ClassState extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: true
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escriba el código de seguridad</p>
        {this.state.error && (
            <p>Ta todo mal</p>
          )}
        <input type='text' placeholder='código de seguridad'/>
        <button onClick={()=>{
            this.setState(prevState => ({error: !prevState.error}))
        }}>Comprobar</button>
      </div>
    );
  }
}

export {ClassState};

