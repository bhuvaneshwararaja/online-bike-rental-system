import { BrowserRouter, a, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/index"
import Landing from "./pages/landing"
import Test from "./pages/test";
function App() {
  return (
    <>
    <div style={{"width":"90%","margin":"auto"}}>
    <NavBar />
       <BrowserRouter>
    <Switch>
      <Route path="/" component={Landing} exact></Route>
      <Route path="/test" component={Test} exact></Route>

    </Switch>
    </BrowserRouter>
    </div>
  
    </>
   
  );
}

export default App;
