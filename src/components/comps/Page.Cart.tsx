
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


const BasicUsage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                            onClick={() => { onClose() }}>Remove all</Text>

                        </ModalHeader>
            
            
            <Box display="flex" justifyContent="space-between" width="90%" margin="auto">
                <Box as="h1" textTransform="uppercase" fontSize="23px" fontWeight="600"> total</Box>
                
              </Box>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BasicUsage