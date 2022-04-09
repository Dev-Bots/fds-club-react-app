import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';
  // import BasicModal from '../modal';
  import Modal from '@mui/material/Modal';
  import {useState} from 'react';
  import DatePicker from '../date-time-picker';
  import http from '../../../Data Layer/helpers/client/api.client';
  
  const user = {
    avatar: 'https://upload.wikimedia.org/wikipedia/en/8/80/St_George_SC_%28logo%29.png',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    type: 'Club',
    name: 'St. George SC',
    timezone: 'GMT+3'
  };
  
  const AUTH_ENDPOINT = "/api/"
  
  async function login(username, password) {
    console.log(username, password)
    const response = await http()
      .post("http://localhost:8000" + AUTH_ENDPOINT + "token/", { username, password });
    // console.log(response.data)
    if (response.data.access) {
      // localStorage.setItem("userAccess", JSON.stringify(response.data.access));
      sessionStorage.setItem("userAccess", JSON.stringify(response.data.access));
      // console.log(localStorage.getItem("userAccess"))
      console.log(sessionStorage.getItem("userAccess"))
    }
    return response.data;
  }
  