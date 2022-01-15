import { Box,Image } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

interface Props {
    Name:string,
    order:number
}


const SectionArea = (props:Props) => {
    const Name = props.Name
    const gears  = useSelector((state: RootState) => state.gears.value)

    const Gear = gears.find( gear => gear.name === Name)
    
    return(<Box></Box>
        
    )
}

export default SectionArea