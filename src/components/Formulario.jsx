import {useState} from 'react'


function Formulario() {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")

        
        // mostrar si hay error
            const [error, setError] = useState(false)
            const [success, setSuccess] = useState(false)
            const [errorMail, setErrorMail] = useState(false)
        //Función antes de enviar el formulario
        const validarInput = (e) => {
            e.preventDefault()
            if (nombre === '' || email === '' || mensaje === '') {
                
              setError(true)
              return
            }if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
                setErrorMail(true)
                
                return
              }
            
            setError(false)
            setSuccess(true)
            
          }

        
    

    return (
    <>
        <form  onSubmit={validarInput}>

               
                <input type="text" name="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}
value={nombre}/>
                <input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
value={email}/>
                <textarea  name="mensaje" placeholder="Mensaje" onChange={(e) => setMensaje(e.target.value)}
value={mensaje}></textarea>
          
                <button className="btn btn-outline-secondary btn-form" type="submit">Enviar</button>
        </form>
        <br />
        {error ? <div className="alert alert-danger" role="alert">¡Todos los campos son obligatorios!</div>:null}
        {errorMail ? <div className="alert alert-danger" role="alert">¡No es un correo correcto!</div>:null}
        {success ? <div className="alert alert-success" role="alert">¡Los datos fueron enviados con exito!</div>:null}
        

        </>
    );
    
}

export default Formulario;