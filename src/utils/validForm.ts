export const validValues = (name: string, email: string, message: string): { error: boolean, inputName: string, messageValid: string } => {
    // eslint-disable-next-line
    const regExpEmail = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")

    if ( name === "" && email === "" && message === "" ){
        return {
            error: true,
            inputName: "ALL",
            messageValid: "Complete todos los campos"
        }
    }
    
    if ( name.length <= 2 ) {
        return {
            error: true,
            inputName: "name",
            messageValid: "Ingrese un nombre mayor o igual a 3 caracteres"
        }
    }

    if ( !regExpEmail.test( email ) ){
        return {
            error: true,
            inputName: "email",
            messageValid: "Ingrese un email válido"
        }
    }

    if ( message.length < 6 ) {
        return {
            error: true,
            inputName: "message",
            messageValid: "Ingrese un mensaje mayor o igual a 6 caracteres"
        }
    }

    return {
        error: false,
        inputName: "",
        messageValid: "OK"
    }

}