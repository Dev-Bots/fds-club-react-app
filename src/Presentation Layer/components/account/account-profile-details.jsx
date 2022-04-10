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

  // const handleDateChange = (newEndDate, newStartDate) => {
  //   setValues({
  //     ...values,
  //     startDate: newStartDate,
  //     endDate: newEndDate
  //   });
  //   console.log(values.startDate);
  // };


  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                // type="number"
                value={values.phone}
                variant="outlined"
                error={values.phone.length > 10}
                helperText={values.phone.length > 10 ? 'Invalid!' : ' '}
              />
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                
                <DateTimePicker
                  renderInput={(params) => <TextField 
                  
                    {...params} />}
                  label="Start Date"
                  name='startDate'
                  value={values.startDate}
                  onChange={handleStartDateChange}
                  // minDate={new Date('2020-02-14')}
                  // minTime={new Date(0, 0, 0, 8)}
                  // maxTime={new Date(0, 0, 0, 18, 45)}
                />
              
            </LocalizationProvider>

            </Grid>


            <Grid
              item
              md={6}
              xs={12}
            >

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                
                <DateTimePicker
                  renderInput={(params) => <TextField 
                  
                    {...params} />}
                  label="End Date"
                  name='endDate'
                  value={values.endDate}
                  onChange={handleEndDateChange}
                  // minDate={new Date('2020-02-14')}
                  // minTime={new Date(0, 0, 0, 8)}
                  // maxTime={new Date(0, 0, 0, 18, 45)}
                />
              
            </LocalizationProvider>

            </Grid>

            
            <Grid
              item
              md={6}
              xs={12}
            >
              
            <LocalizationProvider dateAdapter={AdapterDateFns}>

            <DatePicker
              label="Demo Date"
              name='demoDate'
              value={values.demoDate}
              minDate={new Date('2017-01-01')}
              onChange={handleDemoDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
                
                
              
            </LocalizationProvider>

            </Grid>
           

          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
        };