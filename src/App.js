import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AboutMe } from "./pages/about-me";
import { Home } from "./pages/home";
import { Footer } from "./pages/shared/footer";
import { Nav } from "./pages/shared/nav";

const App = () => {
   return (
      <BrowserRouter>
         <div className="my-16 md:my-24">
            <Nav />
            <Switch>
               <Route path="/" exact>
                  <Home />
               </Route>
               <Route path="/about-me">
                  <AboutMe />
               </Route>
            </Switch>
            <Footer />
         </div>
      </BrowserRouter>
   );
};

export default App;
