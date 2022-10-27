import React from 'react'

export function UseState({ name }) {
    const [error, setError] = React.useState(true)
    const [loading, setLoading] = React.useState(false)
    React.useEffect(()=>{
        console.log("Comenzando el efecto")
        if(loading){
            setTimeout(()=>{
                console.log("Comenzando la validacion")
                setLoading(false)
                console.log("Terminando la validacion")
            }, 3000)
        }
        console.log("Terminando el efecto")
    },[loading])
    return (
        <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escriba el código de seguridad</p>
        {error && (
            <p>Ta todo mal</p>
        )}
        {loading && (
            <p>Cargando...</p>
        )}
        <input type='text' placeholder='código de seguridad'/>
        <button onClick={
            ()=> setLoading(true)
        }>Comprobar</button>
        </div>
      )
}
