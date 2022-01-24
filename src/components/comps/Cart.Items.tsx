import { Box, Image, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { CartProp } from "./Page.Cart";
import { IoMdAdd} from "react-icons/io"
import { FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../features/GearRoom";
import { MdDelete } from "react-icons/md";


const CartItems = (props:CartProp) => {
    const Delete = useDispatch()
    const [amount,  setAmount] = useState(props.value)

    function decrement(){
        //    for decreasing the value on the product page
           return amount === 0 ? amount : setAmount(amount - 1)
       }
    
       function increment(){
        //    for increasing the value on the product page
        return amount === 10 ? amount : setAmount(amount + 1)
    }
    
   

    return(
        <Box width={"100%"}marginTop="1rem" 
        height="2rem"  
        key={props.id} display={"flex"} justifyContent={"space-between"} >
            <Image src={props.newItem.image.desktop} alt={props.newItem.slug} width={"2rem"} height={"2rem"}/>
            <Text as="h3">{props.newItem.slug}</Text>
            <Box display={"flex"} width={"9rem"} >
                <Box width={"3rem"}><Icon as={FaMinus}  margin={"auto"}/></Box>
                <Box width={"3rem"} textAlign={"center"}>{amount}</Box>
                <Box width={"3rem"}  onClick={() => increment()}>< Icon as={IoMdAdd} margin={"auto"}/></Box>
            </Box>
            <Box _hover={{cursor:"pointer"}} onClick={() => Delete(removeCartItem({"id":props.id}))}><Icon as={MdDelete}/></Box>
        </Box>   
    )
}

export default CartItems;