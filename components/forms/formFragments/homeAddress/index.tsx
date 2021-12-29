import * as React from 'react';
import { Field } from 'formik';
import { Grid, MenuItem, Typography } from '@mui/material';
import {TextField, Select} from 'formik-mui';
import { getStatesForDropdown } from '../../../../utils/frontend/commonDropDowns';

const states = getStatesForDropdown();

// Using an array allows us to easily change form inputs.
const HomeAddressFormInputs = [
    {
        name: 'homeStreet',
        fieldType: 'Field',
        label: 'Home Street',
        placeholder: '30 Jillson Circle',
        component: TextField,
        sizing:
            {
                xs: 12,
                sm: 12
            },
    },
    {
        name: 'homeApartment',
        fieldType: 'Field',
        label: 'Home Apartment',
        placeholder: 'Apartment 303',
        component: TextField,
        sizing:
            {
                xs: 12,
                sm: 12
            },
    },
    {
        name: 'homeCity',
        fieldType: 'Field',
        label: 'Home City',
        placeholder: 'Milford',
        component: TextField,
        sizing:
            {
                xs: 12,
                sm: 12
            },
    },
    {
        name: 'homeState',
        fieldType: 'Select',
        label: 'State',
        data: states,
        placeholder: 'Massachusetts',
        component: Select,
        sizing:
            {
                xs: 12,
                sm: 12
            }
    },
    {
        name: 'homeZip',
        fieldType: 'Field',
        label: 'Home Zip',
        placeholder: '01757',
        component: TextField,
        sizing:
            {
                xs: 12,
                sm: 12
            },
    }
];

export default function HomeAddressForm() {
    return (
        <React.Fragment>
            <Typography mb={2} variant="h6" gutterBottom>
                Home Address
            </Typography>
            <Grid container spacing={3}>
                {HomeAddressFormInputs.map((input) => {
                    return (
                        <Grid item xs={input.sizing.xs} sm={input.sizing.sm} key={input.name}>
                            {/* If the input is a Field, we can use the Field component.
                             If the input is a Select, we need to use the Select component.
                             We can use the component prop to pass in the correct component. */}
                            {input.fieldType === 'Field' ?
                                <Field
                                    fullWidth
                                    className='field'
                                    component={input.component}
                                    name={input.name}
                                    type="text"
                                    label={input.label}
                                    placeholder={input.placeholder}
                                /> :
                                <Field
                                    fullWidth
                                    className='field'
                                    name={input.name}
                                    component={input.component}
                                    type="text"
                                    label={input.label}
                                    placeholder={input.placeholder}
                                >
                                    {input.data ?
                                        input.data.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        )) :
                                        null
                                    }
                                </Field>
                            }
                        </Grid>
                    );
                })}
            </Grid>
        </React.Fragment>
    );
}