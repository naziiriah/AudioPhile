import { Box } from "@chakra-ui/react"

import Home from "./pages/Home.Page";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Headphone from "../src/pages/Headphone.Page";
import Earphone from "./pages/Earphone.Page";
import Speaker from "../src/pages/Speaker.Page";
import ProductPage from "./pages/Product.Page";
import Checkout from "./pages/Checkout.Page";
import ScrollToTop from "./ScrollToTop";
import { ToastContainer } from "react-toastify"

function App() {

  return (
  <>
    <BrowserRouter>
      <Box width={"100%"} maxWidth={"100rem"} margin={"auto"}>
        <ScrollToTop/>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/headphones" element={<Headphone/>} />
          <Route path = "/earphones" element={<Earphone/>}/>
          <Route path = "/speakers" element={<Speaker/>}/>
          <Route path = "/:category/:slug" element={<ProductPage/>}/>
          <Route path = "/products/checkout" element={<Checkout/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
    <ToastContainer/>
  </>
    );
}

export default App;

