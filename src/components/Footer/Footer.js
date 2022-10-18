import { Grid } from '@material-ui/core'
import React from 'react'
import "./Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkIcon from '@material-ui/icons/Link';

function Footer() {
  return (
    <div>
      <section id="footer">
        <Grid container justifyContent='space-evenly'>
          <Grid item xs={11}>
            <Grid container justifyContent='space-evenly'>
              <Grid item xs={11} md={9} lg={7} className="footerLogo">
                <img src='./Assets/logo2.png'/>
                <div className='footerIcon'>
                  <FacebookIcon className='footerIcons'/>
                  <InstagramIcon className='footerIcons'/>
                  <RedditIcon className='footerIcons'/>
                  <LinkIcon className='footerIcons'/>
                </div>
              </Grid>
              <Grid item xs={11} className="footerText">
                <h2>terms and conditions</h2>
                <h2>report bugs</h2>
                <h2>ask question</h2>
              </Grid>
              <Grid item className='footerCopy'>
                 <h4>©Copyright by Rohail ahmad</h4>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}

export default Footer