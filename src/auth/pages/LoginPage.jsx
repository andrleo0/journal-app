import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { clearErrorMessages, starLogingWithEmailPassword, startGoogleSingIn } from '../../store/auth'
import { Google } from "@mui/icons-material"

import { AuthLayout } from '../layout/AuthLayout'

import { useForm } from '../../hooks'

const formData = {
  email: '',
  password: ''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe de tener un @'],
  password: [ (value) => value.length >= 6 , 'El password debe de tener mas de 6 letras'],
}

export const LoginPage = () => {

  
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const { status , errorMessage } = useSelector( state => state.auth );
  const isAuthenticated = useMemo( () => status === 'checking', [status]);

  const { 
    formState , email , password , onInputChange , 
    isFormValid, emailValid , passwordValid
  } = useForm( formData , formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if( !isFormValid ) return;
    dispatch( starLogingWithEmailPassword( formState ) );
  }

  const onDeletingErrorMessages = () => {
    dispatch( clearErrorMessages() );
  }

  const onGoogleSingIn = () => {
    dispatch( startGoogleSingIn() );
  }

  return (
    <AuthLayout title="Login">
        <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
          <Grid container >

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                autoComplete="user-name"
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
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
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2 , mt: 1 }}>
            <Grid 
              item 
              xs={ 12 }
              display={ !!errorMessage ? '' : 'none' }
            >
              <Alert severity="error" >
                { errorMessage }
              </Alert>
            </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled={ isAuthenticated }
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled={ isAuthenticated }
                  variant="contained"
                  fullWidth
                  onClick={ onGoogleSingIn }
                >
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link onClick={ onDeletingErrorMessages } component={ RouterLink } color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}
