import { Box, Icon } from "@chakra-ui/react"
import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import BasicUsage from "../comps/Page.Cart";
import { IoMdClose } from "react-icons/io";
import Login from "../authenticate/Login";
import Signup from "../authenticate/Signup";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { RootState } from "../../app/store";

const Header = () => {

    const [smallScreen, setSize] = useState(false),
    dispatch = useDispatch(),
    navigate = useNavigate(),
    {user} = useSelector((state:RootState) => state.auth),
    onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    };
    

    

    return (
        <>
        <Box as="nav">
            <Box className="Header"maxWidth="100rem" 
            width="90%" margin="auto" h="100" color="#fff">
                <Box mt="3" margin="auto" h="20"  d="flex" 
                justifyContent= "space-between" alignItems="center"
                borderBottomColor="white" borderBottomStyle="solid" 
                borderBottomWidth="1.5px" >
                    <Box as="h2" fontSize="18" order={["2","2","2","1"]}
                    color="#fff" fontWeight="700" letterSpacing="2px"
                    >audiophile</Box>

                    <Box _hover={{cursor:"pointer", color:"#D87D4A"}}
                    display={["block", "block", "block", "none"]}>
                        <Icon as={ GiHamburgerMenu } 
                        onClick={()=>{setSize(!smallScreen); }}></Icon>
                    </Box>

                    <Box  as="ul" order={["1","1","2","2"]} d={["none", "none","none","inline-flex"]} textDecoration="none" listStyleType="none" fontSize="">
                        <Link to="/"> <Box as="li" className= {"home-tag"} fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >home</Box></Link>
                        <Link to="/headphones"><Box as="li" className= {"headphone-tag"} fontSize="15" textTransform="uppercase" textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >headphones</Box></Link>
                        <Link to="/speakers"><Box as="li" className= {"speaker-tag"} fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >speakers</Box></Link>
                        <Link to="/earphones"><Box as="li" className= {"earphone-tag"} fontSize="15" textTransform="uppercase"  textAlign="center" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} >earphones</Box></Link>
                    </Box>
                    
                    <Box order={["3"]}>
                      {user ? 
                      <Box display={"flex"} justifyContent={'space-between'} width={'8rem'}>
                          <BasicUsage/>
                          <Box >
                                    <Icon as={FiLogOut} className="cart-icon" onClick={onLogout }
                                    _hover={{cursor:"pointer", color:"#D87D4A"}}/> 
                                    <Box as="h6" fontSize={"14px"}>Log out</Box>
                          </Box>
                            
                          </Box>
                     :
                        <Box display={"flex"} justifyContent={'space-between'} width={'8rem'}>
                            <Box>
                                <Login/>
                                <Box as="h6" fontSize={"14px"}>Log In</Box>
                            </Box>
                            <Box>
                                <Signup/>
                                <Box as="h6" fontSize={"14px"}>Sign up</Box>
                            </Box>                            
                        </Box> 
                        }
                    </Box>
                </Box> 
            <Box>
            </Box>
            </Box>
        </Box>
        { smallScreen &&   
                <Box width="15rem" bgColor="black" marginTop="-5.5rem"  marginLeft="-1.7rem" height="60rem" pos="absolute" top="0rem"  >
                    <Box  >
                        <Icon as={IoMdClose} fontSize="33px" marginLeft="12rem" marginTop="7rem" color="white" _hover= {{  cursor:"pointer", color: "#D87D4A"}} onClick={() => setSize(false)}/>
                    </Box>
                    <Box  as="ul" width="10rem" marginLeft="4rem"   d={["flex"]} justifyContent="space-between" flexDirection="column" textDecoration="none" listStyleType="none" height="15rem">
                   <Link to="/"> <Box as="li" fontSize="15" color={"#fff"} textTransform="uppercase"  textAlign="start" mx="15px" _active={{ color: "#fff" }} _hover= {{  cursor:"pointer", color: "#fff"}}  onClick={() => setSize(false)}>home</Box></Link>
                    <Link to="/headphones"><Box as="li" fontSize="15" color={"#fff"}  textTransform="uppercase" textAlign="start" mx="15px" _active={{ color: "#fff" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} onClick={() => setSize(false)} >headphones</Box></Link>
                    <Link to="/speakers"><Box as="li" fontSize="15" color={"#fff"}  textTransform="uppercase"  textAlign="start" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}}  onClick={() => setSize(false)}>speakers</Box></Link>
                    <Link to="/earphones"><Box as="li" fontSize="15" color={"#fff"} textTransform="uppercase"  textAlign="start" mx="15px" _active={{ color: "#D87D4A" }} _hover= {{  cursor:"pointer", color: "#D87D4A"}} onClick={() => setSize(false)} >earphones</Box></Link>
                </Box>
                  
                </Box>
                
                 }
        </>
    )
}

export default Header