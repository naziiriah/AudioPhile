import { Box } from "@mui/material"



const Navigation = () => {

    return(
        <Box component="nav" sx={{
            marginTop:"2rem",
            height:"4rem",
            borderColor:"#979797",
            borderBottomWidth:"1px",
            borderBottomStyle:"solid",
            width:"80%",marginX:"10%",  
            display:"inline-flex"}}>
                <Box component="h3" sx={{
                     textTransform:"lowercase",
                     fontWeight:"600", color:"#fff",
                     letterSpacing:".6px", fontSize:"23px"      
                }}> audiophile</Box>
        </Box>
      
    )

}

export default Navigation