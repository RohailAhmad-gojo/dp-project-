import { Grid } from '@material-ui/core'
import React from 'react'
import "./Home.css"
function Home() {
  return (
    <div>
        <section id='home'>
            <Grid container className='homePage' justifyContent='space-evenly'>
                <Grid item lg={9} xs={10} className="homeText">
                    <div className='homeHeading'>
                        <h1>Design Bytes</h1>
                        <h2>International</h2>
                        <p>let's grow togetter</p>
                    </div>
                </Grid> 
            </Grid>
        </section>
    </div>
  )
}

export default Home