import React from 'react'

const SECURITY_CODE = 'paradigma';

export function UseState({ name }) {
    const [value, setValue] = React.useState("")
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)



    React.useEffect(()=>{
        console.log("Comenzando el efecto")
        if(loading){
            setTimeout(()=>{
                if(value===SECURITY_CODE){
                    setLoading(false)
                }else{
                    setLoading(false)
                    setError(true)
                }
                console.log("Terminando la validacion")
            }, 3000)
        }
        console.log("Terminando el efecto")
    },[loading])

    return (
        <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escriba el código de seguridad</p>
        {(error && !loading) && (
            <p>Ta todo mal</p>
        )}
        {loading && (
            <p>Cargando...</p>
        )}
        <input 
        type='text' 
        placeholder='código de seguridad'
        value={value}
        onChange={(event)=>{
            setValue(event.target.value)
        }}
        />
        <button onClick={
            ()=> setLoading(true)
        }>Comprobar</button>
        </div>
      )
}
