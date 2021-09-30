import { BrowserRouter, a, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/index"
import Landing from "./pages/landing"
function App() {
  return (
    <>
    <div style={{"width":"90%","margin":"auto"}}>
    <NavBar />
       <BrowserRouter>
    <Switch>
      <Route path="/" component={Landing} ></Route>
    </Switch>
    </BrowserRouter>
    </div>
  
    </>
   
  );
}

export default App;
