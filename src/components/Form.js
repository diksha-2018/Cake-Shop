import React from 'react'
import {CardContent, Typography,Card,Grid,TextField,Button,Stack} from "@mui/material";
import {Link} from "react-router-dom";

const Form = () => {
  return (
    <>
    <Typography  gutterBottom variant="h3" m={1} align="center" sx={{color:"green",m:5,fontWeight:"bolder"}}>SignUp Form</Typography>
    <Card style={{maxWidth:450,margin:"0 auto",padding:"20px 5px"}} sx={{height:500,m:10
}}>
        <CardContent>
            <form>
            <Grid container spacing={1} >
                <Grid xs={12} sm={6} item >
                    <TextField label="First Name" placeholder="Enter First Name" variant="outlined" fullWidth/>
                </Grid>
                <Grid xs={12} sm={6}  item>
                    <TextField label="Last Name" placeholder="Enter Last Name" variant="outlined" fullWidth/>
                </Grid>
                <Grid xs={12} item>
                    <TextField  type="email" label="Email" placeholder="Enter Email" variant="outlined" fullWidth/>
                </Grid>
                <Grid xs={12} item> 
                    <TextField  type="password" label="Password" placeholder="Enter Password" variant="outlined" fullWidth/>
                </Grid>
                <Grid xs={12} item> 
                    <Button type="submit" variant="contained"  sx={{backgroundColor:"green",":hover":{bgcolor:"green",color:"white"}}} fullWidth>Login</Button>
                </Grid>
            </Grid>
            </form>
        </CardContent>
        <Stack spacing={1} flexWrap="row" flexDirection="row">
                    <p>Already have account? </p>
                    <Link to="/login" >Login</Link>
        </Stack>
    </Card>
    </>
  )
}

export default Form;