import { checkingCredencials } from "./"


export const checkingAuthenticaction = ( email , passward ) => {
    return async ( dispatch ) => {
        
        dispatch( checkingCredencials() );

    }

}

export const startGoogleSingIn = () => {
    return async ( dispatch ) => {
        
        dispatch( checkingCredencials() );

    }

}