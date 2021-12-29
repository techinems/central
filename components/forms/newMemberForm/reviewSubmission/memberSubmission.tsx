import React from 'react';
import { Typography, Grid } from '@mui/material';

function MemberDetails(props: any) {
    const { formValues } = props;
    const { firstName, lastName, month, day, year, email, phone, rcsId, rin } = formValues;
    return (
        <Grid item xs={12} sm={12}>
            <Typography variant="h6" gutterBottom>
                Personal Info
            </Typography>
            <Grid container rowSpacing={1}>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Name</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{firstName + ' ' + lastName}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Date of Birth</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{month + '/' + day + '/' + year}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Email</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{email}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>Phone</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{phone}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>RCSID</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{rcsId}</Typography>
                    </Grid>
                </React.Fragment>
                <React.Fragment>
                    <Grid item xs={6}>
                        <Typography gutterBottom>RIN</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography gutterBottom>{rin}</Typography>
                    </Grid>
                </React.Fragment>
            </Grid>
        </Grid>
    );
}

export default MemberDetails;
