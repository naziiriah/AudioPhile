import { Box, Image, Icon } from "@chakra-ui/react"
import miniHeadphones from "../../store/assets/shared/desktop/image-category-thumbnail-headphones.png";
import miniSpeakers from "../../store/assets/shared/desktop/image-category-thumbnail-speakers.png";
import miniEarphone from "../../store/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { IoIosArrowForward } from 'react-icons/io';
const PageNavigation = () => {


    return(
        <Box as="section" 
        display="flex" h={["70rem", "70rem", "500", "500"]}  w={["90%","90%", "100%","100%"]} 
        flexDirection={["column", "row", "row", "row"]}
        bgColor="#fff"
        margin="auto">
            <Box w="80%" h="26rem"d="flex" textTransform="uppercase"
            flexDirection={["column", "column", "row", "row"]} 
            m="auto" marginTop="10rem" justifyContent="space-between" >
                <Box height="15rem" marginTop="3rem" marginBottom="5rem"
                bgColor="#f1f1f1" w="90%" mx="2%" _hover={{ cursor:"pointer"}}>
                    <Image marginTop="-5rem" mx="auto"  width="13rem"
                    src={miniHeadphones} alt="headphones"/>
                    <Box as="h2" mt=".5rem" textAlign="center" fontSize="22px"
                     fontWeight="700" letterSpacing="1px" >headphones</Box>
                    <Box as="h4" mt=".5rem" fontSize="19px"textAlign="center"
                     fontWeight="550" _hover={{ color:"#D87D4A",cursor:"pointer"}}
                      >shop <Icon mx=".5rem" as={ IoIosArrowForward } color="#D87D4A" /></Box>
                </Box>
                <Box height="15rem" marginTop="3rem" marginBottom="5rem" bgColor="#f1f1f1"
                 w="90%" mx="2%"   _hover={{ cursor:"pointer"}} >
                    <Image  marginTop="-5rem" mx="auto" src={miniSpeakers} alt="speakers" width="13rem" />
                    <Box as="h2" mt=".5rem" textTransform="uppercase" textAlign="center" fontSize="22px" 
                    fontWeight="700" letterSpacing="1px" >speaker </Box>
                    <Box as="h4" mt=".5rem" fontSize="19px"textAlign="center" fontWeight="550" 
                    _hover={{ color:"#D87D4A",cursor:"pointer"}} >shop 
                    <Icon mx=".5rem" as={ IoIosArrowForward } color="#D87D4A" /></Box>
                </Box>
                <Box height="15rem" marginTop="3rem" marginBottom="5rem" 
                bgColor="#f1f1f1" w="90%"  mx="2%"  _hover={{ cursor:"pointer"}}>
                    <Image marginTop="-5rem" mx="auto" src={miniEarphone} 
                    alt="earphones" width="13rem" />
                    <Box as="h2" mt=".5rem" textTransform="uppercase"
                     textAlign="center" fontSize="22px" fontWeight="700"
                      letterSpacing="1px" > earphones</Box>
                    <Box as="h4" mt=".5rem" fontSize="19px" textAlign="center"
                     fontWeight="550" _hover={{ color:"#D87D4A",cursor:"pointer"}}
                      >shop <Icon mx =".5rem" as={ IoIosArrowForward } color="#D87D4A"/></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PageNavigation;