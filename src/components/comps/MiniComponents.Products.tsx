import { Box,Image } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import ProductPageButton from "../innerPages/Product.Button"

interface Props{
    slug:string,
    image:string
}

const MiniComponets = (props:Props) => {
    const AudioItems = useSelector((state:RootState) => state.gears.value)

    const Item = AudioItems.find(state => state.slug === props.slug )
    return (
        <Box as="section" width={["20rem", "20rem", "10rem", "20rem"]} 
        height={["31rem","31rem","10rem","10rem"]} margin="auto">

            <Image  src={props.image} alt={props.slug} marginTop="-5rem"/>

            <Box as ="h2" textAlign="center" 
            marginTop={["0.5rem" ,"0.5rem", "1rem", "1rem"]} 
            fontSize="23px" fontWeight="600"> {props.slug}
            </Box>

            <Box marginLeft ="5rem">
                <ProductPageButton slug={props.slug} category={Item?.category}/>
            </Box>
        </Box>
    )
}

export default MiniComponets