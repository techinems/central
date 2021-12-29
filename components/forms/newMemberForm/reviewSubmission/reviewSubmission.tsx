import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@mui/material';
import MemberDetails from './memberSubmission';
import HomeAddressDetails from './homeAddressSubmission';
import LocalAddressDetails from './localAddressSubmission';

export default function ReviewOrder() {
    const { values: formValues } = useFormikContext();
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Confirm Your Information
            </Typography>
            <Grid container spacing={2}>
                <MemberDetails formValues={formValues} />
                <HomeAddressDetails formValues={formValues} />
                <LocalAddressDetails formValues={formValues} />
            </Grid>
        </React.Fragment>
    );
}
