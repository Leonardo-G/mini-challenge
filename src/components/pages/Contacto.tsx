import { ChangeEvent, MouseEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap';

import { LayoutPage } from '../layout/LayoutPage';
import { validValues } from '../../utils/validForm';

export const Contacto = () => {

    const [valuesForm, setValuesForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errorState, setErrorState] = useState({
        isError: false,
        inputName: "",
        message: ""
    })

    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValuesForm({
            ...valuesForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const { error, inputName, messageValid } = validValues( valuesForm.name, valuesForm.email, valuesForm.message );
        
        if ( error ) {
            setErrorState({
                isError: error,
                inputName,
                message: messageValid
            })
            return 
        }

        setErrorState({
            isError: false,
            inputName: "",
            message: ""
        })

        console.log(valuesForm)

        setTimeout(() => {
            alert("Enviado, mensaje en consola... :D")
        }, 1000);
    }

    return (
        <LayoutPage titleHead='Contacto | App challenge'>
            <div className="container-form pt-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            className={`${ errorState.inputName === "name" || errorState.inputName === "ALL" ? "border border-danger" : ""}`}
                            type="text" 
                            placeholder="Ingrese su nombre..." 
                            name="name"
                            onChange={ handleOnChange }    
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control 
                            className={`${ errorState.inputName === "email" || errorState.inputName === "ALL" ? "border border-danger" : ""}`}
                            type="text" 
                            placeholder="Su correo" 
                            name="email"
                            onChange={ handleOnChange }      
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mensaje</Form.Label>
                        <textarea  
                            className={`form-control ${ errorState.inputName === "message" || errorState.inputName === "ALL" ? "border border-danger" : ""}`}
                            placeholder='Su Mensaje...'
                            name="message"
                            onChange={ handleOnChange }      
                        ></textarea>
                    </Form.Group>
                    {
                        errorState.isError &&
                        <p className="text-danger">{ errorState.message }</p>
                    }
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={ handleSubmit }    
                    >
                        Envíar
                    </Button>
                </Form>
            </div>
        </LayoutPage>
    )
}
