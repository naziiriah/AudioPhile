import { Box } from "@chakra-ui/react"

import Home from "./Home.Page";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Headphone from "./Headphone.Page";
import Earphone from "./Earphone.Page";
import Speaker from "./Speaker.Page";
import ProductPage from "./Product.Page";


function App() {

  return (
    <BrowserRouter>
      <Box width={"100%"} maxWidth={"100rem"} margin={"auto"}>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/headphones" element={<Headphone/>} />
          <Route path = "/earphones" element={<Earphone/>}/>
          <Route path = "/speakers" element={<Speaker/>}/>
          <Route path = "/:category/:slug" element={<ProductPage/>}/>
        </Routes>
      </Box>

    </BrowserRouter>
    
    );
}

export default App;

