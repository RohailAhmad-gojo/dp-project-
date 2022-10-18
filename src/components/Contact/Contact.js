import { Grid } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import RedditIcon from '@material-ui/icons/Reddit';
import LinkIcon from '@material-ui/icons/Link';
import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <div>
        <section id='contact'>
            <div className='contactOverlay'>
              <div className='contactContainer'>
                <Grid container justifyContent='space-evenly'>
                    <Grid item lg={7} xs={10} className="contactHeader">
                      <h1>Our Social</h1>
                    </Grid>
                </Grid>
                 <Grid container justifyContent='space-evenly'>
                    <Grid item xs={11} md={10}>
                        <Grid container justifyContent='space-evenly'>
                            <Grid item className='contactText' xs={10} md={7}>
                                 <p><span>It</span>is a is a long established fact that a reader will be distracted by the readable content fact that a reader will be distracted by the readable contentfact that a reader will be distracted by the readable contentfact that a reader will be distracted by the readable contentof a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                 <div className='contactIcon'>
                                    <FacebookIcon className='contactIcons'/>
                                    <InstagramIcon className='contactIcons'/>
                                    <RedditIcon className='contactIcons'/>
                                    <LinkIcon className='contactIcons'/>
                                 </div>
                            </Grid>
                            <Grid item className='contactImg' md={5} xs={10}>
                                <img src='./Assets/contacts.png'/>  
                            </Grid>
                        </Grid>
                    </Grid>
                 </Grid>
               </div>
            </div>
        </section>
    </div>
  )
}

export default Contact