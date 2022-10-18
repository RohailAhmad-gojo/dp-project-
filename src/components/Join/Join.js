import { Button, Grid } from '@material-ui/core'
import React from 'react'
import "./Join.css"
function Join() {
  return (
    <div>
        <section id="join">
            <div className='joinOverlay'>
               <Grid container justifyContent='space-evenly' >
                  <Grid item xs={11} md={9} className="joinHeader">
                        <h1>let change to world togetter</h1>
                        <p><span>Lorem</span> ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        <Button className='btn joinBtn'>Join Us</Button>
                  </Grid>
               </Grid>
            </div>
        </section>
    </div>
  )
}

export default Join