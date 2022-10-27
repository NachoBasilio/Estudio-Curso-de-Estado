import React, { Component } from 'react';
import { Loading } from './Loading';

class ClassState extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: true,
      loading: false
    }
  }

  // UNSAFE_componentWillMount(){
  //   console.log("componentWillMount")
  // }


  // componentDidMount(){
  //   console.log("componentDidMount")
  // }

  componentDidUpdate(){
    console.log("Actualizacion")
    if(this.state.loading){
      setTimeout(()=>{
          console.log("Comenzando la validacion")
          this.setState({loading: false})
          console.log("Terminando la validacion")
      }, 3000)
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
        {this.state.loading && (
            <Loading/>
        )}
        <input type='text' placeholder='código de seguridad'/>
        <button onClick={()=>{
            this.setState(prevState => ({loading: !prevState.loading}))
        }}>Comprobar</button>
      </div>
    );
  }
}

export {ClassState};

