import { Button, ButtonGroup, Grid } from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import React from 'react'
import './Team.css'

function Team() {
  return (
    <div>
        <section id='team'>
            <Grid container justifyContent='space-evenly'>
                <Grid item lg={7} xs={10} className='teamHeader'>
                   <h1>Founders</h1>
                </Grid>
                <Grid container justifyContent='space-evenly'>
                    <Grid item xs={11}>
                      <Grid container justifyContent='space-evenly'>
                        <Grid item lg={3} className="teamText">
                           <img src='./Assets/team.png'/>
                          <i><h2>Founder</h2></i> 
                           <i><h4>CEO</h4></i>
                           <div className='TeamPara'>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                           </div>
                           <div className='teamIcon'>
                              <InstagramIcon className='teamIcons'/>
                              <LinkIcon className='teamIcons'/>
                              <FacebookIcon className='teamIcons'/>
                           </div>
                        </Grid>
                        <Grid item lg={3} className="teamText">
                           <img src='./Assets/team2.png'/>
                          <i><h2>sometimes</h2></i> 
                           <i><h4>CEO</h4></i>
                           <div className='TeamPara'>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                           </div>
                           <div className='teamIcon'>
                              <InstagramIcon className='teamIcons'/>
                              <LinkIcon className='teamIcons'/>
                              <FacebookIcon className='teamIcons'/>
                           </div>
                        </Grid>
                        <Grid item lg={3} className="teamText">
                           <img src='./Assets/team.png'/>
                          <i><h2>Text here</h2></i> 
                           <i><h4>CEO</h4></i>
                           <div className='TeamPara'>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                           </div>
                           <div className='teamIcon'>
                              <InstagramIcon className='teamIcons'/>
                              <LinkIcon className='teamIcons'/>
                              <FacebookIcon className='teamIcons'/>
                           </div>
                        </Grid>
                        <Grid item lg={3} md={3} className="teamText">
                           <img src='./Assets/team2.png'/>
                          <i><h2>Text</h2></i> 
                           <i><h4>CEO</h4></i>
                           <div className='TeamPara'>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ok sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                           </div>
                           <div className='teamIcon'>
                              <InstagramIcon className='teamIcons'/>
                              <LinkIcon className='teamIcons'/>
                              <FacebookIcon className='teamIcons'/>
                           </div>
                        </Grid>
                      </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    </div>
  )
}

export default Team