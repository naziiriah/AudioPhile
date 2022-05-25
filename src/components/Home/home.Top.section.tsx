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

        <Box h="450"  color="white"  width={["100%","100%","100%","90%"]} margin={"auto"}
                    paddingTop="10rem" paddingLeft="4rem" textAlign={["center", "start", "start","start" ]} >
                    <Box textTransform="uppercase" letterSpacing="9px" textAlign={["center","center", "center", "start"]} 
                     fontSize={["19px"]} as="h4" w={["100%", "80%", "100%", "40%"]} color="grey" mb="1rem">
                        new product
                    </Box>
                    <Box as="h1" 
                    width={["90%","90%","90%", "50%"]} textTransform="uppercase" 
                    fontSize={["33px","33px","41px","59px"]} margin={["0","0", "auto","0"]}
                    fontWeight="700" letterSpacing="3px" textAlign={["center","center", "center", "start"]} 
                    >xx99 mark ii headphones
                    </Box>
                    <Box as="p" lineHeight="30px" fontSize={["17px", "17px", "27px", "27px" ]}

                    color="grey.400" w={["100%", "70%", "90%", "40%"]} margin={["0","auto", "auto","0"]} textAlign={["center","center", "center", "start"]} my="2rem">
                        Experience natural, lifelike audio and exceptional 
                        building quality made for the passionate music
                        enthusiast.
                    </Box>
                    <Box width={"100%"} marginLeft={['-3rem', "-3rem","0rem", "0rem"]}>
                    <HomeButton location ={'headphones/xx99-mark-two-headphones'} id={4}/>
                    </Box>
                </Box>

    </Box>
)

}

export default HomeHeader;