import { Box, Text } from "@chakra-ui/react"
import Header from "./components/innerPages/Header"

const Earphone = () => {

    return(
        <>
        <Box as ="header" bgColor={"#000"} width="100%" height="18rem">
            <Header/>
            <Text as="h2" color="#fff" mt="3rem"
             textAlign={"center"} fontWeight={"bold"}
             fontSize={"33px"} textTransform={"uppercase"} 
             letterSpacing={"2.5px"}>earphones</Text>

        </Box>
        </>
    )

}
export default Earphone