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
        if(state.loading){
            setTimeout(()=>{
                if(state.value===SECURITY_CODE){
                    setState({
                        ...state,
                        loading:false,
                        error:false,
                        confirmed: true
                    })
                }else{
                    setState({...state,loading:false, error:true})
                }
                console.log("Terminando la validacion")
            }, 3000)
        }
        console.log("Terminando el efecto")
    },[state.loading])

    if(!state.deleted && !state.confirmed){
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
    )}else if(state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <h2>Eliminar {name}</h2>
                <p>Pedimos confirmacion. ¿Estas seguro?</p>
                <button onClick={()=>{
                    setState({
                        ...state,
                        deleted: true
                    })
                }}>Si, eliminar</button>
                <button onClick={()=>{
                    setState({
                        ...state,
                        confirmed: false,
                        value: ""
                    })
                }}>Nop, porfa no</button>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
            <h2>Eliminar {name}</h2>
            <button onClick={()=>{
                    setState({
                        ...state,
                        confirmed: false,
                        deleted: false,
                        value: ""
                    })
                }}>Come back</button>
            </React.Fragment>
        )
    }
}
