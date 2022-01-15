import { Box, Icon } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import BasicUsage from "../comps/Page.Cart";



const Header = () => {

    const [smallScreen, setSize] = useState(false)
    return (
        <Box as="nav">
            <Box className="Header"maxWidth="100rem" 
            width="90%" margin="auto" h="100" color="#fff">
                <Box mt="3" margin="auto" h="20"  d="flex" 
                justifyContent= "space-between" alignItems="center"
                borderBottomColor="white" borderBottomStyle="solid" 
                borderBottomWidth="1.5px" >
                    <Box as="h2" fontSize="18" order={["2","2","2","1"]}
                    color="#fff" fontWeight="700" letterSpacing="2px"
                    >audiophile</Box>

                    <Box _hover={{cursor:"pointer", color:"#D87D4A"}}
                    display={["block", "block", "block", "none"]}>
                        <Icon as={ GiHamburgerMenu } 
                        onClick={()=>{setSize(!smallScreen)}}></Icon>
                    </Box>

                    <Box  as="ul" order={["1","1","2","2"]} d={["none", "none","none","inline-flex"]} textDecoration="none" listStyleType="none" fontSize="">
                        <Link to="/"> <Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >home</Box></Link>
                        <Link to="/headphones"><Box as="li" fontSize="15" textTransform="uppercase" textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >headphones</Box></Link>
                        <Link to="/speakers"><Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >speakers</Box></Link>
                        <Link to="/earphones"><Box as="li" fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >earphones</Box></Link>
                    </Box>
                    
                    <Box order={["3"]}>
                        <BasicUsage/>
                    </Box>
                </Box> 
            <Box>
            </Box>
            </Box>
        </Box>
    )
}

export default Header