import React from 'react';
import { Typography, Grid } from '@mui/material';

function LocalAddressDetails(props: any) {
    const { formValues } = props;
    const { localStreet, localApartment, localCity, localState, localZip } = formValues;
    return (
        <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
                Local Address
            </Typography>
            <Typography gutterBottom>{localStreet}</Typography>
            <Typography gutterBottom>{localApartment}</Typography>
            <Typography gutterBottom>{localCity + ', ' + localState + ' ' + localZip}</Typography>
        </Grid>
    );
}

export default LocalAddressDetails;
