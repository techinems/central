import React, { FunctionComponent } from 'react';
import axios from 'axios';
import { Box, Container, Paper, Stepper, Step, StepLabel, Button, Typography, CircularProgress } from '@mui/material/';
import { Formik, Form } from 'formik';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MemberNameForm from '../formFragments/memberInfo';
import HomeAddressForm from '../formFragments/homeAddress';
import LocalAddressForm from '../formFragments/localAddress';
import ReviewSubmission from './reviewSubmission/reviewSubmission';

import validationSchema from './newMemberFormValidation';
import newMemberFormModel from './newMemberFormModel';
import { MemberFormEntries } from '../../../utils/common/user';

import formTheme from '../formStyling';

const steps = ['Personal Info', 'Home Address', 'Local Address', 'Review'];
const { formId } = newMemberFormModel;

function getStepContent(step: number) {
    switch (step) {
    case 0:
        return <MemberNameForm />;
    case 1:
        return <HomeAddressForm />;
    case 2:
        return <LocalAddressForm />;
    case 3:
        return <ReviewSubmission />;
    default:
        throw new Error('Unknown step');
    }
}

export interface MemberForm {
  title: string;
  shouldCreateNewMember: boolean;
  memberInfo?: any;
}

const MemberForm: FunctionComponent<MemberForm> = ({ title, shouldCreateNewMember, memberInfo }) => {
    const theme = createTheme(formTheme);
    // Keep track of the current step
    const [activeStep, setActiveStep] = React.useState(0);
    const isLastStep = activeStep === steps.length - 1;
    // Only validate the step of the validation schema we're currently on
    const currentValidationSchema = validationSchema[activeStep];

    const initialValues: MemberFormEntries = {
        firstName: '',
        lastName: '',
        month: '',
        day: '',
        year: '',
        email: '',
        homeStreet: '',
        homeApartment: '',
        homeCity: '',
        homeState: '',
        homeZip: '',
        localStreet: '',
        localApartment: '',
        localCity: '',
        localState: '',
        localZip: '',
        phone: '',
        rcsId: '',
        rin: ''
    };

    function _sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function _submitForm(values: MemberFormEntries, actions: any) {
        // Make alert window appear
        await _sleep(1000);

        if (!shouldCreateNewMember) {
            return;
        }
        try {
            // We've finished handling the form so we can set the submitting to false
            const createUserResponse = await axios.post('/api/user/createUser', values);
            if (createUserResponse.status === 200) {
                actions.setSubmitting(false);
            }
        } catch (err) {
            console.error(err);
        }
        // Refresh the page to get the new user (we must be null safe in case window isn't defined which is possible with next)
        window?.location?.reload();
        setActiveStep(activeStep + 1);
    }

    function _handleSubmit(values: MemberFormEntries, actions: any) {
        if (isLastStep) {
            _submitForm(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    }

    const _handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        {title}
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for creating a user profile!
                                </Typography>
                                <Typography variant="subtitle1">
                                    Hit the &lsquo;finish&rsquo; button to go to your new dashboard.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <Formik
                                initialValues={initialValues}
                                validationSchema={currentValidationSchema}
                                onSubmit={_handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form id={formId}>
                                        {getStepContent(activeStep)}
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            {activeStep !== 0 && (
                                                <Button onClick={_handleBack} sx={{ mt: 3, ml: 1 }}>
                                                Back
                                                </Button>
                                            )}
                                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <Button
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    variant="contained"
                                                    sx={{ mt: 3, ml: 1 }}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                                </Button>
                                                {isSubmitting && (
                                                    <CircularProgress
                                                        size={24}
                                                    />
                                                )}
                                            </Box>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        )}
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default MemberForm;