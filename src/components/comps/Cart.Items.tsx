import { Box, Image, Text, Icon } from "@chakra-ui/react";
import { CartProp } from "./Page.Cart";
import { useDispatch } from "react-redux";
import {  removeCartItem  } from "../../features/GearRoom";
import { MdDelete } from "react-icons/md";


const CartItems = (props:CartProp) => {
    const Dispatch = useDispatch()
    
    const classname:string = `delete-icon-4`




    return(
        <Box width={"100%"}marginY="1rem" 
        height="5rem"  
        key={props.id} display={"flex"} justifyContent={"space-between"} >
            <Image src={props.newItem.image.desktop} mr=".4rem" alt={props.newItem.slug} width={"3rem"} height={"3rem"}/>
            <Text as="h3" mt="-.1rem" fontWeight={"bold"} >{props.newItem.slug}</Text>
            <Box display="flex"  height="3rem" width={["9rem"]}  
            alignItems="center">

                                    <Box width="32%" bgColor="#f3f3f3" height="2rem" alignItems="center" >
                                        <Box my=".4rem"  mx="2rem">{props.value}</Box>
                                    </Box>
                                </Box>
            <Text as="h3" paddingRight="2rem">${props.total}</Text>
            <Box _hover={{cursor:"pointer"}} onClick={() => Dispatch(removeCartItem({"id":props.id}))}><Icon as={MdDelete} className={classname} /></Box>
        </Box>   
    )
}

export default CartItems;