import { Box,Image, Button } from "@chakra-ui/react"




const MiniComponets = () => {

    return (
        <Box as="section" width={["20rem", "20rem", "10rem", "20rem"]} height="31rem" margin="auto">
            <Image  marginTop="-5rem"/>
            <Box as ="h2" textAlign="center" marginTop={["0.5rem" ,"0.5rem", "1rem", "1rem"]} fontSize="23px" fontWeight="600">name</Box>
            <Box marginLeft ="3rem">
            <Button></Button>
            </Box>
        </Box>
    )
}

export default MiniComponets