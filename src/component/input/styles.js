import { makeStyles } from '@material-ui/core';

export const useInputStyles = makeStyles(
    (theme) => ({
        md: {
            width: '100%',
            minWidth: '290px',

            '& .MuiOutlinedInput-root': {
                borderRadius: '3px'
            },
            '& .MuiOutlinedInput-input': {
                padding: '13px 12px'
            },
            '& .MuiOutlinedInput-input:focus': {
                backgroundColor: theme.palette.background.default
            }
        },
        lg: {
            borderRadius: '3px',

            '& .MuiOutlinedInput-input': {
                padding: '14px 12px'
            },
            '& .MuiOutlinedInput-input:focus': {
                backgroundColor: theme.palette.background.default
            }
        }
    }),
    { index: 1 }
);