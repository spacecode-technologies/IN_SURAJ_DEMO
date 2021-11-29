// import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
// import React, { useState } from 'react'
// import Nav from './Nav/Navbar'
// var a=[{lebel:"Dashboard"},
// {lebel:"Associate Unit"},
// {lebel:"Assign Unit"},
// {lebel:"Request Unit"}]

// const usestyles=makeStyles({
//     // simpleMenu: {
//     //     padding: '10px 20px'
//     // },
    
//     // accountIcon: {
//     //     marginRight: 8
//     // },
//     // subList: {
//     //     display: 'flex',
//     //     flexDirection: 'column'
//     // },
//     drawer:{
//         width:250,
//     }
    
// })

//  const Drower = () => {
//     const classes=usestyles()
//     const [openclose, setopenclose] = useState(null)
//     const handleMenu = (event) => {
//     setopenclose(event.currentTarget);
// };
//     return (
//         <div>
//             <Nav onClick={handleMenu}/>
//              <Drawer open={Boolean(openclose)} className={classes.add} anchorEl={openclose} onClose={()=>{setopenclose(false)}}>
//       <List className={classes.drawer}>
//             {a.map((x,i) =>{
//                 return (<Button><ListItem keys={i}>
//                     {/* <ListItemIcon >{x.icon}</ListItemIcon> */}
//                     <ListItemText>{x.lebel}</ListItemText>
//                 </ListItem></Button>
//                 )
// })}
//             </List>
//         </Drawer>

//         </div>
//     )
// }
