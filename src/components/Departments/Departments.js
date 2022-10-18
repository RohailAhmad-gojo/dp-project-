import { Button, Grid } from '@material-ui/core'
import React from 'react'
import "./Departments.css"
function Departments() {
  return (
    <div>
        <section id="departments">
            <Grid container justifyContent='space-evenly'>
                <Grid item lg={7} xs={10} className="AboutHeader">
                   <h1>Departments</h1>
                </Grid>
            </Grid>
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={11} md={10}>
                    <Grid container justifyContent='space-evenly' className='departmentsText'>
                        <Grid item md={6} xs={11} className='departmentsPara'>
                            <i><h2>web development</h2></i>
                            <p><span><i>Contrary</i></span> to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum </p>
                            <Button className='btn departmentsBtn'>Read Me</Button>
                        </Grid>
                        <Grid item md={6} xs={11} className="departmentsImg">
                            <img src='Assets/webs.jpg'/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='space-evenly' className='departmentsText'>
                        <Grid item md={6} xs={11} className="departmentsImg">
                            <img src='Assets/anime.jpg'/>
                        </Grid>
                        <Grid item md={6} xs={11} className='departmentsPara'>
                            <i><h2>3D Animation</h2></i>
                            <p><span><i>Animation</i></span> to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum </p>
                            <Button className='btn departmentsBtn'>Read Me</Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='space-evenly' className='departmentsText'>
                        <Grid item md={6} xs={11} className='departmentsPara'>
                            <i><h2>Graphic Design</h2></i>
                            <p><span><i>Design</i></span> to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum </p>
                            <Button className='btn departmentsBtn'>Read Me</Button>
                        </Grid>
                        <Grid item md={6} xs={11} className="departmentsImg">
                            <img src='Assets/design.jpg'/>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='space-evenly' className='departmentsText'>
                        <Grid item md={6} xs={11} className="departmentsImg">
                            <img src='Assets/market.jpg'/>
                        </Grid>
                        <Grid item md={6} xs={11} className='departmentsPara'>
                            <i><h2>Marketing</h2></i>
                            <p><span><i>Marketing</i></span> to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum </p>
                            <Button className='btn '>Read Me</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    </div>
  )
}

export default Departments