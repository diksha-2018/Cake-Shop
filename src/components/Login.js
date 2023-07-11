import React from 'react'
import {CardContent, Typography,Card,Grid,TextField,Button,Stack} from "@mui/material";
import styles from '../styles.module.css';
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <>
        <Typography  gutterBottom variant="h3" m={1} align="center" sx={{color:"green",m:5,fontWeight:"bold"}}>Login Form</Typography>
    <Card style={{maxWidth:450,margin:"0 auto",padding:"20px 5px"}} sx={{height:500,m:10
}}>
        <CardContent>
            <form>
            <Grid container spacing={1} >
                <Grid xs={12} item>
                    <TextField  type="email" label="Email" placeholder="Enter Email" variant="outlined" fullWidth sx={{color:"green"}}/>
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
                    <p>Don't have account? </p>
                    <Link to="/signup" >Signup</Link>
        </Stack>

    </Card>
    </>
  )
}

export default Login;