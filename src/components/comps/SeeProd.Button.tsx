import {  Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
    id: number | undefined
    color?: string | undefined
    category?: string | undefined
    slug?: string | undefined
}

const SeeButton = (props: Props) => {
    const classname = `see-products`
    const Navigate = useNavigate()
    return(
        <Button className= {classname}
        textTransform={"uppercase"} my="2rem"
        borderColor={"#000"} borderWidth={"3px"} 
        borderStyle={"solid"} color={"#000"}
        onClick={() =>Navigate(`/${ props.category }/${props.slug} `, {state:props.id}) }
        >see product</Button>
    )
}

export default SeeButton;