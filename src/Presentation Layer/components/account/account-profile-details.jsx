import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import DateTimePicker from '@mui/lab/DateTimePicker';
// import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Daniel',
    lastName: 'Mola',
    email: 'abebemola@gmail.com',
    // phone: '+251-912-345-678',
    phone: '0924913413',
    state: 'Addis Ababa',
    country: 'Ethiopia',
    // startDate: new Date(),
    // endDate: new Date(),
    // demoDate: new Date(),
    
  });


  

  const handleChange = (event) => {
    event.preventDefault();


    setValues({
      ...values,
      [event.target.name]: event.target.value, 
    });
    console.log(values);
  };


  const handleStartDateChange = (newDate) => {
    
    setValues({
      ...values,
      startDate: newDate,
    });
    // const getFormattedDate = ({ month, day, year }) => `${month}/${day}/${year}`
    // console.log(values.date.getDate);
    console.log('Start Date: ', values.startDate);
  };

  const handleEndDateChange = (newDate) => {
    setValues({
      ...values,
      endDate: newDate,
    });
    console.log('End Date: ', values.endDate);
  };

  const handleDemoDateChange = (newDate) => {
    setValues({
      ...values,
      demoDate: newDate,
    });
    console.log('Demo Date: ', values.demoDate);
    console.log(values);
  };