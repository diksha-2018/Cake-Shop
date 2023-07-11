import React from 'react'
import {Typography,Grid,Box,Button} from "@mui/material"
import cake from '../images/cake.jpg'

const HeroSection = () => {
  return (
    <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
            <Typography variant="h3">
                A bliss in every bite
            </Typography>
            <Typography variant="h6">
                We offer tasty cakes and sweets for you.
            </Typography>
            <Button variant='contained' size="large" sx={{borderRadius:'10px'}}>order now</Button>
        </Grid>
        <Grid container item xs={12} sm={6} justifyContent="center" order={{xs:1,sm:2}}>
            <Box className="image" component="img" src="https://cdn.pixabay.com/photo/2016/10/27/22/12/cakes-1776661_1280.jpg"></Box>
        </Grid>
    </Grid>
  )
}

export default HeroSection;