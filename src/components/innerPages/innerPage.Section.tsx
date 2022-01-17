import { Box,Image } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import SeeButton from "../comps/SeeProd.Button"

interface Props {
    Name:string,
    order:number
}



const  SectionArea = (props:Props) => {
    const Name = props.Name
    const gears  = useSelector((state: RootState) => state.gears.value)

    const Gear = gears.find( gear => gear.name === Name)
    
    
    return(
    <Box as="section" key={Gear?.id} width={["100%","90%","80%","80%"]} display="flex" 
    flexDirection={["column", "column", "column", "row"]}  margin = "auto" 
    marginTop="6rem" justifyContent="space-between" height={["70rem", "70rem","70rem", "30rem"]} >

        <Image src={Gear?.image.desktop} alt={Gear?.slug} order= {["0","0","0",`${props.order}`]}/>

        <Box marginLeft="0rem" width = {["100%","100%","100%",'40%']}
        textAlign={["center", "center", "center", "start"]} 
        height={["50rem", "50rem","50rem", "30rem"]}>
            { Gear?.new && <Box as="h3"color="#D87D4A" fontSize="20px" marginTop="3rem" textTransform="uppercase" letterSpacing="8px"> new product</Box>}

            <Box as ="h1" fontSize="36px" fontWeight="600" my=".5rem" textTransform="uppercase" letterSpacing="4px" >{Gear?.name}</Box>
            <Box as ="p" fontSize="20px" >{Gear?.description}</Box>
            <SeeButton id={Gear?.id} category = {Gear?.category} slug={Gear?.slug}/>
        </Box>
    </Box>
    )
}

export default SectionArea