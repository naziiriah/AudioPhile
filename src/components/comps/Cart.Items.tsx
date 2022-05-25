import { Box, Image, Text, Icon } from "@chakra-ui/react";
import { CartProp } from "../../utils/Types";
import { useDispatch } from "react-redux";
import {  removeCartItem  } from "../../features/GearRoom";
import { MdDelete } from "react-icons/md";


const CartItems = (props:CartProp) => {
    const Dispatch = useDispatch(),
    classname:string = `delete-icon-4`;

    function deleteItem(){
        Dispatch(removeCartItem({"id":props.id}))
    }



    return(<>
        <Box width={"100%"}marginY="1rem" 
        height="5rem"  
        key={props.id} display={"flex"} justifyContent={"space-between"} >
            <Image src={props.newItem.image.desktop} mr=".4rem" alt={props.newItem.slug} width={"3rem"} height={"3rem"}/>
            <Text as="h3" mt="-.1rem" fontWeight={"bold"} >{props.newItem.slug}</Text>
            <Box display="flex"  height="3rem" width={["9rem"]}  
            alignItems="center">
                    <Box width="32%" bgColor="#f3f3f3" height="2rem" alignItems="center" >
                        <Box my="0rem"  mx=".6rem" fontSize={"20px"} fontFamily={"bold"}>{props.value}</Box>
                    </Box>
            </Box>
            <Text as="h3" paddingRight="2rem" mt=".2rem" fontSize={"23px"} >${props.total}</Text>
            <Box _hover={{cursor:"pointer"}} onClick={() => deleteItem() }><Icon as={MdDelete} mt=".6rem" fontSize={"23px"} className={classname} /></Box>
        </Box>   
        </>
    )
}

export default CartItems;