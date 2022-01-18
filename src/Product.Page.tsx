import { Box,Image, Icon, Button, Text } from "@chakra-ui/react"
import {  useLocation, useNavigate } from "react-router-dom"
import { RootState } from "./app/store"
import { useSelector } from "react-redux"
import Header from "./components/innerPages/Header"
import { IoMdAdd} from "react-icons/io"
import { FaMinus } from "react-icons/fa";
import { useState } from "react"
import MiniComponets from "./components/comps/MiniComponents.Products"
import PageNavigation from "./components/comps/Page.navigation"
import InfoSection from "./components/comps/Page.Aside"
import PageFooter from "./components/comps/Page.footer"


const ProductPage = () => {
   const Location = useLocation()
   const AudioMaterials  = useSelector((state: RootState) => state.gears.value)
    const navigation = useNavigate()
    
   const Product = typeof(Location.state) === "number" ? 
        AudioMaterials.find(products => products.id === Location.state) :
        AudioMaterials.find(products => products.slug === Location.state)


   const [Value, setValue] = useState(0)
   
   function increment(){
       return Value === 10 ? Value : setValue(Value + 1)
   }

   function decrement(){
       return Value === 0 ? Value : setValue(Value - 1)
   }


    return (
        <Box key={Product?.id}>
            <Box as ="header"  bgColor={"#000"} 
            width="100%" height="4.8rem">
                <Header/>
            </Box>
            <Box as="main" width="100%" >

               <Box as="h2"  fontSize="23px" fontWeight="600"
                marginTop="6rem" marginLeft={["0%", "10%", "10%", "10%"]}
                textTransform ="capitalize" height="3rem" width="7rem" 
                onClick={() =>navigation(-1)}
                _hover={{cursor:"pointer", color:"#D87D4A"}} >
                go back</Box> 

                {/* section area for displaying  */}
                <Box as="section" 
                  width={["100%", "80%", "80%", "80%"]}
                  display="flex" 
                  flexDirection={["column", "column", "row", "row"]}
                  margin = "auto" 
                  marginTop="2rem"
                  marginBottom="2rem"
                  justifyContent="space-between"
                  height={["70rem","70rem","40rem","36rem"]}>
                
                        <Image src= {Product?.image.desktop}  height="36rem" width={["100%", "100%", "48%", "48%"]} alt={Product?.slug}/>

                        <Box marginLeft="0rem" width={["100%", "100%", "48%", "48%"]} >
                            { Product?.new && 
                            <Box as="h3"color="#D87D4A" fontSize="20px" 
                            marginTop="3rem" textTransform="uppercase" 
                            letterSpacing="8px" width={["20rem"]}> new product</Box>
                            }
                            <Box as ="h1" fontSize="36px" fontWeight="600" 
                            my=".5rem" textTransform="uppercase" letterSpacing="4px"
                            >{Product?.name}</Box>

                            <Box as ="p" fontSize="20px" >{Product?.description}</Box>

                            <Box as="h3" my="1rem" fontWeight="700" 
                            fontSize={["23px", "33px", "33px", "33px"]} 
                            >${Product?.price}</Box>

                            <Box display="flex" flexDirection={["row", "row", "row", "row"]}
                             width="100%"  height="10rem"justifyContent="space-between">
                        
                        {/* display for add cart button area */}

                                <Box display="flex"  height="4rem" width={["50%","50%","50%","50%"]}  
                                marginTop="3rem" marginRight="1rem"   alignItems="center">

                                    <Box width="32%" bgColor="#f3f3f3"  height="4.1rem" 
                                    alignItems="center" onClick={() => decrement()}>
                                        <Icon as ={FaMinus}  margin="auto"my="1.5rem"  mx="2rem"/>
                                    </Box>

                                    <Box width="32%" bgColor="#f3f3f3" height="4.1rem" alignItems="center" >
                                        <Box my="1.4rem"  mx="2rem">{Value}</Box>
                                    </Box>
                        
                                    <Box width="32%" height="4.1rem" bgColor="#f3f3f3" 
                                    alignItems="center" onClick={() => increment()} >
                                        <Icon my="1.5rem"  mx="2rem" as={IoMdAdd}/>
                                    </Box>

                                </Box>

                                <Button bgColor = "#D87D4A" mt="3rem" borderRadius="0" 
                                textAlign = "center" textTransform="uppercase" letterSpacing="3px"
                                width ="13rem" color = "#fff" _hover={{cursor:'pointer', opacity:'0.7'}}
                                fontSize="16px" height="4rem" onClick={() => navigation(`/products/checkout`)}                        
                                >add to cart</Button>
                            </Box>

                        </Box>
                </Box>

                <Box as="article"  height={["67rem", "67rem", "40rem","40rem"]}  
                display="flex" flexDirection={["column", "column", "column", "row"]}
                justifyContent="space-between" width ="80%" margin=" auto" my="3rem">

                    <Box  width={["100%","100%","100%","47%"]} >
                        <Box as="h2" fontSize={["23px", "33px", "33px", "33px"]} 
                        fontWeight="600" textTransform="uppercase">Features</Box>

                        <Box as ="p" lineHeight="33px" fontSize="20px" marginTop="1.4rem" 
                        marginBottom="1rem" > {Product?.features}
                        </Box>

                    </Box>

                    <Box width={["100%","100%","100%","47%"]} display={["flex"]} 
                    flexDirection={["row", "row", "row", "column"]} >

                        <Box as="h2" fontSize={["23px", "33px", "33px", "33px"]} 
                        height="" width={["50%", "50%", "50%", "100%"]}  
                        fontWeight="600" textTransform="uppercase">in the box
                        </Box>

                        <Box marginTop={["0rem", "0rem","0rem", "1.4rem"]} 
                        width={["50%", "50%", "50%", "80%"]} > 

                            {Product?.includes.map(includes=> (
                                <Box display="flex" marginTop=".8rem" >
                                    <Box as="h3" marginRight="1.5rem" lineHeight="33px" fontSize="20px" 
                                    marginTop=".4rem" color="#D87D4A">{ includes.quantity }x</Box>
                                    <Box as="p" lineHeight="33px" fontSize="20px"  marginTop=".4rem">
                                    { includes.item }</Box>
                                </Box>
                            ))}

                      </Box>
                  </Box>
                </Box>

                {/* gallery pictures */} 
                <Box as="section" width="80%" margin="auto"  marginTop="9rem" display="flex" 
                flexDirection={["column", "row", "row", "row"]} justifyContent="space-between" >
                        <Box width={["100%","48%","48%","48%"]}  marginBottom="3rem" height="40rem" >
                          <Box width="100%" height ="19rem">
                          <Image src ={Product?.gallery.first.desktop} alt="gallery-1" width="100%" height="100%"/>
                          </Box>
                          <Box width="100%" marginTop="2rem" height ="19rem">
                          <Image src ={Product?.gallery.second.desktop}  alt="gallery-2" width="100%" height="100%"/>
                          </Box>
                        </Box>
                          <Box width={["100%","48%","48%","48%"]}  height="40rem">
                            <Image src ={Product?.gallery.third.desktop} alt="gallery-3" width="100%" height="100%"/>
                          </Box>
                </Box>

                {/* other related products */}
                <Text  as="h1" marginTop="4rem" 
                marginBottom="5rem" textAlign="center"
                fontSize="33px" fontWeight="650" 
                textTransform="uppercase" letterSpacing="3px">
                  you may also like
                </Text>

                <Box as ="section" display=" flex" justifyContent="space-between" width={["100%","100%","80%","80%"]} flexDirection={["column", "column", "row", "row"]} margin="auto" marginBottom="10rem">
                      {Product?.others.map( others => (
                        <MiniComponets slug={others.slug} image={others.image.desktop}/>
                      ))}
              </Box>

              <PageNavigation/>

              <InfoSection/>

            </Box>

            <PageFooter/>

        </Box>
    )
}

export default ProductPage