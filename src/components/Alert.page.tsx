import {
    Alert,
    AlertIcon,
    AlertTitle,
  
    CloseButton
  } from '@chakra-ui/react'

  export const DeleteItem = (props: { display: string ; item:string }) => {

   return( 
         <Alert status='warning' variant={'top-accent'} display={props.display}>
                <AlertIcon />
                <AlertTitle mr={2}>Item '{props.item}' has been removed from Cart</AlertTitle>
                <CloseButton position='absolute' right='8px' top='8px' />
        </Alert>
        )
  }

  export const EmptyCartItem = (props: { display: string ;} ) => {

        return(
          <Alert status='success' variant={'top-accent'} display={props.display}>
          <AlertIcon />
          <AlertTitle mr={2}>Cart has been Emptied</AlertTitle>
          
        </Alert>  
        )
}


  export const AddItemAlert = (props: { display: string ; item: string | undefined}) => {
    return(
      <Alert status='success' variant={'top-accent'} display={props.display}>
        <AlertIcon />
        <AlertTitle mr={2}>Item '{props.item}' has been added to Cart</AlertTitle>
        
      </Alert>   
    )
  }