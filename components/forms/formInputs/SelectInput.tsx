import React from 'react';
import { Field } from 'formik';
import { Select } from 'formik-mui';
import { MenuItem } from '@mui/material';

interface SelectProps {
    name?: string;
    label?: string;
    placeholder?: string;
    data?: Array<{ value: string, label: string }>;
  }

function SelectField(props: SelectProps) {
    return (
        <Field
            fullWidth
            className='field'
            name={props.name}
            component={Select}
            type="text"
            label={props.label}
            placeholder={props.placeholder}
        >
            {props.data ?
                props.data.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                )) :
                null
            }
        </Field>
    );
}

export default SelectField;