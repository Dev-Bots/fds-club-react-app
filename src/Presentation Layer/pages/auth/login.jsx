import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import validateEmail from '../../validation/auth/validateEmail';
import validatePassword from '../../validation/auth/validatePassword';

import ErrorMessage from '../../components/auth/error-message';

import { connect } from 'react-redux';

import { login } from "../../../Business Layer/thunks/auth/auth.thunk";

import { useNavigate } from 'react-router-dom';


const SignIn = function (props) {

  const navigate = useNavigate()

  const [email, setEmail] = React.useState('');
  
  const [error, setError] = React.useState('');


  const handleSubmit = (event) => {
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    // if (validateEmail(data.get('email')) && validatePassword(data.get('password'))) { //need to add password validation

    if (data.get('email') && data.get('password')) { //need to add password validation

      props.login(data.get('email'), data.get('password'))
      
      console.log('email and password have passed validation and hopefully login has been dispatched');
    }

    else {
    
    return setError('Please enter a valid email and password.');
  }
  };

function disableButton() {
    if (props.auth.authLoading) {
      console.log('button disabled');
      return (
        <Button
              disabled
              type="submit"
              fullWidth
              color='secondary'
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
      )
    } else {
      console.log('button is enabled')
      return (
            <Button
              type="submit"
              fullWidth
              color='secondary'
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
      ) 
    }
  }
      

  function showError() {
    if (error) {
      return <ErrorMessage error={error} />
    }
    else if(props.auth.error === 'Network Error') {
      return <ErrorMessage error='Something went wrong. Please try again.' />
      // return <ErrorMessage error={props.auth.error} />
    }
    else if(props.auth.error) {
      return <ErrorMessage error='Invalid credentials. Please try again.' />
    }
  }

 
  function goToDashboard() {
    if(props.auth.isAuthenticated && !props.auth.authLoading) {
      return navigate('/')
  }}

  return (
      
      <Container component="main" maxWidth="xs">
        {goToDashboard()}
        <CssBaseline />
        <Box
          sx={{
            marginTop: '5rem',
            marginBottom: '10rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        ></Box>