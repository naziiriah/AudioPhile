
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure, 
  Box,
  Icon,
  Text, 
  Button
} from "@chakra-ui/react"
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch  } from "react-redux"
import { useNavigate } from "react-router-dom"
import { EmptyCart } from "../../features/GearRoom"
import { CartProp } from "../../utils/Types"
import CartItems from "./Cart.Items"



const BasicUsage = () => {
  
  const Dispatch = useDispatch(),
  Navigation  = useNavigate(),
  { isOpen, onOpen, onClose } = useDisclosure(),
  cart  = localStorage.getItem('Cart'),
  Cart = cart ? typeof(cart) === "string" && JSON.parse(cart) : "";


  function checkoutPage(){
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onClose
    Navigation("/products/checkout")
  }
    return (
      <>
        
      <Icon as={FaCartPlus} className="cart-icon" onClick={onOpen} 
      _hover={{cursor:"pointer", color:"#D87D4A"}}/>
        
        <Modal isOpen={isOpen} 
        onClose={onClose} size={"md"}>
                <ModalOverlay />
                    <ModalContent>
                        <ModalHeader display="flex" justifyContent="space-between">
                            <Text  as="h3"> cart </Text>
                            {
                              Cart.length > 0 && <Text _hover={{cursor:"pointer", color:"#D87D4A"}} className={"remove-tag"}
                                                onClick={() => Dispatch(EmptyCart())}>Remove all</Text>
                            }
                        </ModalHeader>
            
            
            <Box width="90%" margin="auto">
                   {
                     !Cart ?
                      "Cart is Empty" :
                      Cart.map((state: CartProp ) => 
                        <CartItems id={state.id} value = {state.value} total={state.total} newItem = {state.newItem}/>)}
              </Box>
            <ModalFooter>
              {Cart && <Button width="100%" className="checkout-page" onClick={() =>  checkoutPage()}>Check Out</Button>}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BasicUsage