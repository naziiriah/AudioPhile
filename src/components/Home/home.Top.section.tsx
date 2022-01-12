import { Box } from "@chakra-ui/react"
import Navigation from "./home.Top.navigation";


const HomeHeader = () => {


return(
    <Box className="header" as="header"
        backgroundPosition="cover"
        backgroundSize="100% 100%"
        width="100%"height="45rem"
        >
        <Navigation/>
            

    </Box>
)

}

export default HomeHeader;