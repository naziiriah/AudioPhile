import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

interface Props {
    color?: string | undefined
    category?: string | undefined
    slug: string | undefined
}

const ProductPageButton = (props: Props) => {

    const Navigate = useNavigate()
    
    return(
        <Button 
        textTransform={"uppercase"} margin={"auto"} 
        borderColor={"#000"} borderWidth={"3px"} 
        borderStyle={"solid"} color={"#000"} my="2rem"
        onClick={() =>Navigate(`/${ props.category }/${props.slug}`, {state:props.slug}) }
        >see product</Button>
    )

}

export default ProductPageButton