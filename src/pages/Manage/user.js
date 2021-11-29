import { Grid, Box } from '@material-ui/core'
import React from 'react'
import Form from './form'

const User = () => {
  return (
    <div
    style={{
      float: "right",
      backgroundColor: "white",
      height: "150vh",
      width: "70vw",
      marginTop: "5px",
    }}
  >
      <Grid container component={Box} bgcolor="">
        <Grid item>
          <Form/>

        </Grid>

      </Grid>
    </div>
  )
}
export default User