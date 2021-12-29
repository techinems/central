import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default [
    Yup.object().shape({
        firstName: Yup.string()
            .required('Required'),
        lastName: Yup.string()
            .required('Required'),
        month: Yup.string()
            .required('Month is required'),
        day: Yup.string()
            .required('Day is required'),
        year: Yup.string()
            .required('Year is required'),
        email: Yup.string() 
            .email('Email is invalid')
            .required('Email is required'),
        phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is invalid')
            .required('Phone number is required'),
        rcsId: Yup.string()
            .notRequired(),
        rin: Yup.string()
            .matches(/^[0-9]*$/, 'RIN should only contain numbers')
            .min(9, 'RIN is too short')
            .max(9, 'RIN is too long')
            // Make sure the rin is a number
            .notRequired()
    }),
    Yup.object().shape({
        homeStreet: Yup.string()
            .notRequired(),
        homeApartment: Yup.string()
            .notRequired(),
        homeCity: Yup.string()
            .notRequired(),
        homeState: Yup.string()
            .notRequired(),
        homeZip: Yup.string()
            .notRequired(),
    }),
    Yup.object().shape({
        localStreet: Yup.string()
            .notRequired(),
        localApartment: Yup.string()
            .notRequired(),
        localCity: Yup.string()
            .notRequired(),
        localState: Yup.string()
            .notRequired(),
        localZip: Yup.string()
            .notRequired(),
    })
];

