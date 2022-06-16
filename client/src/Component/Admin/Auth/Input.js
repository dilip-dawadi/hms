import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import { alpha, styled } from '@mui/material/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
    margin: '-9px 0px',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'gray',
      borderWidth: '1px',
    },
  }
});
const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword, handleShowCPassword }) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <CssTextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      inputProps={{
        style: {
          color: 'black', background: 'white', padding: '16px 10px',
          height: '1.5em',
          borderRadius: '5px',
        }
      }}
      InputProps={name === 'password' || name === 'confirmPassword' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword || handleShowCPassword} style={{
              color: 'black',
              background: '#fff',
            }}>
              {type === 'password' || type === 'confirmPassword' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      } : null}
    />
  </Grid>
);

export default Input;