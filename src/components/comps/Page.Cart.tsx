
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
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../app/store"
import { EmptyCart } from "../../features/GearRoom"
import CartItems from "./Cart.Items"


 export interface CartProp {
  id:number | undefined
  value : number,
  total:number,
  newItem :{
    id: number;
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    category: string;
    categoryImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    new: boolean;
    price:number;
    description:string;
    features:string;
    includes:{
        quantity:number;
        item:string;
    }[];
    gallery:{
        first:{
            mobile:string;
            tablet:string;
            desktop:string;
        };
        second:{
            mobile:string;
            tablet:string;
            desktop:string;
        },
        third:{
            mobile:string;
            tablet:string;
            desktop:string;
        }
    };
    others:{
        slug:string;
        name:string;
        image:{
            mobile:string;
            tablet:string;
            desktop:string;
        }
    }[]
    }
}


const BasicUsage = () => {
  
  const Dispatch = useDispatch()
  const Navigation  = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const Cart  = useSelector((state: RootState) => state.gears.cart)

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
                   Cart.map(
                     (state: CartProp ) => <CartItems id={state.id} value = {state.value} total={state.total} newItem = {state.newItem}/>)}
              </Box>
            <ModalFooter>
              {Cart.length > 0 && <Button width="100%" className="checkout-page" onClick={() =>  checkoutPage()}>Check Out</Button>}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BasicUsage