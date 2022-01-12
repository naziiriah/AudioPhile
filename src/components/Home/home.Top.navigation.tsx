import { Box } from "@chakra-ui/react"



const Navigation = () => {

    return(
        <Box as="nav" 
            paddingTop="2rem"
            
            height="5rem"
            borderColor="#979797"
            borderBottomWidth="1px"
            borderBottomStyle="solid"
            width="80%" mx="10%"color={"#fff"}
            display="flex" justifyContent="space-between">
                <Box as="h3" 
                     textTransform="lowercase"
                     fontWeight="600" color="#fff"
                     letterSpacing=".6px" fontSize="23px"
                     _hover={{color:"D87D4A", cursor:"pointer"}}      
                > audiophile</Box>
                <Box as="ul" 
                    display="inline-flex" width="30rem"
                    justifyContent="space-between" listStyleType={"none"}>
                        <Box as="li" color={"#fff"} pt="0.5rem"
                            fontSize="15px" textDecoration="none"
                            textTransform="uppercase" mx="0.5rem"
                            _hover={{color:"#D87D4A", cursor:"pointer"}}
                            >home</Box>

                        <Box as="li" color={"#fff"} pt="0.5rem"
                            fontSize="15px" textDecoration="none"
                            textTransform="uppercase" mx="0.5rem"
                            _hover={{color:"#D87D4A", cursor:"pointer"}}
                            >headphones</Box>

                        <Box as="li" color={"#fff"} pt="0.5rem"
                            fontSize="15px" textDecoration="none"
                            textTransform="uppercase" mx="0.5rem"
                            _hover={{color:"#D87D4A", cursor:"pointer"}}
                            >speakers</Box>

                        <Box as="li" color={"#fff"} pt="0.5rem"
                            fontSize="15px" textDecoration="none"
                            textTransform="uppercase" mx="0.5rem"
                            _hover={{color:"#D87D4A", cursor:"pointer"}}
                            >earphones</Box>

                </Box>


        </Box>
      
    )

}

export default Navigation