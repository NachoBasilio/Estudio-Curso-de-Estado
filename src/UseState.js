import React from 'react'

const SECURITY_CODE = 'paradigma';

export function UseState({ name }) {

    const [state, setState] = React.useState({
        value: "",
        error: false,
        loading: false,
        deleted: false,
        confirmed: false,
    })

    // const [value, setValue] = React.useState("")
    // const [error, setError] = React.useState(false)
    // const [loading, setLoading] = React.useState(false)


    console.log(state)
    React.useEffect(()=>{
        console.log("Comenzando el efecto")
        if(state.loading){
            setTimeout(()=>{
                if(state.value===SECURITY_CODE){
                    setState({
                        ...state,
                        loading:false,
                        error:false
                    })
                }else{
                    setState({...state,loading:false, error:true})
                }
                console.log("Terminando la validacion")
            }, 3000)
        }
        console.log("Terminando el efecto")
    },[state.loading])

    return (
        <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escriba el código de seguridad</p>
        {(state.error && !state.loading) && (
            <p>Ta todo mal</p>
        )}
        {state.loading && (
            <p>Cargando...</p>
        )}
        <input 
        type='text' 
        placeholder='código de seguridad'
        value={state.value}
        onChange={(event)=>{
            setState({...state,
                value:event.target.value})
        }}
        />
        <button onClick={
            ()=> setState({
                ...state,
                loading: true
            })
        }>Comprobar</button>
        </div>
      )
}
