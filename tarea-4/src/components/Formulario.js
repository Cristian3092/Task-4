import React , {useState} from 'react'
import Swal from 'sweetalert2';

export const Formulario = () => {

    const [enviar, setEnviar] = useState();

    const enviarFormulario = ()=>{
        Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
        })
        setEnviar();
       
    }


  return (
    <div className='container'>
        <form className='content' action='easyroad4@gmail.com' onSubmit={enviarFormulario}>
            <input type='text' placeholder='Introduce tu nombre'/>
            <input type= 'text' placeholder='Introduce tu apellido'/>
            <input type='email' placeholder='Introduce tu email'/>
            <textarea type='text' placeholder='Dejanos tu comentario'/>
            <input type='submit' value={enviar} onClick={(e)=> enviarFormulario(e.target.value) }/>
        </form>
    </div>
 )
}
