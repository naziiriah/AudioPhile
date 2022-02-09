import { Box } from "@chakra-ui/react"

import Header from "../innerPages/Header";
import HomeButton from "./Home.Buttons";



const HomeHeader = () => {


return(
    <Box className="header" as="header"
        backgroundPosition="cover"
        backgroundSize="100% 100%"
        width="100%"height="45rem">

        <Header/>

        <Box h="450"  color="white"  width={["100%","100%","60%","90%"]} margin={"auto"}
                    paddingTop="10rem" paddingLeft="4rem" textAlign={["center", "center", "start","start" ]} >
                    <Box textTransform="uppercase" letterSpacing="9px" 
                     fontSize="19px" as="h4" width="100%" color="grey" mb="1rem">
                        new product
                    </Box>
                    <Box as="h1" 
                    width={["90%","90%","80%", "50%"]} textTransform="uppercase" 
                    fontSize={["33px","33px","41px","59px"]}
                    fontWeight="700" letterSpacing="3px" textAlign={["center", "center", "start","start" ]}
                    >xx99 mark ii headphones
                    </Box>
                    <Box as="p" lineHeight="30px" fontSize="17px" 
                    color="grey.400" w="40%" my="2rem">
                        Experience natural, lifelike audio and exceptional 
                        building quality made for the passionate music
                        enthusiast.
                    </Box>
                    
                        <HomeButton location ={'headphones/xx99-mark-two-headphones'} id={4}/>
                    
                    
                </Box>

    </Box>
)

}

export default HomeHeader;