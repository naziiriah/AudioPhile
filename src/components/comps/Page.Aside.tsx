import { Box, Text,Image } from "@chakra-ui/react"
import image from "../../store/assets/shared/desktop/image-best-gear.jpg"

const InfoSection = () => {
   

    return(
        <Box as ="aside" order="revert" width={["100%","100%","90%","80%"]} 
        height={["70rem", "70rem","70rem", "40rem"]} display="flex" 
        flexDirection={["column", "column", "column", "row"]}  
        justifyContent="space-between" margin="auto" marginTop="5rem">
            <Box marginTop="6rem">
                <Text as="h2" lineHeight=""
                textTransform="uppercase" marginBottom="1.5rem" margin="auto"
                fontSize="33px" fontWeight="700" letterSpacing="2px"
                width={["90%","90%","90%","27rem"]} textAlign={["center", "center", "start", "start"]}
                >bringing you the best <Text as="span" color="#D87D4A"> audio</Text> gear</Text>
                <Text as="p" width={["90%","90%","90%","27rem"]} margin="auto" textAlign={["center", "center", "center", "start"]} lineHeight="28px" fontSize="20px" letterSpacing=".3px" >
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
                We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
                Stop by our store to meet some of the 
                fantastic people who make Audiophile the best place to buy your portable audio equipment.</Text>
            </Box>
        <Image height="37rem" src={image} alt="enjoying music with our gears" />
    </Box>
    )
}

export default InfoSection