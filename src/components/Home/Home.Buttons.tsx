import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


interface type {
    location:string
    id:number
    color?:string
    bgColor?:string
}


const HomeButton = (props:type) => {  

const Navigate = useNavigate()    

    return(
        <Button 
        textTransform={"uppercase"} my="2rem"
        borderColor={"#000"} borderWidth={"3px"} 
        borderStyle={"solid"} color={"brown"}
        bgColor={"white"} height={"4rem"}
        onClick ={() => Navigate(props.location, {state:props.id} )}>
            see product
        </Button>
    )
}

export default HomeButton