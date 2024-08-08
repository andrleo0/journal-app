import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredencials, login, logout } from "./"


export const checkingAuthenticaction = ( email , password ) => {
    return async ( dispatch ) => {
        
        dispatch( checkingCredencials() );

    }

}

export const startGoogleSingIn = () => {
    return async ( dispatch ) => {
        
        dispatch( checkingCredencials() );

        const result =  await singInWithGoogle();
        if(!result.ok) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) )



    }

}