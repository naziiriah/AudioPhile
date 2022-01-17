import { Box, Text } from "@chakra-ui/react";
import Header from "./components/innerPages/Header";
import PageFooter from "../src/components/comps/Page.footer";
import InfoSection from "../src/components/comps/Page.Aside";
import SectionArea from "./components/innerPages/innerPage.Section";
import PageNavigation from "./components/comps/Page.navigation";

const Headphone = () => {

    return(
        <>
        <Box as ="header" bgColor={"#000"} width="100%" height="18rem">
            <Header/>
            <Text as="h2" color="#fff" mt="3rem"
             textAlign={"center"} fontWeight={"bold"}
             fontSize={"33px"} textTransform={"uppercase"} 
             letterSpacing={"2.5px"}>Headphones</Text>
        </Box>
        <Box as="main" width="100%">
            <SectionArea Name = {"XX99 Mark II Headphones"} order={0}/>
            <SectionArea Name = {"XX99 Mark I Headphones"} order={1}/>
            <SectionArea Name={"XX59 Headphones"} order ={0}/>
        </Box>
        <PageNavigation/>
        <InfoSection/>
        <PageFooter/>
        </>
    )

}
export default Headphone