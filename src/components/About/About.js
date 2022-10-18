import { Button, Grid } from '@material-ui/core'
import React from 'react'
import "./About.css"
function About() {
  return (
    <div>
        <section id="about">
            <Grid container justifyContent='space-evenly'>
                <Grid item lg={7} xs={10} className="AboutHeader">
                   <h1>About Us</h1>
                </Grid>
            </Grid>
            <Grid container justifyContent='space-evenly'>
                <Grid item lg={10} xs={11}>
                   <Grid container justifyContent='space-evenly'>
                      <Grid item xs={10} md={6} className='aboutText'>
                          <p><span>There</span> are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

</p>
                          <Button className="btn">Read More</Button>
                      </Grid>
                      <Grid item className='aboutImg' md={5} xs={10}>
                        <img src='./Assets/about.png' className='aboutimage'/>
                        
                      </Grid>
                   </Grid>
                </Grid>
            </Grid>
        </section>
    </div>
  )
}

export default About