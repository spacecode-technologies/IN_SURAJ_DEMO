import { Box, Button, Menu, MenuItem, Typography } from "@material-ui/core"
import {ExitToApp,KeyboardArrowDown,AccountCircle} from "@material-ui/icons"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { removeuser } from "../../utils/common"
export const Navcomp = () => {
    const [open, setopen] = useState(null)
    const history=useHistory()
    const handlelogout=()=>{
        removeuser()
        history.push("/login")
        // localStorage.setItem('isLoggedIn', false);

        
        
        
    }
    return (
        <Box>
           

      <Button color="black" endIcon={<KeyboardArrowDown/>} onClick={(e)=>{setopen(e.currentTarget)}} >Lily sophy</Button>
      <Menu open={Boolean(open)} style={{marginTop:"50px"}} anchorEl={open} onClose={()=>setopen(false)}>
                <MenuItem>
                <AccountCircle/>My Account
                </MenuItem>
                
                <MenuItem  onClick={handlelogout}>
                <ExitToApp  /> Logout
            </MenuItem>
                
            </Menu>

      </Box>
      
    )
}