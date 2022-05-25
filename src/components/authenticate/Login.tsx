import { Icon,useDisclosure, Modal, ModalContent,ModalFooter, ModalHeader, ModalOverlay, FormControl, FormLabel, Input, Button, FormErrorMessage } from "@chakra-ui/react"
import { CgProfile } from "react-icons/cg"
import { useFormik } from "formik"
import * as Yup from "yup"
import { toast } from "react-toastify"
import { Spinner } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux"
import {loginUser, reset} from "../../features/auth/authSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../app/store"


const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(),
  dispatch = useDispatch(),
  navigate = useNavigate(),
  {user, isLoading, isError, isSuccess, message} = useSelector(
    (state:RootState) => state.auth),
  formik = useFormik({
    initialValues: {
     password:"", 
     email: "",    
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email is required.')
        .required('required'),
      password: Yup.string()
        .max(10, 'password must be less than 10')
        .required('required')
    }),
    onSubmit: (values) => {
      const userData  = {
        email: values.email,
        password: values.password 
      }
      // dispatch(loginUser(userData))
    }
  });
  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    
      dispatch(reset())
}, [user, isError, isLoading, isSuccess, message, navigate,dispatch])

return(
    <>
        
    <Icon as={CgProfile} className="cart-icon" onClick={onOpen} 
    _hover={{cursor:"pointer", color:"#D87D4A"}}/>
      
    <Modal isOpen={isOpen} onClose={onClose} size={"md"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="space-between">         
              <form action="" onSubmit={formik.handleSubmit}>
              <FormControl >                 
                  <FormLabel htmlFor='email'>Email</FormLabel>
                      <Input
                        id='email'
                       type='email'
                       onBlur={ formik.handleBlur}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                        {formik.touched.email && !formik.errors.email? (
                          null
                        ) : (
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        )}
    
                      <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input 
                       type='password'
                       name = "password"
                       onBlur={formik.handleBlur}
                       required
                        value={formik.values.password}
                        onChange={formik.handleChange}/>

                        <Button mt={4} colorScheme='teal' type='submit' >Submit</Button>

              </FormControl> 
              </form>
          </ModalHeader>
          <ModalFooter>

          </ModalFooter>
          </ModalContent>
      </Modal>
    </>
)
}

export default Login