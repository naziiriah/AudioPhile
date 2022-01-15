import {  Button } from "@chakra-ui/react";

const SeeButton = (props:string) => {
    
    return(
        <Button 
        textTransform={"uppercase"}
        borderColor={"#000"} borderWidth={"3px"} 
        borderStyle={"solid"} color={"#000"}
        >see product</Button>
    )
}

export default SeeButton;