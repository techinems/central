import { createTheme } from '@mui/material/styles';

const formTheme = createTheme({
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: '100%',
                },
            },
        },
    },
});

export default formTheme;