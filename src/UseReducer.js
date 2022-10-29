import React from 'react'

const SECURITY_CODE = 'paradigma';
const initialState = {
	value: '',
	loading: false,
	error: false,
	deleted: false,
	confirmed: false,
}


export function UseReducer({ name }) {

    const [state, dispatch] = React.useReducer(reducer, initialState)


    console.log(state)
    React.useEffect(()=>{
        if(state.loading){
            setTimeout(()=>{
                if(state.value===SECURITY_CODE){
                    dispatch({
                        type:'CONFIRM'
                    })
                }else{
                    dispatch({
                        type:'ERROR'
                    })
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
            dispatch({type: 'WRITE',payload: event.target.value})
        }}/>
        <button onClick={
            ()=> dispatch({
                type:'CHECK'
            })
        }>Comprobar</button>
        </div>
    )}else if(state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <h2>Eliminar {name}</h2>
                <p>Pedimos confirmacion. ¿Estas seguro?</p>
                <button onClick={()=>{
                    dispatch({
                        type: 'DELETE'
                    })
                }}>Si, eliminar</button>
                <button onClick={()=>{
                    dispatch({
                        type: 'RESET'
                    })
                }}>Nop, porfa no</button>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
            <h2>Eliminar {name}</h2>
            <button onClick={()=>{
                    dispatch({
                        type: 'RESET'
                    })
                }}>Come back</button>
            </React.Fragment>
        )
    }
}

const reducerOBJECT = (state, payload) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    'CHECK': {
        ...state,
        loading: true,
        error: false,  
    },
    'RESET':{
        ...state,
        value: '',
        confirmed: false,
        deleted: false,
    },
    'DELETE':{
        ...state,
        deleted: true,
    },
    'WRITE':{
        ...state,
        value: payload,
    }
})
  
 const reducer = (state, action) => {
    if (reducerOBJECT(state)[action.type]) {
        return reducerOBJECT(state, action.payload)[action.type];
    } else {
        return {
            ...state,
        }
    }
 }