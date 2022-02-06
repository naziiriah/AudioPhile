import { Box, Image, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { CartProp } from "./Page.Cart";
import { IoMdAdd} from "react-icons/io"
import { FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AddCartAmount, removeCartItem, removeCartAmount } from "../../features/GearRoom";
import { MdDelete } from "react-icons/md";


const CartItems = (props:CartProp) => {
    const Dispatch = useDispatch()
    const [amount,  setAmount] = useState(props.value)
    const classname:string = `delete-icon-4`


  function AddToValue(){
    Dispatch(AddCartAmount({
        "id":props.id,
        "value": amount
    }))
  }
function reduceFromValue(){
    Dispatch(removeCartAmount({
        "id":props.id,
        "value": amount
    }))
}

    function decrement(){
        //    for decreasing the value on the product page
        return (amount === 0 ? amount : setAmount(amount - 1),reduceFromValue())
       }
    
    function increment(){
        //    for increasing the value on the product page
        return (amount === 10 ? amount : setAmount(amount + 1), AddToValue())
    }
    
   

    return(
        <Box width={"100%"}marginTop="1rem" 
        height="2rem"  
        key={props.id} display={"flex"} justifyContent={"space-between"} >
            <Image src={props.newItem.image.desktop} alt={props.newItem.slug} width={"2rem"} height={"2rem"}/>
            <Text as="h3">{props.newItem.slug.slice(0, 4)}</Text>
            <Box display={"flex"} width={"9rem"} >
                <Box width={"3rem"} onClick={() => decrement()}><Icon as={FaMinus}  margin={"auto"}/></Box>
                <Box width={"3rem"} className="cart-value" textAlign={"center"}>{amount}</Box>
                <Box className="add-cart-value" width={"3rem"}  onClick={() => increment()}>< Icon as={IoMdAdd} margin={"auto"}/></Box>
            </Box>
            <Box>${props.total}</Box>
            <Box _hover={{cursor:"pointer"}} onClick={() => Dispatch(removeCartItem({"id":props.id}))}><Icon as={MdDelete} className={classname}/></Box>
        </Box>   
    )
}

export default CartItems;