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
        <Box width={"100%"}marginY="1rem" 
        height="5rem"  
        key={props.id} display={"flex"} justifyContent={"space-between"} >
            <Image src={props.newItem.image.desktop} mr=".4rem" alt={props.newItem.slug} width={"3rem"} height={"3rem"}/>
            <Text as="h3" mt="-.1rem" fontWeight={"bold"} >{props.newItem.slug}</Text>
            <Box display="flex"  height="3rem" width={["9rem"]}  
            alignItems="center">
                                    <Box width="32%" bgColor="#f3f3f3"  height="2rem" 
                                    alignItems="center" justifyItems={"center"} onClick={() => decrement()}>
                                        <Icon as ={FaMinus}  margin="auto"my=".5rem"  mx="0rem"/>
                                    </Box>

                                    <Box width="32%" bgColor="#f3f3f3" height="2rem" alignItems="center" >
                                        <Box my=".4rem"  mx="2rem">{amount}</Box>
                                    </Box>
                        
                                    <Box className="add-to-value" width="32%" height="2rem" bgColor="#f3f3f3" 
                                    alignItems="center" onClick={() => increment()} >
                                        <Icon my=".5rem"  mx="2rem" as={IoMdAdd}/>
                                    </Box>

                                </Box>
            <Text as="h3" paddingRight="2rem">${props.total}</Text>
            <Box _hover={{cursor:"pointer"}} onClick={() => Dispatch(removeCartItem({"id":props.id}))}><Icon as={MdDelete} className={classname} /></Box>
        </Box>   
    )
}

export default CartItems;