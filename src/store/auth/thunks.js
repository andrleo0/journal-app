import { logingWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
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

        dispatch( login( result ) );
    }

}

export const startCreatingUserWithEMailPassword = ({ email , password , displayName }) => { 
    return async ( dispatch ) => {
        
        dispatch( checkingCredencials() );

        const result = await registerUserWithEmailPassword({ 
            email, 
            password, 
            displayName 
        });

        if(!result.ok) return dispatch( logout( result ) );

        dispatch( login(result) );

    }
}  

export const starLogingWithEmailPassword = ({ email , password }) => {
    return async ( dispatch ) => {

        dispatch( checkingCredencials() );

        const result = await logingWithEmailPassword({
            email,
            password
        });

        if(!result.ok) return dispatch( logout( result ) );

        dispatch( login(result) );
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        await logoutFirebase();

        dispatch( logout() );
    }
}
