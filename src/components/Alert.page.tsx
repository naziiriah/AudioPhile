import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
  } from '@chakra-ui/react'

//   export const DeleteItem = (props:string | undefined) => {

//    return( 
//          <Alert status='error'>
//                 <AlertIcon />
//                 <AlertTitle mr={2}>{props}</AlertTitle>
//                 <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
//                 <CloseButton position='absolute' right='8px' top='8px' />
//         </Alert>
//         )
//   }

//   export const EmptyCartItem = () => {

//         return(
//             <Alert status='error'>
//                 <AlertIcon />
//                 {/* <AlertTitle mr={2}>{</AlertTitle> */}
//                 <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
//                 <CloseButton position='absolute' right='8px' top='8px' />
//         </Alert>
//         )

//   }

interface Prop {
    name:string |undefined
}
  export const AddItemAlert = (props:string | undefined) => {

    // alert(props)
    //   return(  
    //     <Alert status='success'>
    //         <AlertIcon />
    //         The item `{props.name}` has been added to cart
    //     </Alert>
        
    // )

  }