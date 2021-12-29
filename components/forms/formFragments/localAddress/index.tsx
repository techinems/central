import * as React from 'react';
import { Field } from 'formik';
import { Grid, MenuItem, Typography } from '@mui/material';
import {TextField, Select} from 'formik-mui';
import { getStatesForDropdown } from '../../../../utils/frontend/commonDropDowns';

const states = getStatesForDropdown();

const LocalAddressFormInputs = [
    {
        name: 'localStreet',
        fieldType: 'Field',
        label: 'Local Street',
        placeholder: '1999 Burdett Ave',
        component: TextField,
        sizing:
            {
                xs: 12,
                sm: 12
            },
    },
    {
        name: 'localApartment',
        fieldType: 'Field',
        label: 'Local Apartment',
        placeholder: 'Cary Hall 215',
        component: TextField,
        sizing:
            {
                xs: 12,
                sm: 12
            },
    },
    {
        name: 'localCity',
        fieldType: 'Field',
        label: 'Local City',
        placeholder: 'Troy',
        component: TextField,
        sizing:
            {
                xs: 12,
                sm: 12
            },
    },
    {
        name: 'localState',
        fieldType: 'Select',
        label: 'State',
        data: states,
        placeholder: 'New York',
        component: Select,
        sizing:
            {
                xs: 12,
                sm: 12
            },
    },
    {
        name: 'localZip',
        fieldType: 'Field',
        label: 'Local Zip',
        placeholder: 'Local Zip',
        component: TextField,
        sizing:
            {
                xs: 12,
                sm: 12
            },
    },
];

export default function LocalAddressForm() {
    return (
        <React.Fragment>
            <Typography mb={2} variant="h6" gutterBottom>
                Local Address
            </Typography>
            <Grid container spacing={3}>
                {LocalAddressFormInputs.map((input) => {
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