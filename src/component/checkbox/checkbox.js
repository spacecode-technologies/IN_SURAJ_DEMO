import { FormControlLabel,Checkbox  } from "@material-ui/core";
// import { Checkbox } from "@material-ui/core";

import React from 'react'

const CustomChekbox = (props) => {
const {onChange,checked,label}=props

    return (
        
          <FormControlLabel
                  label={label}
                  
                  control={
                    <Checkbox onChange={onChange} checked={checked}  />
                  }
                />
          
    )
}
export default CustomChekbox;




