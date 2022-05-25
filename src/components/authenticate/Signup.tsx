import {FiLogIn} from "react-icons/fi"
import { Icon,useDisclosure, Modal, ModalContent,ModalFooter, ModalHeader, ModalOverlay, FormControl, FormLabel, Input, FormErrorMessage, Button } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import {register, reset} from "../../features/auth/authSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../app/store"

const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure(),
    Dispatch = useDispatch(),
    navigate = useNavigate(),
    {user, isLoading, isError, isSuccess, message} = useSelector(
      (state:RootState) => state.auth),
    formik = useFormik({
      initialValues:{
        name:"",
        email:"",
        password:"",
      },
      validationSchema:Yup.object({
        name: Yup.string()
        .max(45, "Must be 45 characters or less")
        .required('required'),
        email: Yup.string()
        .email('Email is required.')
        .required('required'),
        password: Yup.string()
        .max(10, 'password must be less than 10')
        .required('required')
      }),
      onSubmit :(values) => {
        const userData = {
          name: values.name,
          email:values.email,
          password:values.password
        }

        // Dispatch(register(userData))
      }
    });

    useEffect(() => {
        if(isError){
          toast.error(message)
        }

        if(isSuccess || user){
          navigate('/')
        }
          Dispatch(reset())
    }, [user, isError, isLoading, navigate,isSuccess, message, Dispatch])
  

  return(
      <>
          
      <Icon as={FiLogIn} className="cart-icon" onClick={onOpen} 
      _hover={{cursor:"pointer", color:"#D87D4A"}}/>
        
          <Modal isOpen={isOpen} 
            onClose={onClose} size={"md"}>
          <ModalOverlay />
          <ModalContent>
              <ModalHeader display="flex" justifyContent="space-between">
                <form action="" onSubmit={formik.handleSubmit}>
                <FormControl isRequired>
                    <FormLabel htmlFor='first-name'>Name</FormLabel>
                    <Input 
                    type={'text'}
                    required
                    onBlur={formik.handleBlur } 
                    id='name' 
                    placeholder='Name'
                    value ={formik.values.name}
                    onChange = {formik.handleChange} />
                       {formik.touched.name && formik.errors.name ? (
          <FormErrorMessage>
            {formik.errors.name}
            </FormErrorMessage>
        ) : null}
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                    id='email'
                    type='email'
                    onBlur={formik.handleBlur } 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    required
        />
        { formik.touched.email &&!formik.errors.email ? (
         null
        ) : (
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        )}
      
            <FormLabel htmlFor='first-name'>Password</FormLabel>
              <Input 
              type="password"
              name="password"
              onBlur={formik.handleBlur}
              required
              value={formik.values.password}
              onChange ={formik.handleChange}  />
              {
                formik.touched.password && formik.errors.password ? <FormErrorMessage>{formik.errors.password}</FormErrorMessage> : null
              }
                </FormControl>
                 <Button mt={4} colorScheme='teal' type='submit'
                  onClick={() => localStorage.setItem("user", "1")}>
                        Submit
                  </Button>
                </form>
              </ModalHeader>
              <ModalFooter>
                       
                      </ModalFooter>
                </ModalContent>
        </Modal>
      </>)
}

export default Signup