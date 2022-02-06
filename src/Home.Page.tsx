import { Box, Image, Text } from "@chakra-ui/react"
import PageNavigation from "./components/comps/Page.navigation";
import imageSpeaker from "../src/store/assets/home/desktop/image-speaker-zx9.png"
import HomeHeader from "./components/Home/home.Top.section";
import earbud from "../src/store/assets/home/desktop/image-earphones-yx1.jpg"
import InfoSection from "./components/comps/Page.Aside";
import PageFooter from "./components/comps/Page.footer";


const Home = () => {

    return (
        <Box width="100%">
            {/*Shows the head section of the homepage web  */}
            <HomeHeader/>

            <Box as="main" width="100%">
                {/* within page navigation */}
                <PageNavigation/>
                {/* sections area of the web application of THE WEBSITE SHOWING DIFFERENTS  */}

                <Box as="article" 
                className="container"
                width="100%">
                    <Box as ="section" width={["100%","90%","80%","80%"]} 
                    margin="auto" borderRadius="7px" marginTop="4rem" 
                    height={["80rem","80rem","35rem","35rem"]} bgColor="#D87D4A" 
                    display="flex" flexDirection={["column", "column", "row", "row"]} 
                    justifyContent="space-around">
                        <Box width={["90%","90%","45%","45%"]} 
                        my={["10%", "10%", "0", "0"]} margin="auto">
                            <Image src={ imageSpeaker } width={["100%","100%", "23rem", "23rem"]} 
                            mt="7.2rem" height="28rem" alt="speaker-model-zx9"/> 
                        </Box>
                
                <Box as="p" mt="8.2rem" width={["90%","90%","45%","45%"]} margin="auto">
                    <Text as ="h1" fontSize="60px" color="#fff"
                     width={["100%","100%", "23rem", "23rem"]} 
                     textAlign="start" fontWeight="550" 
                     textTransform="uppercase" lineHeight="70px">
                     zx9 speaker</Text>
                    <Box as="p" width="80%"  
                    color="#f1f1f1" mt="2rem" textAlign="start"
                    lineHeight="30px" fontSize="20px">
                    Upgrade to premium speakers that are
                     phenomenally built to deliver truly remarkable sound
                    </Box>
                    <Box width={["70%","50%","80%","80%"]} margin="auto" my="2rem">
                    
                    </Box>
                </Box>
            </Box>

            <Box as="section" className="speak-bg" 
            width={["100%","90%","80%","80%"]} 
            height="25rem"  margin="auto"
            marginTop="4rem" borderRadius="7px">
                <Text as ="h2" 
                fontSize={["33px", "55px", "55px","55px"]} 
                paddingTop="5rem" paddingLeft={["20%","10%","10%","10%"]}
                color="#000" width={["70%", "70%", "100%", "100%"]}  
                fontWeight="550" textTransform="uppercase" 
                lineHeight="70px">zx7 speaker</Text>
                    <Box paddingLeft={["10%","10%","20%","30%"]}></Box>
            </Box>

            

            <Box as="section"  margin='auto'  marginTop="0rem"display="flex" 
            flexDirection={["column", "column", "row","row"]}
            justifyContent="space-between" width={["100%","90%","80%","80%"]} height="30rem">
            <Image src={ earbud } width={["100%","100%","50%","50%"]}  height="22rem"/>
            <Box width={["100%","100%","80%","80%"]} 
            height={["40rem", "40rem", "30rem","22rem"]} 
            bgColor="#f1f1f1">
                <Box as ="h2" fontSize="45px" color="#000" 
                width="100%"  marginY="4rem" textAlign="center" 
                fontWeight="550" textTransform="uppercase" 
                lineHeight="70px">yx1 earphone</Box>
                <Box margin="auto" width="50%"></Box>
            </Box>
            </Box>
            </Box>

                <InfoSection/>
            </Box>  
            <PageFooter/>
        </Box>
     
    )
}

export default Home;