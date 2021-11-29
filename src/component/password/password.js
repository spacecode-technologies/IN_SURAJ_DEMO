import React from 'react';
// import IconButton from '@material-ui/core/IconButton';
import { InputAdornment,TextField,IconButton } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { usePasswordStyles } from './styles';


const CustomPassword = (props) => {
    const classes = usePasswordStyles();
    const {
        name,
        onEnterPress,
        dataTestid,
        value,
        onChange,
        inputProps,
        size,
        focus,
        fullWidth,
        helperText,
        error,
        onFocus,
        onBlur,
        width,
        bgColor,
        inputRef
    } = props; // pass value and onchange function to get hte value
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TextField
            variant="outlined"
            error={error}
            inputProps={inputProps}
            helperText={helperText}
            name={name}
            value={value}
            data-testid={dataTestid}
            type={showPassword ? 'text' : 'password'}
            onChange={onChange}
            className={size === 'md' ? classes.md : classes.lg}
            autoComplete="off"
            autoFocus={focus}
            fullWidth={fullWidth}
            style={{ width: width, backgroundColor: bgColor }}
            onFocus={onFocus}
            onBlur={onBlur}
            
            inputRef={inputRef}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
};

export default CustomPassword;