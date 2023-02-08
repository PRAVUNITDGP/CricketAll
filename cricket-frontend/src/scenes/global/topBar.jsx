import {Box , IconButton , Typography, useTheme,Link,Tooltip} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';



const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return (
        <Box display="flex" justifyContent = "space-between" p={2} color = "inherit">
            
            {/*  Left links  */}
            <Box display="flex" backgroundColor={colors.primary[400]}>
                <Link href="#" onClick = {()=> {console.log('hello')}} variant="h5" color="inherit" underline="none" >
                    Matches
                </Link>
                <Link mx = {2} href="#" onClick = {()=> {console.log('hello')}} variant="h5" color="inherit" underline="none">
                    Teams
                </Link>
                <Link href="#" onClick = {()=> {console.log('hello')}} variant="h5" color="inherit" underline="none">
                    News
                </Link> 
            </Box> 
            {/*   right icons       */}
            <Box display="flex" >
                <IconButton onClick={colorMode.toggleColorMode}>
                    {
                        theme.palette.mode === "dark" ? (
                            <DarkModeOutlinedIcon/>
                        ) : 
                        (
                            <LightModeOutlinedIcon/>
                        )
                    }
                </IconButton>
                <Tooltip title="Home">
                    <IconButton>
                    <HomeIcon/> 
                    </IconButton>
                </Tooltip>
                
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <Tooltip title="Log Out">
                    <IconButton>
                        <LogoutOutlinedIcon/>
                    </IconButton>
                </Tooltip>
                

            </Box>

        </Box>
    )
}

export default TopBar ;