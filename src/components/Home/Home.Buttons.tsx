import { Button } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../app/store"
import { CartProp } from "../comps/Page.Cart"

interface type {
    id: number,
    bgColor:string,
    color:string,
}


const HomeButton = (props:type) => {

    const gears = useSelector((state:RootState) => state.gears.cart)

    const location = gears.find((state: CartProp) => state.id === props.id)
    
    const Navigate = useNavigate()
    

    return(
        <Button 
        textTransform={"uppercase"} my="2rem"
        borderColor={"#000"} borderWidth={"3px"} 
        borderStyle={"solid"} color={props.color}
        bgColor={props.bgColor} height={"6rem"}
        onClick ={() => Navigate(`/${ location[0].category }/${location[0].slug}`, {state:props.id})}>
            see product
        </Button>
    )
}

export default HomeButton