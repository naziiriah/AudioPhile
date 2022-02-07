import { Box, Text, Icon,Input,RadioGroup,Radio, Image} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Header from "./components/innerPages/Header"
import { GiPayMoney } from 'react-icons/gi'
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "./app/store"
import { CartProp } from "./components/comps/Page.Cart"
import CheckoutButton from "./components/finalCheckOut.page"



const Checkout = () => {

    const Cart  = useSelector((state:RootState) => state.gears.cart)
    const [value, SetValue] = useState(true)
    const Total = Cart.reduce((a:number, b:any) => 
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        a + b.total, 0) 
    const navigation = useNavigate()
    return(
        <>
            <Box as ="header" bgColor={"#000"} 
            width="100%" height="4.8rem">
                <Header/>
            </Box> 

            <Box width={"100%"} bgColor="#f5f5f5" marginTop="0rem">
                <Box width="100%" height="6rem"></Box>
                    <Text as="h2"  fontSize="23px" fontWeight="600"
                     marginLeft={["0%", "10%", "10%", "10%"]}
                    textTransform ="capitalize" height="3rem" width="7rem" 
                    onClick={() =>navigation(-1)}
                    _hover={{cursor:"pointer", color:"#D87D4A"}} >
                    go back
                    </Text>
            </Box>

            <Box as="main" width={"100%"}  margin="auto"
             bgColor="#f5f5f5">

                <Box width="80%" margin="auto" display="flex" 
              flexDirection={["column", "column", "column","row"]}
              justifyContent="space-between">
                    <Box as="section" width={["100%","100%", "100%","65%"]} height={["150rem", "120rem", "100rem", "90rem"]} marginBottom={"4rem"} bgColor="#fff">
                        <Box as="h1" textTransform="uppercase" 
                        fontSize="33px" letterSpacing="2px"
                        fontWeight="600" margin="2rem">
                            checkout
                        </Box>
{/* Billing section within form input area */}
                        <Box as="h3" fontSize="20px" color="#D87D4A" 
                        fontWeight="550" margin="2rem"textTransform="uppercase" 
                        letterSpacing="1px">
                            billing details
                        </Box>

                        <Box as ="form" 
                         gridGap="4%"
                        marginLeft="2rem"
                        width="100%"> 

                                <Box display="flex" 
                                flexDirection={["column", "column", "row", "row"]}  
                                width="90%">

                                        <Box marginRight="1rem">
                                                
                                                <Box as ="label" 
                                                fontWeight="550"
                                                textTransform="capitalize">
                                                    Name
                                                </Box>

                                                <Input type="text" 
                                                placeholder='Axel Ward' focusBorderColor='#D87D4A'
                                                marginRight=".9rem" size='lg'  my=".5rem" />
                                        </Box>

                                        <Box marginRight="1rem">

                                                <Box as ="label"
                                                fontWeight="550" 
                                                textTransform="capitalize">
                                                    Email
                                                </Box>

                                                <Input type={"email"} placeholder='axel@email.com'
                                                focusBorderColor='#D87D4A' size='lg' my=".5rem" />
                                        </Box>
                                
                                </Box>    
                        
                                <Box my="1rem" marginRight="1rem">

                                        <Box as ="label" fontWeight="550" 
                                        textTransform="capitalize">
                                            phone number
                                        </Box>

                                        <Input type="number" placeholder='+1 233 4454 2364' 
                                        focusBorderColor='#D87D4A' size='lg' width={"90%"} display="flex"/>
                                </Box>
                        </Box>

                        <Box as ="form" marginX="2rem"
                         marginY="4rem"  width="100%">
{/* Shipping Section form within input area */}

                                <Box width="100%">

                                        <Box as="h3" fontSize="20px" 
                                        color="#D87D4A" fontWeight="550" marginY="2rem"
                                        textTransform="uppercase" letterSpacing="1px">
                                            shipping info
                                        </Box>

                                        <Box marginRight="1rem">
                                            <Box as ="label" fontWeight="550" 
                                            textTransform="capitalize">
                                                address
                                            </Box>
                                            <Input type={"text"} placeholder='127 stratford avenue'
                                            focusBorderColor='#D87D4A' 
                                            size='lg' my=".5rem" width="90%" display="flex"/>
                                        </Box>
                                
                                </Box>
                                <Box display="flex" 
                                flexDirection={["column", "column", "row", "row"]}  
                                width="90%">
                                        <Box marginRight="1rem">
                                                
                                                <Box as ="label" 
                                                fontWeight="550"
                                                textTransform="capitalize">
                                                    city
                                                </Box>

                                                <Input type="text" 
                                                placeholder='New York' focusBorderColor='#D87D4A'
                                                marginRight=".9rem" size='lg'  my=".5rem" />
                                        </Box>

                                        <Box marginRight="1rem">

                                                <Box as ="label"
                                                fontWeight="550" 
                                                textTransform="capitalize">
                                                    zipcode
                                                </Box>

                                                <Input type={"number"} placeholder='029456'
                                                focusBorderColor='#D87D4A' size='lg' my=".5rem" />
                                        </Box>
                                </Box>

                                <Box my="1rem" marginRight="1rem" >
                                    
                                        <Box as ="label" fontWeight="550" 
                                        textTransform="capitalize">
                                            country
                                        </Box>

                                        <Input type={"text"} placeholder='USA'
                                        focusBorderColor='#D87D4A' 
                                        size='lg' my=".5rem" width="90%" display="flex"/>
                                </Box>
                        </Box>
{/*  Payment detail  */}
                        <Box  marginX="2rem" marginY="3rem">
                            <Box as="h3" fontSize="20px" color="#D87D4A" fontWeight="550" marginTop="6rem"
                            marginBottom="3rem"
                              textTransform="uppercase" letterSpacing="1px"  >payment details</Box>
                            <Box height="23rem" display ="flex" flexDirection={["column", "column", "row", "row"]} width="100%">
                                <Box as="h3" height="5rem"  width={["100%","100%", "48%", "48%"]} textTransform="capitalize" fontFamily="23px" fontWeight="650"
                                >payment method</Box>
                                <Box height="10rem" width={["100%","100%", "48%", "48%"]}>
                                    <RadioGroup defaultValue='e-Money'>
                                        <Box width="100%" height="3rem" my=".3rem"  cursor="pointer" borderWidth="1px"  borderColor="#D87D4A" colorScheme="#D87D4A" borderRadius="10px" _active={{borderColor:'orange'}}>
                                            <Radio onClick={()=> SetValue(true)}  size="lg"display="flex" justifyContent="flex-start" alignItems="center" my=".5rem" mx="1rem" colorScheme="orange">e-money</Radio>
                                        </Box>
                                        <Box width="100%" height="3rem" my="1rem" onClick={()=> SetValue(false)} cursor="pointer" borderWidth="1px"  borderColor="#D87D4A" colorScheme="#D87D4A" borderRadius="10px" _active={{borderColor:'orange'}}>
                                            <Radio onClick={()=> SetValue(false)}  size="lg"display="flex" justifyContent="flex-start" alignItems="center" my=".5rem" mx="1rem" colorScheme="black">cash on delivery</Radio>
                                        </Box>
                                    </RadioGroup>
                                </Box>
                            </Box>
                            {
/* { to display contents in accordance to type of payment to be made*/
                                value ?
                                 <Box display="flex" justifyContent="space-between" flexDirection={["column", "column", "row", "row"]} width="100%" height="7rem" marginTop="-9rem">
                                    <Box width={["100%","100%", "48%", "48%"]} height="7rem">
                                            <Box as ="label" fontWeight="550">e-money Number</Box>
                                            <Input placeholder='0000 1123 4567 0987' focusBorderColor='#D87D4A' size='lg' width="100%" my=".5rem" />
                                        </Box>
                                        <Box width={["100%","100%", "48%", "48%"]} height="7rem">
                                            <Box as ="label" fontWeight="550" >e-money Pin</Box>
                                            <Input placeholder='1234' focusBorderColor='#D87D4A' size='lg'width="100%" my=".5rem" />
                                        </Box>
                                </Box>
                                :<Box width="100%" height="7rem" marginTop="-9rem" display="flex" flexDirection={["column", "row", "row", "row"]}>
                                <Icon as ={GiPayMoney} fontSize="100" color='#D87D4A' />
                                    <Box as="p" lineHeight="27px" 
                                    fontSize="21px" letterSpacing="1px" width="100%" height="100%">
                                        The 'Cash on Delivery' option enables you to pay on cash when our delivery courier
                                        arrives at your residence. Just make sure your address is correct so that your order will
                                        not be cancelled.
                                    </Box>
                                 </Box>
                            }
                        </Box>
                    </Box>
                    
                    <Box as="section" width={["100%","100%", "100%","33%"]} height={"45rem"} bgColor="#fff" >
                        <Text as="h2" my="2rem" mx="1rem" fontSize={"20px"} 
                        textTransform={"uppercase"} fontWeight={"600"}>summary</Text>

                        <Box width="92%"  mx="1rem">
                            {
                                Cart.map((state: CartProp)  => (
                                    <Box height={"4rem"} my="1rem" width={"100%"} display={"flex"} justifyContent={"space-between"} >
                                        <Box display={"flex"} >

                                            <Image src={state.newItem.image.desktop} alt={state.newItem.slug} width={"3rem"} height={"3rem"}/>

                                            <Box marginLeft={"1rem"}>
                                                <Text as="h3">{state.newItem.slug}</Text>
                                                <Text>${state.newItem.price}</Text>
                                            </Box>

                                        </Box>

                                        <Box width={"3rem"} textAlign={"center"}>x{state.value}</Box>
                                    </Box>
                                ) )
                            }
                            
                            <CheckoutButton total ={Total}/>
                            
                        </Box>

                    </Box>


                </Box>

            </Box>
        </>
    )
}


export default Checkout