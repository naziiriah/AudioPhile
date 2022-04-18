import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    useDisclosure, 
    ModalBody,
    Button,
    Box,
    Icon,
    Text,
    Image
  } from "@chakra-ui/react"
import { IoMdCheckmark } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { useDispatch } from "react-redux";
import { EmptyCart } from "../features/GearRoom";
interface Prop {
    total : number
}

const CheckoutButton = (prop : Prop) =>  {

    const Cart = useSelector((state:RootState) => state.gears.cart ),
    { isOpen, onOpen, onClose } = useDisclosure(),
    Navigation  = useNavigate(),
    FirstItem = Cart[0],
    Dispatch = useDispatch();

    function ToHome(){
        Navigation('/')
        Dispatch(EmptyCart())
    }
  
    return (
      <>
        <Button onClick={onOpen} width="100%" height="3rem" textTransform="uppercase" bgColor="#D87D4A" color="#fff" className="final-modal">continue & pay</Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
          
            <ModalBody  >
                <Box width="5rem" height="5rem" bgColor="#D87D4A" borderRadius="50%" my="2rem">
                    <Icon as={ IoMdCheckmark } mt="1rem" mx="1rem" fontSize="3rem" color="white"></Icon>
                </Box>
                <Box>
                    <Text as="h1" textTransform="uppercase" letterSpacing="1px" fontSize="37px" fontWeight ="600" >Thank you</Text>
                    <Text as="h1" textTransform="uppercase" letterSpacing="1px" fontSize="37px" fontWeight ="600" >for your order </Text>
                </Box>
                <Box width="100%" display="flex" height="30rem" mt="2rem" flexDir={["column", "column", "column", "column"]}>
                    <Box width={["100%", "100%", "100%", "100%"]} height="30rem" color="#000" bgColor="#f3f3f3">
                        <Box width="80%" margin="auto" height="70%" fontSize="23px" marginTop="4rem" marginBottom="-4rem">
                        <Box height={"4rem"} my="1rem" width={"100%"} display={"flex"} justifyContent={"space-between"} >
                                        <Box display={"flex"} >

                                            <Image src={FirstItem.newItem.image.desktop} alt={FirstItem.newItem.slug} width={"3rem"} height={"3rem"}/>

                                            <Box marginLeft={"1rem"}>
                                                <Text as="h3">{FirstItem.newItem.slug}</Text>
                                                <Text>${FirstItem.newItem.price}</Text>
                                            </Box>

                                        </Box>

                                        <Box width={"3rem"} textAlign={"center"}>x{FirstItem.value}</Box>
                                    </Box>
                        </Box>
                        { Cart.length > 1 && 
                                    <Box width="80%" margin="auto" borderTopColor="#000" borderTopWidth="3px" borderTopStyle="solid" height="40%">
                                        <Text as="h3" fontWeight="500" fontStyle="43px" textAlign="center">
                                            and { Cart.length - 1 } other item(s)
                                        </Text>
                                    </Box>
                        }
                    </Box>
                    <Box width={["100%", "100%", "100%", "100%"]} height="30rem" bgColor="#000">
                        <Text as="h2" fontSize="27px" fontWeight="600" textTransform="uppercase" color="#fff" my="2rem" mx="3rem"> grand total</Text>
                        <Text as="h2" fontSize="27px" fontWeight="600" textTransform="uppercase" color="#fff" mx="3rem"> ${prop.total}</Text>
                    </Box>
                </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button className="to-home" width="100%" height="3rem" textTransform="uppercase" bgColor="#D87D4A" color="#fff"
              onClick={() =>ToHome()}>Back to home</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CheckoutButton;