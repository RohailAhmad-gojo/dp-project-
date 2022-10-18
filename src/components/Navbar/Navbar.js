import { Button, Grid } from '@material-ui/core'
import "./Navbar.css"
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
  return (
    <div>
        <section className='navBar'>
            <Grid container  justifyContent='space-evenly'>
                <Grid item xs={11}>
                   <Grid container className='navBarConatiner' justifyContent='space-between'>
                     <Grid item className='navBarLogo'>
                         <img src='./Assets/Logo.png'/>
                         <div className='navBarLogoText'xs={2}>
                            <h1>Design Bytes</h1>
                            <h2>international</h2>
                         </div>
                     </Grid>
                     <Grid item className='navBarList' xs={7}>
                        <ul>
                            <a href=''><li>Home</li></a>
                            <a href=''><li>About</li></a>
                            <a href=''><li>Contant</li></a>
                            <a href=''><li>Departments</li></a>
                            <a href=''><li>Founders</li></a>
                            <a href=''><li>Footer</li></a>
                            <a href=''><li className='listIcon'><SearchIcon/></li></a>
                        </ul>
                     </Grid>
                     {/* <Grid item className='navBarBtn' xs={4} sm={2}>
                         <Button className='btn'>Join Us</Button>
                     </Grid> */}
                   </Grid>
                </Grid>
            </Grid>
        </section>
    </div>
  )
}

export default Navbar