import React from 'react';
import { Typography, Grid } from '@mui/material';

function HomeAddressDetails(props: any) {
    const { formValues } = props;
    const { homeStreet, homeApartment, homeCity, homeState, homeZip } = formValues;
    return (
        <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
                Home Address
            </Typography>
            <Typography gutterBottom>{homeStreet}</Typography>
            <Typography gutterBottom>{homeApartment}</Typography>
            <Typography gutterBottom>{homeCity + ' ' + homeState + ', ' + homeZip}</Typography>
        </Grid>
    );
}

export default HomeAddressDetails;
