import * as React from 'react';
import { Field } from 'formik';
import { Grid, Typography, MenuItem } from '@mui/material';
import {TextField, Select} from 'formik-mui';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import formTheme from '../../formStyling';
import { getMonthsForDropdown } from '../../../../utils/frontend/commonDropDowns';

export default function MemberInfoForm() {
    const theme = createTheme(formTheme);

    return (
        <ThemeProvider theme={theme}>
            <Typography mb={2} variant="h6" gutterBottom>
                Name
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Field
                        fullWidth
                        className='field'
                        component={TextField}
                        name="firstName"
                        type="text"
                        label="First Name"
                        placeholder="Daniel"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        fullWidth
                        className='field'
                        component={TextField}
                        name="lastName"
                        type="text"
                        label="Last Name"
                        placeholder="Bruce"
                    />
                </Grid>
            </Grid>
            <Typography mt={3} mb={2} variant="h6" gutterBottom>
                Date of Birth
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Field
                        fullWidth
                        className='field'
                        component={Select}
                        name="month"
                        label="Month"
                        placeholder="Month"
                    >
                        <MenuItem key={''} value={''}>
                            Select Month
                        </MenuItem>
                        {getMonthsForDropdown().map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Field>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field
                        fullWidth
                        className='field'
                        component={Select}
                        name="day"
                        label="Day"
                        placeholder="Day"
                    >
                        <MenuItem key={''} value={''}>
                            Select Day
                        </MenuItem>
                        {Array.from(Array(31), (e,i)=>++i).map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Field>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field
                        fullWidth
                        className='field'
                        component={TextField}
                        name="year"
                        label="Year"
                        placeholder="Year"
                    />
                </Grid>
            </Grid>
            <Typography mt={3} mb={2} variant="h6" gutterBottom>
                Contact Info
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Field
                        fullWidth
                        className='field'
                        component={TextField}
                        name="email"
                        type="text"
                        label="Email"
                        placeholder="dbruce@rpiambulance.com"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        fullWidth
                        className='field'
                        component={TextField}
                        name="phone"
                        type="text"
                        label="Phone"
                        placeholder="508-688-5830"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        fullWidth
                        className='field'
                        component={TextField}
                        name="rcsId"
                        type="text"
                        label="RCS ID"
                        placeholder="bruced"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        fullWidth
                        className='field'
                        component={TextField}
                        name="rin"
                        type="text"
                        label="RIN"
                        placeholder="661474634"
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}