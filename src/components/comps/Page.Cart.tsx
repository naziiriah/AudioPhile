
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure, 
  Box,
  Icon,
  Text
} from "@chakra-ui/react"
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { EmptyCart } from "../../features/GearRoom"
import CartItems from "./Cart.Items"


 export interface CartProp {
  id:number | undefined
  value : number 
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

    
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const Cart  = useSelector((state: RootState) => state.gears.cart)
    return (
      <>
        
      <Icon as={FaCartPlus} onClick={onOpen} 
      _hover={{cursor:"pointer", color:"#D87D4A"}}/>
        
        <Modal isOpen={isOpen} 
        onClose={onClose} size="sm">

                <ModalOverlay />
                    <ModalContent>
                        <ModalHeader display="flex" justifyContent="space-between">
                            <Text  as="h3"> cart </Text>
                            <Text _hover={{cursor:"pointer", color:"#D87D4A"}}
                            onClick={() => Dispatch(EmptyCart())}>Remove all</Text>

                        </ModalHeader>
            
            
            <Box width="90%" margin="auto">
              
                   {
                   Cart.map(
                     (state: CartProp ) => <CartItems id={state.id} value = {state.value} newItem = {state.newItem}/>)}
              </Box>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BasicUsage