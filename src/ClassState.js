import React, { Component } from 'react';
import { Loading } from './Loading';
const SECURITY_CODE = 'paradigma';

class ClassState extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: "",
      error: false,
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
        if(this.state.value===SECURITY_CODE){
          this.setState({loading:false, error:false})
        }else{
          this.setState({loading:false, error:true})

      }
      }, 3000)
  }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escriba el código de seguridad</p>
        {(this.state.error && !this.state.loading) && (
            <p>Ta todo mal</p>
        )}
        {this.state.loading && (
            <Loading/>
        )}
        <input 
        type='text' 
        placeholder='código de seguridad'
        value={this.state.value}
        onChange={(event)=>{
          this.setState({value: event.target.value})
        }}
        />
        <button onClick={()=>{
            this.setState(prevState => ({loading: !prevState.loading}))
        }}>Comprobar</button>
      </div>
    );
  }
}

export {ClassState};

