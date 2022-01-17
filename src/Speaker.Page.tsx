import { Box, Text } from "@chakra-ui/react"
import InfoSection from "./components/comps/Page.Aside";
import PageFooter from "./components/comps/Page.footer";
import PageNavigation from "./components/comps/Page.navigation";
import Header from "./components/innerPages/Header"
import SectionArea from "./components/innerPages/innerPage.Section";


const Speaker = () => {


    return (
        <>
        <Box as ="header" bgColor={"#000"} width="100%" height="18rem">
            <Header/>
            <Text as="h2" color="#fff" mt="3rem"
             textAlign={"center"} fontWeight={"bold"}
             fontSize={"33px"} textTransform={"uppercase"} 
             letterSpacing={"2.5px"}>speakers</Text>
        </Box>
        <Box as="main" width="100%">
            <SectionArea Name = {"ZX9 Speaker"} order={0}/>
            <SectionArea Name = {"ZX7 Speaker"} order={1}/>
        </Box>
        <PageNavigation/>
        <InfoSection/>
        <PageFooter/>
        </>
    )
}

export default Speaker