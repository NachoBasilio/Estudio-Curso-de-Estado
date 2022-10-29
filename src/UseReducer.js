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
 
    const onCheck = () => dispatch({ type: actionTypes.CHECK })
      
    const onConfirm = () => dispatch({ type: actionTypes.CONFIRM })
      
    const onDelete = () => dispatch({ type: actionTypes.DELETE })
      
    const onError = () => dispatch({ type: actionTypes.ERROR })
      
    const onReset = () => dispatch({ type: actionTypes.RESET })
      
    const onWrite = (newValue) =>{
        dispatch({type: 'WRITE',payload: newValue})
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
            //dispatch({type: 'WRITE',payload: event.target.value})
            onWrite(event.target.value)
        }}/>
        <button onClick={onCheck}>Comprobar</button>
        </div>
    )}else if(state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <h2>Eliminar {name}</h2>
                <p>Pedimos confirmacion. ¿Estas seguro?</p>
                <button onClick={onDelete}>Si, eliminar</button>
                <button onClick={onReset}>Nop, porfa no</button>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
            <h2>Eliminar {name}</h2>
            <button onClick={onReset}>Come back</button>
            </React.Fragment>
        )
    }
}

const actionTypes = {
    CONFIRM: 'CONFIRM',
    ERROR: 'ERROR',
    CHECK: 'CHECK',
    RESET: 'RESET',
    DELETE: 'DELETE',
    WRITE: 'WRITE'
}

const reducerOBJECT = (state, payload) => ({
    [actionTypes.ERROR]: {
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.CONFIRM]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    [actionTypes.CHECK]: {
        ...state,
        loading: true,
        error: false,  
    },
    [actionTypes.RESET]:{
        ...state,
        value: '',
        confirmed: false,
        deleted: false,
    },
    [actionTypes.DELETE]:{
        ...state,
        deleted: true,
    },
    [actionTypes.WRITE]:{
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