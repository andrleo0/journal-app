import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
    email: 'andres@google.com',
    password: '123456',
    displayName: 'Andres Guerrero'
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe de tener un @'],
  password: [ (value) => value.length >= 6 , 'El password debe de tener mas de 6 letras'],
  displayName: [ (value) => value.length >= 6 , 'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const { 
    formState , displayName , email , password , onInputChange ,  
    isFormValid, displayNameValid , emailValid , passwordValid 
  } = useForm( formData , formValidations );

  console.log( displayNameValid );

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title="Crear cuenta"> 
        <form onSubmit={ onSubmit }>
          <Grid container >

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder="Nombre completo"
                autoComplete="user-name" 
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange } 
                error
                helperText="El nombre es obligatorio"
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                autoComplete="correo@envio.com" 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }  
              />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña"
                autoComplete="current-password" 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }  
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2 , mt: 1 }}>

              <Grid item xs={ 12 }>
                <Button 
                  type='submit'
                  variant="contained" 
                  fullWidth 
                >
                  Crear cuenta
                </Button>
              </Grid>

            </Grid>

            <Grid container direction="row" justifyContent="end">

              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color="inherit" to="/auth/login">
                Ingresar
              </Link>

            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}
