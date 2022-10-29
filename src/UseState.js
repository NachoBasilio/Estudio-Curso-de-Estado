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

    const onCheck = ()=>{
        setState({
            ...state,
            loading: true
        })
    }

    const onConfirm = ()=>{
        setState({
            ...state,
            loading:false,
            error:false,
            confirmed: true
        })
    }

    const onWrite = (event)=>{
        setState({...state,value:event.target.value})
    }

    const onError= ()=>{
        setState({...state,loading:false, error:true})
    }
    const onReset = ()=>{
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: ""
        })
    }
    const onDelete = ()=>{
        setState({
            ...state,
            deleted: true,
        })
    }
    console.log(state)
    React.useEffect(()=>{
        if(state.loading){
            setTimeout(()=>{
                if(state.value===SECURITY_CODE){
                    onConfirm()
                }else{
                    onError()
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
            onWrite(event)
        }}/>
        <button onClick={
            ()=> onCheck()
        }>Comprobar</button>
        </div>
    )}else if(state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <h2>Eliminar {name}</h2>
                <p>Pedimos confirmacion. ¿Estas seguro?</p>
                <button onClick={()=>{
                    onDelete()
                }}>Si, eliminar</button>
                <button onClick={()=>{
                    onReset()
                }}>Nop, porfa no</button>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
            <h2>Eliminar {name}</h2>
            <button onClick={()=>{
                    onReset()
                }}>Come back</button>
            </React.Fragment>
        )
    }
}
