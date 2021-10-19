import { BrowserRouter, a, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/index"
import BikeRentalHome from "./pages/home";
import Landing from "./pages/landing"
import PostBike from "./pages/post";
// import Test from "./pages/test";
function App() {
  return (
    <>
    <div style={{}}>
    {/* <NavBar /> */}
       <BrowserRouter>
    <Switch>
      <Route path="/" component={Landing} exact></Route>
      <Route path="/user" component={BikeRentalHome} exact></Route>
      <Route path="/postbike" component={PostBike} exact></Route>


    </Switch>
    </BrowserRouter>
    </div>
  
    </>
   
  );
}

export default App;
